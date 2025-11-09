import { Inter } from 'next/font/google';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Locale } from '@/types';
import { getTranslations, setRequestLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Globe, Heart, Mail, Github, Linkedin, ArrowRight, Twitter } from 'lucide-react';
import companyData from '@/data/company.json';
import '@/app/globals.css';

// Dynamic imports for client components only
const ThemeSelector = dynamic(() => import('@/components/theme-selector').then(mod => ({ default: mod.ThemeSelector })));
const MobileNav = dynamic(() => import('@/components/mobile-nav').then(mod => ({ default: mod.MobileNav })));
const Navigation = dynamic(() => import('@/components/navigation').then(mod => ({ default: mod.Navigation })));
const SmoothHeader = dynamic(() => import('@/components/smooth-header').then(mod => ({ default: mod.SmoothHeader })));
const ScrollToTop = dynamic(() => import('@/components/scroll-to-top').then(mod => ({ default: mod.ScrollToTop })));

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ lang: 'en' as Locale }, { lang: 'fr' as Locale }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations();
  const messages = await getMessages();

  return (
    <html lang={lang} className={inter.className}>
      <body className="min-h-screen antialiased" style={{ background: 'var(--color-background)' }}>
        <NextIntlClientProvider messages={messages}>
          <SmoothHeader>
            <nav className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <Link href={`/${lang}`} className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <span className="hidden sm:block text-xl font-bold" style={{ color: 'var(--color-text)' }}>{companyData.name}</span>
                  </Link>
                </div>

                {/* Unified Tab Group Navigation */}
                <Navigation lang={lang} />

                {/* Right side - Contact Button with controls */}
                <div className="flex items-center space-x-3">
                  {/* Hidden controls on smaller screens, shown in mobile menu */}
                  <div className="hidden lg:flex items-center space-x-2">
                    {/* <GlassModeToggle /> */}
                    <ThemeSelector />
                    <Link href={lang === 'en' ? '/fr' : '/en'} className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg transition-all duration-300" style={{ color: 'var(--color-text)' }}>
                      <Globe className="w-3 h-3" />
                      {lang === 'en' ? 'FR' : 'EN'}
                    </Link>
                  </div>
                  
                  {/* Contact Button */}
                  <Link
                    href={`/${lang}/contact`}
                    className="px-6 py-2 text-white font-medium rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-lg"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    {t('navigation.contact')}
                  </Link>

                  <MobileNav lang={lang} />
                </div>
              </div>
            </nav>
          </SmoothHeader>
          <main className="flex-1">{children}</main>
          <footer className="relative border-t mt-20 backdrop-blur-xl" style={{ background: 'var(--card-background)', borderColor: 'var(--card-border)' }}>
            {/* Decorative gradient */}
            <div className="absolute inset-x-0 -top-px h-px" style={{ background: 'var(--gradient-primary)', opacity: 0.5 }}></div>

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand Section */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>{companyData.name}</span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
                    {t('footer.tagline')}
                  </p>
                  <div className="flex gap-3">
                    <a href={companyData.socialMedia.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                       style={{ background: 'var(--gradient-secondary)' }}
                       aria-label="GitHub">
                      <Github className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
                    </a>
                    <a href={companyData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                       style={{ background: 'var(--gradient-secondary)' }}
                       aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
                    </a>
                    <a href={companyData.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                       className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                       style={{ background: 'var(--gradient-secondary)' }}
                       aria-label="Twitter">
                      <Twitter className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
                    </a>
                    <a href={`mailto:${companyData.email}`}
                       className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                       style={{ background: 'var(--gradient-secondary)' }}
                       aria-label="Email">
                      <Mail className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
                    {t('footer.quickLinks')}
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href={`/${lang}`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('navigation.home')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/about`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('navigation.about')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/services`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('navigation.services')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/projects`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('navigation.projects')}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
                    {t('footer.services')}
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href={`/${lang}/services`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('services.list.webDevelopment.title')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/services`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('services.list.uiux.title')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/services`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('services.list.mobile.title')}
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${lang}/services`} className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{ color: 'var(--color-muted)' }}>
                        {t('services.list.backend.title')}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
                    {t('footer.contact')}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <a href={`mailto:${companyData.email}`} className="text-sm transition-colors duration-300 hover:underline" style={{ color: 'var(--color-muted)' }}>
                        {companyData.email}
                      </a>
                    </li>
                    <li>
                      <Link href={`/${lang}/schedule`}
                            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                            style={{ background: 'var(--gradient-primary)', color: 'white' }}>
                        {t('footer.getQuote')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--card-border)' }}>
                <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>
                  {t('footer.copyright')}
                </p>
                <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                  <Link href={`/${lang}/privacy`} className="hover:underline transition-colors duration-300" style={{ color: 'var(--color-muted)' }}>
                    {t('footer.privacy')}
                  </Link>
                  <span>•</span>
                  <Link href={`/${lang}/terms`} className="hover:underline transition-colors duration-300" style={{ color: 'var(--color-muted)' }}>
                    {t('footer.terms')}
                  </Link>
                </div>
              </div>
            </div>

          </footer>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}