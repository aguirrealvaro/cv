import { Section, SingleExperience } from "@/components";
import { H2 } from "@/components/ui";
import { workExperiences } from "@/config/work-experiences";

const WorkExperiences = () => {
  return (
    <Section>
      <H2 className="mb-2">Work Experience</H2>
      <div className="flex flex-col gap-6">
        {workExperiences.map((work, index) => {
          return <SingleExperience key={`${work.company.name}-${index}`} experience={work} />;
        })}
      </div>
    </Section>
  );
};

export { WorkExperiences };
