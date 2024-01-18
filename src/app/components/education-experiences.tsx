import { SingleExperience } from "@/components";
import { H2 } from "@/components/ui";
import { educationsExperiences } from "@/config/education-experiences";

const EducationExperiences = () => {
  return (
    <section>
      <H2 className="mb-2">Education</H2>
      <div className="flex flex-col gap-6">
        {educationsExperiences.map((education, index) => {
          return (
            <SingleExperience
              key={`${education.company.name}-${index}`}
              experience={education}
            />
          );
        })}
      </div>
    </section>
  );
};

export { EducationExperiences };
