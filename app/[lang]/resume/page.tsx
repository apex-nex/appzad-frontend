'use client';

import { LocaleParams } from '@/types';
import resumeData from '@/data/resume.json';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { DownloadButton } from '@/components/resume/download-button';
import { use } from 'react';

export default function ResumePage({ params }: { params: Promise<LocaleParams> }) {
  const { lang } = use(params);

  const formatDate = (dateString: string | null, current: boolean) => {
    if (current) return 'Present';
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          header, footer, .no-print {
            display: none !important;
          }
          .resume-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
          .page-break {
            page-break-before: always;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Download Button - Hidden on Print */}
        <div className="no-print mb-8 flex justify-end">
          <DownloadButton />
        </div>

        {/* Resume Container */}
        <div className="resume-container mx-auto max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden" style={{ color: '#1a1a1a' }}>
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-10">
            <h1 className="text-4xl font-bold mb-2">{resumeData.personal.name}</h1>
            <p className="text-xl mb-4 opacity-90">{resumeData.personal.title}</p>

            <div className="flex flex-wrap gap-4 text-sm">
              <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-2 hover:underline">
                <Mail className="w-4 h-4" />
                {resumeData.personal.email}
              </a>
              <a href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:underline">
                <Phone className="w-4 h-4" />
                {resumeData.personal.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {resumeData.personal.location}
              </span>
            </div>

            <div className="flex gap-4 mt-4">
              <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:underline">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:underline">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 py-8">
            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">Professional Experience</h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <p className="text-lg text-purple-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p className="font-semibold">{formatDate(exp.startDate, false)} - {formatDate(exp.endDate, exp.current)}</p>
                        <p>{exp.location} • {exp.workMode}</p>
                      </div>
                    </div>

                    <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="leading-relaxed">{resp}</li>
                      ))}
                    </ul>

                    <div className="mt-3">
                      <p className="text-sm font-semibold text-gray-600">Technologies:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8 page-break">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">Key Projects</h2>
              <div className="space-y-6">
                {resumeData.projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                        <p className="text-md text-purple-600 font-semibold">{project.company}</p>
                      </div>
                      <p className="text-sm text-gray-600 font-semibold">
                        {formatDate(project.startDate, false)} - {formatDate(project.endDate, project.current)}
                      </p>
                    </div>

                    <p className="text-gray-700 mb-2">{project.description}</p>

                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700 mb-3">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">{highlight}</li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Frontend Frameworks</h3>
                  <p className="text-gray-700 text-sm">{resumeData.technicalSkills.frontendFrameworks.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Languages</h3>
                  <p className="text-gray-700 text-sm">{resumeData.technicalSkills.languages.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Styling & UI</h3>
                  <p className="text-gray-700 text-sm">{resumeData.technicalSkills.styling.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">State Management</h3>
                  <p className="text-gray-700 text-sm">{resumeData.technicalSkills.stateManagement.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Tools & DevOps</h3>
                  <p className="text-gray-700 text-sm">{resumeData.technicalSkills.tools.join(', ')}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Methodologies</h3>
                  <p className="text-gray-700 text-sm">{resumeData.technicalSkills.methodologies.join(', ')}</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {resumeData.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <div>
                      <p className="font-semibold text-gray-900">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.issuer} • {formatDate(cert.date, false)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-600">Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-purple-600 font-semibold">{edu.institution}</p>
                  <p className="text-sm text-gray-600">
                    {formatDate(edu.startDate, false)} - {formatDate(edu.endDate, false)} • {edu.location}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
