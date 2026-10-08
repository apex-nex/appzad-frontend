type AccordionProps = {
  children: React.ReactNode;
  title: string;
  active?: boolean;
};

// The browser's own disclosure element: keyboard, find-in-page and screen readers work without script.
export default function Accordion({ children, title, active = false }: AccordionProps) {
  return (
    <details className="group rounded-lg border border-gray-200 bg-white" open={active}>
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
        <h3>{title}</h3>
        <svg
          className="ml-8 shrink-0 fill-gray-500 transition duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none"
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          height={6}
          aria-hidden="true"
        >
          <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" />
        </svg>
      </summary>
      <p className="px-4 pb-4 text-[15px] text-gray-700">{children}</p>
    </details>
  );
}
