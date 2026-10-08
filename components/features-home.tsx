// Every line here describes something the HMS does today (checked against the webapp and backend).
// Change the product first, then this list.
type Feature = { name: string; summary: string; details: string[] };

const groups: { title: string; features: Feature[] }[] = [
  {
    title: "Every day",
    features: [
      {
        name: "Appointments",
        summary:
          "Book a patient with a doctor in a free time slot. Every booking gets a token number, and a slot that is taken cannot be booked again.",
        details: [
          "Pick a date and see only the slots that doctor still has free",
          "Book for a registered patient, or take the patient's details at the desk",
          "Search bookings by patient name, phone, doctor or token number",
          "Change or delete a booking when plans change",
        ],
      },
      {
        name: "Patients",
        summary: "Register a patient once, then find them again by name, phone, email or patient ID.",
        details: [
          "Each patient gets an ID on registration, such as PAT482917",
          "Record a date of birth, or only an age when that is all the patient knows",
          "A warning appears when the same name and mobile number are already registered",
          "Guardian, emergency contact, identity and insurance details sit on the same record",
        ],
      },
      {
        name: "OP visits",
        summary:
          "Open an out-patient visit for a registered patient with a doctor, and record vitals and the bill on the same screen.",
        details: [
          "Each visit gets an OP number for the day, such as OP2609211",
          "The visit count shows how many times the patient has come",
          "A visit stays valid for 7 days, or the number of days you set",
          "The doctor's fee fills in the bill, and you record how it was paid",
          "Search visits by OP number, patient or doctor, and filter by date or payment mode",
        ],
      },
      {
        name: "Digital prescriptions",
        summary:
          "The doctor writes the prescription for an OP visit on screen: complaints, history, diagnosis, investigations, medicines, advice and the next visit.",
        details: [
          "Each medicine has a form, strength, dose, route, timing, frequency, duration and instructions",
          "Download the prescription as an A4 PDF with your letterhead",
          "To write by hand, print the same sheet with the prescription area left blank",
          "The doctor's signature prints at the bottom once it is saved on their profile",
        ],
      },
      {
        name: "Dashboard",
        summary: "See today's appointments and the totals for the period you pick.",
        details: [
          "Appointments, OP visits, new patients and collections",
          "Each total is compared with the same number of days before it",
          "Appointments and OP visits charted day by day, for any period up to 90 days",
        ],
      },
    ],
  },
  {
    title: "Set up once",
    features: [
      {
        name: "Doctors",
        summary:
          "Add each doctor with their specializations, qualifications, consultation fee and the time slots they see patients in.",
        details: [
          "Generate a day's slots in 10, 15, 30 or 60 minute steps",
          "Slots outside your clinic hours are pointed out, not blocked",
          "Draw or upload the doctor's signature for prescriptions",
        ],
      },
      {
        name: "Hospital details",
        summary: "Your hospital's name, address, contact numbers, licence number and clinic hours.",
        details: [
          "These details print on the prescription letterhead",
          "Mark the days of the week your clinic is closed",
        ],
      },
      {
        name: "Prescription letterhead",
        summary: "Choose what prints at the top of every prescription, and preview the page before you save.",
        details: [
          "AppZad's layout with your logo, tagline and hospital details",
          "Blank space at the top, for paper that already carries your letterhead",
          "Your own header image",
        ],
      },
      {
        name: "Users and access",
        summary: "Invite staff by email, see who has access, and remove people when they leave.",
        details: [
          "Resend or cancel an invitation that has not been accepted yet",
          "Everyone you invite can work with all of your hospital's records",
          "Removing someone's access does not delete the records they created",
        ],
      },
      {
        name: "Appointment settings",
        summary: "Set how far ahead appointments can be booked and how many days an OP visit stays valid.",
        details: [],
      },
      {
        name: "Support",
        summary: "Send a request to AppZad from inside the app, with a screenshot or PDF attached when it helps.",
        details: [],
      },
    ],
  },
];

/** The feature rows. `detailed` (the Features page) adds each feature's list and moves the headings up a level. */
export default function FeatureList({ detailed = false }: { detailed?: boolean }) {
  const GroupHeading = detailed ? "h2" : "h3";
  const FeatureHeading = detailed ? "h3" : "h4";

  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <GroupHeading className={detailed ? "mb-4 text-2xl font-bold" : "mb-3 text-sm font-medium text-gray-500"}>
            {group.title}
          </GroupHeading>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {group.features.map((feature) => (
              <div key={feature.name} className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-3">
                <FeatureHeading className="font-semibold">{feature.name}</FeatureHeading>
                <div className="text-gray-700 sm:col-span-2">
                  <p>{feature.summary}</p>
                  {detailed && feature.details.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] marker:text-gray-400">
                      {feature.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
