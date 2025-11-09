export const metadata = {
  title: "Privacy Policy - AppZad",
  description: "AppZad's privacy policy and how we handle your data.",
};

import PageIllustration from "@/components/page-illustration";

export default function PrivacyPolicy() {
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
                Privacy Policy
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
                    1. Information We Collect
                  </h2>
                  <p className="mb-4">
                    We collect information you provide directly to us, including when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    2. How We Use Your Information
                  </h2>
                  <p className="mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process and complete transactions</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Communicate with you about products, services, and events</li>
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    3. Information Sharing
                  </h2>
                  <p className="mb-4">
                    We do not share your personal information with third parties except as described in this privacy policy or with your consent. We may share information with service providers who perform services on our behalf.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    4. Data Security
                  </h2>
                  <p className="mb-4">
                    We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    5. Your Rights
                  </h2>
                  <p className="mb-4">
                    You have the right to access, update, or delete your personal information at any time. You can also opt-out of receiving promotional communications from us.
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">
                    6. Contact Us
                  </h2>
                  <p className="mb-4">
                    If you have any questions about this privacy policy, please contact us at:
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
