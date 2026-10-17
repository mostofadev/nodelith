import Badge from "../ui/Badge";


const FOUNDER_NAME: string | null = null;      
const FOUNDER_ROLE: string | null = null;      
const FOUNDER_BIO: string | null = null;      

export default function FounderStory() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[680px] px-8">
        <Badge label="The Story" />
        <h2 className="font-display mt-4 mb-6 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Why Nodelith exists.
        </h2>

        <div className="flex flex-col gap-4 text-[14.5px] leading-relaxed text-muted">
          <p>
            Many local businesses do good work, but the calendar still has
            gaps. A call goes unanswered. A profile looks out of date. A
            customer forgets to leave a review. Each one is small, but together
            they decide who gets the booking.
          </p>
          <p>
            Nodelith exists to fix those gaps for businesses that do not have
            an in-house marketing or tech team. We set up the pieces, keep them
            running, and show you what is working.
          </p>
        </div>

        {(FOUNDER_NAME || FOUNDER_BIO) && (
          <div className="mt-8 border border-line bg-panel p-5">
            {FOUNDER_NAME && (
              <p className="text-[14.5px] font-medium text-ink">
                {FOUNDER_NAME}
                {FOUNDER_ROLE ? `, ${FOUNDER_ROLE}` : ""}
              </p>
            )}
            {FOUNDER_BIO && (
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                {FOUNDER_BIO}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}