import { notFound } from "next/navigation";

import { CustomMDX } from "@/components/mdx/mdx";
import { getLegalPage } from "@/components/mdx/utils";
import PostDate from "@/components/post-date";
import { site } from "@/lib/site";

export default function LegalPage({ slug }: { slug: string }) {
  const page = getLegalPage(slug);

  if (!page) {
    notFound();
  }

  const { metadata, content } = page;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl">
            {/* Page header */}
            <div className="pb-10">
              <h1 className="text-4xl font-bold md:text-5xl">{metadata.title}</h1>
              {metadata.publishedAt && (
                <p className="mt-4 text-sm text-gray-600">
                  Last updated <PostDate dateString={metadata.publishedAt} />
                </p>
              )}
            </div>

            {/* Page content */}
            <div className="prose prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-xl prose-a:font-medium prose-a:text-blue-600 prose-strong:font-medium prose-strong:text-gray-900 max-w-none text-gray-700">
              <CustomMDX source={content.replaceAll("CONTACT_EMAIL", site.contactEmail)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
