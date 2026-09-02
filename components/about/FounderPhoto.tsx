import Image from "next/image";

export default function FounderPhoto() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[280px] px-8 text-center">
        <div className="relative aspect-square overflow-hidden rounded-full border border-line bg-panel">
          <Image
            src="/images/founder-photo.jpg"
            alt="Founder of Nodelith"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-4 text-[13.5px] font-medium text-ink">
          Founder, Nodelith
        </p>
      </div>
    </section>
  );
}