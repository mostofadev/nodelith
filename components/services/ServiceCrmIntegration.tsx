import Badge from "../ui/Badge";


const INTEGRATIONS = [
  { label: "Your Booking Tool or Calendar", detail: "We check what you use in the audit, and connect it where we can" },
  { label: "Your Customer List", detail: "New inquiries are saved so your team can follow up" },
  { label: "Text and Email", detail: "Replies and confirmations go out from your business number or email" },
];

export default function ServiceCrmIntegration() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="order-2 flex flex-col gap-3 lg:order-1">
          {INTEGRATIONS.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-4 border border-line bg-panel px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[13px] font-semibold text-accent">
                {index + 1}
              </span>
              <div>
                <p className="text-[14px] font-medium text-ink">{item.label}</p>
                <p className="text-[12.5px] text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <Badge label="Part of Offer 1" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Works With What You Already Use
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            No need to start over. We look at the tools your business uses today
            and set things up around them where we can. If a tool can&apos;t be
            connected, we tell you up front and offer a simple alternative.
          </p>

          <p className="mt-5 max-w-[440px] text-[12.5px] leading-relaxed text-muted">
            We keep customer information limited to what is needed to reply and
            book. Please ask us how we handle your data before you start.
          </p>
        </div>
      </div>
    </section>
  );
}