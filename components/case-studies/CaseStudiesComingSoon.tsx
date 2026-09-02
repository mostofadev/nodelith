import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CaseStudiesComingSoon() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <Badge label="Real Client Results" />
        <h2 className="font-display mt-4 mb-4 text-[22px] font-semibold tracking-tight sm:text-[26px]">
          Case studies are being written as we speak.
        </h2>
        <p className="mx-auto mb-7 max-w-[440px] text-[14.5px] leading-relaxed text-muted">
          We&apos;re early — real client results will appear here as
          businesses go live with the system. Want to be the first featured
          success story?
        </p>
        <Button href="/contact">Book a Free Call</Button>
      </div>
    </section>
  );
}