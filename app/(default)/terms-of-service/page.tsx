export const metadata = {
  title: "Terms of Service - AppZad",
  description: "AppZad's terms of service and user agreement.",
};

import PageIllustration from "@/components/page-illustration";

export default function TermsOfService() {
  return (
    <>
      <PageIllustration />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Page header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Terms of Service
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-lg text-indigo-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Last updated: January 2025
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8 text-indigo-200/65">
                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    1. Acceptance of Terms
                  </h2>
                  <p className="mb-4">
                    By accessing and using AppZad's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    2. Services Description
                  </h2>
                  <p className="mb-4">
                    AppZad provides web development services including but not limited to custom web development, e-commerce solutions, CMS development, responsive design, and SEO optimization. The specific scope of services will be outlined in individual project agreements.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    3. User Responsibilities
                  </h2>
                  <p className="mb-4">
                    You agree to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our services in compliance with all applicable laws</li>
                    <li>Not interfere with or disrupt our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    4. Intellectual Property
                  </h2>
                  <p className="mb-4">
                    All content, features, and functionality of our services are owned by AppZad and are protected by international copyright, trademark, and other intellectual property laws. Upon full payment, clients receive ownership of their custom-developed websites and applications.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    5. Payment Terms
                  </h2>
                  <p className="mb-4">
                    Payment terms will be specified in individual project agreements. Generally, we require a deposit before starting work and final payment upon project completion. All fees are non-refundable unless otherwise stated in writing.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    6. Limitation of Liability
                  </h2>
                  <p className="mb-4">
                    AppZad shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    7. Modifications to Terms
                  </h2>
                  <p className="mb-4">
                    We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    8. Contact Information
                  </h2>
                  <p className="mb-4">
                    For questions about these terms, please contact us at:
                  </p>
                  <p>Email: appzadhq@gmail.com</p>
                  <p>Phone: +91 94034 16154</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
