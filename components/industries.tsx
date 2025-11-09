import { metadata } from "@/lib/metadata";

export default function Industries() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Industries We Serve
            </h2>
            <p className="text-lg text-indigo-200/65">
              Delivering specialized solutions across diverse sectors with deep industry expertise.
            </p>
          </div>

          {/* Industries grid */}
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {metadata.industries.map((industry, index) => (
              <article
                key={index}
                className="group relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs transition-all before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 text-4xl">{industry.icon}</div>
                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                  {industry.name}
                </h3>
                <p className="text-indigo-200/65">{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
