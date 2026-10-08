import Link from "next/link";

import Accordion from "@/components/accordion";
import Section from "@/components/section";
import { mailto, site } from "@/lib/site";

const link = "font-medium text-blue-600 underline hover:text-blue-700";

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "What is AppZad?",
    answer:
      "AppZad is hospital management software that runs in a web browser. It covers appointments, patient registration, OP visits and prescriptions, and the setup behind them.",
  },
  {
    question: "What can I manage with AppZad?",
    answer:
      "Doctors and their time slots, appointments, patient records, OP visits with vitals and the bill, digital prescriptions, your prescription letterhead, your hospital's details and the staff who have access.",
  },
  {
    question: "Can I manage multiple doctors?",
    answer:
      "Yes. Add each of your doctors with their own specializations, fee and time slots. Appointments and OP visits are booked against the doctor you choose.",
  },
  {
    question: "Can I manage appointments?",
    answer:
      "Yes. Book into a doctor's free slot, change or delete a booking, and search by patient, phone, doctor or token number. A slot that is taken cannot be booked again.",
  },
  {
    question: "Can I create digital prescriptions?",
    answer:
      "Yes. The doctor fills in the prescription for an OP visit and downloads it as an A4 PDF with your letterhead. To write by hand, print the same sheet with the prescription area left blank.",
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        Write to us from the{" "}
        <Link className={link} href="/contact">
          Contact page
        </Link>
        . We create your hospital's workspace and email you an invitation. Your first sign-in walks you through your
        hospital's details, inviting staff and adding your first doctor.
      </>
    ),
  },
  {
    question: "How do I contact support?",
    answer: (
      <>
        If you already use AppZad, sign in and open Settings, then Support. You can attach a screenshot or a PDF.
        Otherwise email us at{" "}
        <a className={link} href={mailto}>
          {site.contactEmail}
        </a>
        .
      </>
    ),
  },
];

export default function Faqs() {
  return (
    <Section title="Questions we often get">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <Accordion key={faq.question} title={faq.question} active={index === 0}>
            {faq.answer}
          </Accordion>
        ))}
      </div>
    </Section>
  );
}
