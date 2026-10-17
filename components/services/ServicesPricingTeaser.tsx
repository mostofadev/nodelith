import Badge from "../ui/Badge";
import Button from "../ui/Button";


const OFFER_1_PRICE: string | null = null;
const OFFER_2_PRICE: string | null = null;

export default function ServicesPricingTeaser() {
  const showPrices = OFFER_1_PRICE !== null || OFFER_2_PRICE !== null;

  return (
    <section className="border-b border-line bg-panel py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <Badge label="Pricing" />
        <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          {showPrices ? "Simple, clear pricing." : "Priced to fit your business."}
        </h2>
        <p className="mx-auto max-w-[440px] text-[14.5px] leading-relaxed text-muted">
          {showPrices
            ? "No surprises. You see what is included before you start."
            : "The right price depends on your business, so we start with a free audit. You will know exactly what is included and what it costs before you decide."}
        </p>

        {showPrices && (
          <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {OFFER_1_PRICE && (
              <div className="border border-line bg-white p-5">
                <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
                  Offer 1 · Complete Client System
                </div>
                <div className="font-display mt-2 text-[17px] font-semibold text-ink">
                  {OFFER_1_PRICE}
                </div>
              </div>
            )}
            {OFFER_2_PRICE && (
              <div className="border border-line bg-white p-5">
                <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
                  Offer 2 · Missed-Call Recovery
                </div>
                <div className="font-display mt-2 text-[17px] font-semibold text-ink">
                  {OFFER_2_PRICE}
                </div>
              </div>
            )}
          </div>
        )}

        <p className="mx-auto mt-5 max-w-[440px] text-[12.5px] leading-relaxed text-muted">
          Google Ads spend, if you choose ads, is paid by you directly to
          Google and is not part of our fee.
        </p>

        <div className="mt-6">
          <Button href="/contact" variant="primary">
            Book a Free Audit
          </Button>
        </div>
      </div>
    </section>
  );
}