import dynamic from 'next/dynamic';
import { LocaleParams } from '@/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import teamData from '@/data/team.json';

// Dynamic imports for animations
const FadeIn = dynamic(() => import('@/components/animations/fade-in').then(mod => ({ default: mod.FadeIn })));
const ScaleIn = dynamic(() => import('@/components/animations/scale-in').then(mod => ({ default: mod.ScaleIn })));
const StaggerContainer = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerContainer })));
const StaggerItem = dynamic(() => import('@/components/animations/stagger-container').then(mod => ({ default: mod.StaggerItem })));
const HoverCard = dynamic(() => import('@/components/animations/hover-card').then(mod => ({ default: mod.HoverCard })));

// Dynamic imports for icons
const Users = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Users })));
const Mail = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Mail })));
const Linkedin = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Linkedin })));
const Github = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Github })));
const Briefcase = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Briefcase })));

export default async function TeamPage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = await params;
  setRequestLocale(lang);
  const t = await getTranslations('team');

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <ScaleIn delay={0.4}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-soft" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>
                <Users className="w-4 h-4" />
                {t('badge')}
              </span>
            </ScaleIn>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--color-text)' }}>
            {t('title')}{' '}
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              {t('titleHighlight')}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="mt-6 text-lg leading-8 max-w-3xl mx-auto font-medium" style={{ color: 'var(--color-muted)' }}>
            {t('description')}
          </p>
        </FadeIn>
      </div>

      {/* Leadership Section */}
      <FadeIn delay={1.0}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-text)' }}>
            {t('leadership')}
          </h2>
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
            {teamData.leadership.map((member, index) => (
              <StaggerItem key={member.id} index={index}>
                <HoverCard scaleOnHover={1.03}>
                  <div className="p-8 rounded-2xl text-center h-full" style={{ background: 'var(--gradient-card)' }}>
                    {/* Avatar placeholder */}
                    <div className="mx-auto w-24 h-24 rounded-full mb-4 flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                      <span className="text-white font-bold text-3xl">{member.name.charAt(0)}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                      {member.name}
                    </h3>

                    <p className="text-sm font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
                      {member.role}
                    </p>

                    <p className="text-sm mb-4" style={{ color: 'var(--color-muted)' }}>
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 rounded text-xs font-medium" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-text)' }}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                      <a href={`mailto:${member.email}`} className="p-2 rounded-lg transition-all duration-300 hover:scale-110" style={{ background: 'var(--gradient-secondary)' }} aria-label="Email">
                        <Mail className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-300 hover:scale-110" style={{ background: 'var(--gradient-secondary)' }} aria-label="LinkedIn">
                          <Linkedin className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-300 hover:scale-110" style={{ background: 'var(--gradient-secondary)' }} aria-label="GitHub">
                          <Github className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
                        </a>
                      )}
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Team Members Section */}
      <FadeIn delay={1.2}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-text)' }}>
            {t('members')}
          </h2>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {teamData.team.map((member, index) => (
              <StaggerItem key={member.id} index={index}>
                <HoverCard scaleOnHover={1.05}>
                  <div className="p-6 rounded-2xl text-center h-full" style={{ background: 'var(--gradient-card)' }}>
                    {/* Avatar placeholder */}
                    <div className="mx-auto w-20 h-20 rounded-full mb-3 flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                      <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>
                      {member.name}
                    </h3>

                    <p className="text-xs font-semibold mb-3" style={{ color: 'var(--color-primary)' }}>
                      {member.role}
                    </p>

                    <p className="text-xs mb-3" style={{ color: 'var(--color-muted)' }}>
                      {member.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-0.5 rounded text-xs" style={{ background: 'var(--gradient-secondary)', color: 'var(--color-text)' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </FadeIn>

      {/* Open Positions */}
      {teamData.openPositions && teamData.openPositions.length > 0 && (
        <FadeIn delay={1.4}>
          <div className="text-center p-12 rounded-3xl" style={{ background: 'var(--gradient-hero)' }}>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              {t('joinTeam')}
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
            <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto mb-8">
              {teamData.openPositions.map((position, index) => (
                <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm text-left">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{position.title}</h3>
                      <p className="text-sm text-white/80 mb-2">{position.type} • {position.location}</p>
                      <p className="text-sm text-white/70">{position.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <HoverCard scaleOnHover={1.05}>
              <a
                href={`mailto:careers@appzad.com`}
                className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ color: 'var(--color-primary)' }}
              >
                Apply Now
              </a>
            </HoverCard>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
