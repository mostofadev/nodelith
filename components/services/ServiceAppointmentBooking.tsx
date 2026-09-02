import Badge from "../ui/Badge";

const BOOKING_STEPS = [
  { label: "Customer Inquires", detail: "Via text, chat, or call" },
  { label: "Bot Checks Availability", detail: "Reads your real calendar" },
  { label: "Appointment Confirmed", detail: "Auto-added, reminder scheduled" },
];

export default function ServiceAppointmentBooking() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="order-2 flex flex-col gap-3 lg:order-1">
          {BOOKING_STEPS.map((step, index) => (
            <div
              key={step.label}
              className="flex items-center gap-4 border border-line bg-panel px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[13px] font-semibold text-accent">
                {index + 1}
              </span>
              <div>
                <p className="text-[14px] font-medium text-ink">{step.label}</p>
                <p className="text-[12.5px] text-muted">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <Badge label="Service 02" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Automated Appointment Booking
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            No more back-and-forth over available time slots. The system
            checks your calendar in real time and books the appointment
            directly — 24/7, without anyone on your team touching a phone.
          </p>
        </div>
      </div>
    </section>
  );
}