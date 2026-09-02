import Badge from "../ui/Badge";
import CaseStudyTemplate from "./CaseStudyTemplate";

type CaseStudy = {
  clientType: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  metric?: { label: string; value: string };
};

type CaseStudiesGridProps = {
  studies: CaseStudy[];
};

export default function CaseStudiesGrid({ studies }: CaseStudiesGridProps) {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <Badge label="Client Results" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Real businesses, real numbers.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyTemplate key={study.clientType} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}