import { Section, SingleExperience } from "@/components";
import { H2 } from "@/components/ui";
import { educations } from "@/config/educations";

const EducationExperiences = () => {
  return (
    <Section>
      <H2>Education</H2>
      <div className="flex flex-col gap-6">
        {educations.map((education, index) => {
          return (
            <SingleExperience
              key={`${education.company.name}-${index}`}
              experience={education}
            />
          );
        })}
      </div>
    </Section>
  );
};

export { EducationExperiences };
