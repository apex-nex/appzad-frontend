import { metadata } from "@/lib/metadata";

export default function Services() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Services
            </h2>
            <p className="text-lg text-indigo-200/65">
              We deliver tailored solutions that drive growth and innovation for your business.
            </p>
          </div>

          {/* Services grid */}
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {metadata.services.map((service, index) => (
              <article
                key={index}
                className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-3">
                  <div className="inline-flex rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-200">
                    {service.name}
                  </div>
                </div>
                <p className="text-indigo-200/65">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
