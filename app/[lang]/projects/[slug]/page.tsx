import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
// import { getTranslations } from 'next-intl/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, getAllProjects } from '@/lib/data';
import { ProjectParams } from '@/types';
import { slugify, formatDate } from '@/lib/utils';

// Dynamic import for icon
const Sparkles = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Sparkles })));

export async function generateStaticParams() {
  const projects = await getAllProjects();
  const locales = ['en', 'fr'];
  
  const params: { lang: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const project of projects) {
      params.push({
        lang: locale,
        slug: slugify(project.title)
      });
    }
  }
  
  return params;
}

export default async function ProjectPage({ params }: { params: Promise<ProjectParams> }) {
  const { lang, slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  // const t = await getTranslations();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href={`/${lang}/projects`}>← Back to Projects</Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--color-text)' }}>
          {project.title}
        </h1>
        <p className="text-lg mb-6" style={{ color: 'var(--color-muted)' }}>
          {project.description}
        </p>
        <div className="flex gap-4 mb-6">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-8 relative aspect-video">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="rounded-2xl shadow-strong object-cover"
            priority
          />
        ) : (
          <div className="aspect-video rounded-2xl flex items-center justify-center shadow-medium" style={{ background: 'var(--gradient-hero)' }}>
            <div className="text-center">
              <div className="mx-auto h-24 w-24 rounded-3xl flex items-center justify-center shadow-strong mb-4" style={{ background: 'var(--gradient-primary)' }}>
                <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold flex items-center gap-2 justify-center" style={{ color: 'var(--color-primary)' }}>
                <Sparkles className="w-5 h-5" />
                {project.title}
              </h3>
              <p className="font-medium" style={{ color: 'var(--color-muted)' }}>Project Preview</p>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Project Details */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                {project.longDescription ? (
                  <p>{project.longDescription}</p>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold shadow-soft hover:shadow-medium transition-all duration-200"
                    style={{ background: 'var(--gradient-secondary)', color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Info */}
          <Card>
            <CardHeader>
              <CardTitle>Project Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>Created</p>
                <p className="text-sm" style={{ color: 'var(--color-text)' }}>{formatDate(project.createdAt, lang)}</p>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--color-muted)' }}>Last Updated</p>
                <p className="text-sm" style={{ color: 'var(--color-text)' }}>{formatDate(project.updatedAt, lang)}</p>
              </div>
              {project.featured && (
                <div>
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Featured Project
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}