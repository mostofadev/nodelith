import HeroCopy from "./HeroCopy";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
   
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <main className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-28">
          <HeroCopy />
          <HeroVisual />
        </main>
      </div>
    </section>
  );
}