// The OP prescription as AppZad prints it, drawn in HTML. The layout follows the app's PDF template
// (backend/src/reports/op-prescription.html) and the content is the sample the app itself shows in
// Settings > Reports, so nothing here is a real hospital, doctor or patient.

const medicines = [
  {
    name: "Paracetamol",
    strength: "500 mg",
    form: "Tablet • Oral",
    dose: "1 tablet",
    timing: "After food",
    frequency: "Twice daily",
    duration: "5 days",
    notes: "Only if the fever is above 100 F",
  },
  {
    name: "Pantoprazole",
    strength: "40 mg",
    form: "Tablet • Oral",
    dose: "1 tablet",
    timing: "Before food",
    frequency: "Once daily",
    duration: "5 days",
    notes: "-",
  },
  {
    name: "Vitamin D3",
    strength: "60,000 IU",
    form: "Capsule • Oral",
    dose: "1 capsule",
    timing: "After food",
    frequency: "Weekly (Sunday)",
    duration: "8 weeks",
    notes: "With milk",
  },
];

const th = "border border-gray-400 bg-gray-100 px-2 py-1 text-left font-semibold text-gray-700";
const td = "border border-gray-300 px-2 py-1.5 align-top";
const label = "pr-3 whitespace-nowrap text-gray-500";

export default function PrescriptionSheet() {
  return (
    <figure>
      <div
        role="img"
        aria-label="A sample OP prescription: the hospital's letterhead with the doctor's name, the patient and visit details, vitals, a table of three medicines, advice, the next visit date and the doctor's signature line."
        className="rounded-xl bg-white p-5 text-[11px] leading-snug text-gray-800 shadow-xl ring-1 shadow-gray-900/5 ring-gray-900/5 sm:p-7 sm:text-xs"
      >
        {/* Hospital on the left, doctor on the right */}
        <div className="flex items-center justify-between gap-4 border-b-2 border-teal-700 pb-3">
          <div>
            <div className="text-lg leading-tight font-bold text-teal-700 sm:text-xl">Your Hospital Name</div>
            <div className="mt-1 text-gray-600">
              Street address, City, State, Pincode
              <br />
              Phone • Email
              <br />
              09:00 AM - 06:00 PM • Closed: Sunday
            </div>
          </div>
          <div className="shrink-0 border-l border-gray-300 pl-4 text-gray-600">
            <div className="text-sm font-bold text-gray-900">Dr. John Doe</div>
            <div>MBBS, MD (General Medicine)</div>
            <div>General Medicine</div>
            <div>Reg. No: REG-000000</div>
          </div>
        </div>

        {/* Who it is for, and the visit */}
        <div className="flex justify-between gap-6 border-b border-gray-300 py-2.5">
          <table>
            <tbody>
              <tr>
                <td className={label}>Patient</td>
                <td className="font-medium text-gray-900">Demo Patient</td>
              </tr>
              <tr>
                <td className={label}>Patient ID</td>
                <td>PAT000001</td>
              </tr>
              <tr>
                <td className={label}>Age / Gender</td>
                <td>35 yrs / Male</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className={label}>Date</td>
                <td className="font-medium text-gray-900">01-Oct-2026</td>
              </tr>
              <tr>
                <td className={label}>OP No</td>
                <td>OP-0001</td>
              </tr>
              <tr>
                <td className={label}>Visit Mode</td>
                <td>Direct</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-x-4 border-b border-gray-300 py-2">
          <b className="text-gray-900">Vitals</b>
          <span>
            <span className="text-gray-500">Temp</span> 100.4 F
          </span>
          <span>
            <span className="text-gray-500">BP</span> 120/80
          </span>
          <span>
            <span className="text-gray-500">Pulse</span> 78
          </span>
          <span>
            <span className="text-gray-500">SpO2</span> 98%
          </span>
          <span>
            <span className="text-gray-500">Weight</span> 70 kg
          </span>
        </div>

        <div className="space-y-1 pt-2.5">
          <p>
            <b className="text-gray-900">Chief Complaints:</b> Fever and body ache for 2 days
          </p>
          <p>
            <b className="text-gray-900">Investigations:</b> Complete blood count
          </p>
        </div>

        <div className="mt-3 mb-1.5 flex items-center gap-1.5">
          <span className="font-serif text-lg leading-none text-teal-700">&#8478;</span>
          <b className="text-gray-900">Medication</b>
        </div>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className={th}>S.No</th>
              <th className={th}>Medicine</th>
              <th className={th}>Dose</th>
              <th className={th}>Frequency</th>
              <th className={`${th} max-sm:hidden`}>Duration</th>
              <th className={`${th} max-sm:hidden`}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((m, i) => (
              <tr key={m.name}>
                <td className={`${td} text-gray-500`}>{i + 1}</td>
                <td className={td}>
                  <div className="font-semibold text-gray-900">
                    {m.name} <span className="font-normal">{m.strength}</span>
                  </div>
                  <div className="text-gray-500">{m.form}</div>
                </td>
                <td className={td}>
                  {m.dose}
                  <div className="text-gray-500">{m.timing}</div>
                </td>
                <td className={td}>{m.frequency}</td>
                <td className={`${td} max-sm:hidden`}>{m.duration}</td>
                <td className={`${td} max-sm:hidden`}>{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="space-y-1 pt-3">
          <p>
            <b className="text-gray-900">Advice:</b> Drink plenty of fluids and take rest.
          </p>
          <p>
            <b className="text-gray-900">Next Visit:</b> 08-Oct-2026
          </p>
        </div>

        {/* When it was printed, and who signs */}
        <div className="mt-8 flex items-end justify-between gap-6">
          <div className="text-gray-500">Printed on 01-Oct-2026, 10:30 AM</div>
          <div className="w-40 text-center text-gray-600">
            <div className="border-t border-gray-700 pt-1 text-gray-900">Dr. John Doe</div>
            <div>MBBS, MD (General Medicine)</div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-gray-600">
        The sample prescription AppZad shows while you set up your letterhead.
      </figcaption>
    </figure>
  );
}
