// A page section laid out the way the product's own forms are: what it is on the left, the content on the right.
export default function Section({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-x-12 gap-y-8 border-t border-gray-200 py-12 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-balance md:text-3xl">{title}</h2>
            {lead && <p className="mt-3 text-gray-700">{lead}</p>}
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
