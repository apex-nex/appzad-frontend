import { metadata } from "@/lib/metadata";

export default function Portfolio() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Portfolio
            </h2>
            <p className="text-lg text-indigo-200/65">
              Explore our successful projects that have transformed businesses.
            </p>
          </div>

          {/* Portfolio grid */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-1 lg:grid-cols-3">
            {metadata.portfolio.map((project, index) => (
              <article
                key={index}
                className="group relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-6">
                  <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                    {project.project}
                  </h3>
                  <p className="mb-4 text-indigo-200/65">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex rounded-full bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
