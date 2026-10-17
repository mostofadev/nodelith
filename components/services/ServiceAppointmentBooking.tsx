import Badge from "../ui/Badge";

const BOOKING_STEPS = [
  { label: "Customer Reaches Out", detail: "By text, chat, or a missed call" },
  { label: "Simple Booking Path", detail: "They see open times and pick one" },
  { label: "Appointment Confirmed", detail: "They get a confirmation, and you see it on your schedule" },
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
          <Badge label="Part of Offer 1" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Easy Online Booking
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            Less phone tag. Customers can pick a time that works for them, and
            the appointment lands on your schedule. We set it up to work with
            the booking tool or calendar your business already uses.
          </p>
        </div>
      </div>
    </section>
  );
}