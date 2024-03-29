import { Section, SingleExperience } from "@/components";
import { H2 } from "@/components/ui";
import { works } from "@/config/works";

const WorkExperiences = () => {
  return (
    <Section>
      <H2>Work Experience</H2>
      <div className="flex flex-col gap-6">
        {works.map((work, index) => {
          return <SingleExperience key={`${work.company.name}-${index}`} experience={work} />;
        })}
      </div>
    </Section>
  );
};

export { WorkExperiences };
