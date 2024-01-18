import { ReactNode } from "react";
import { Section } from "@/components";
import { Badge, H2, H3 } from "@/components/ui";
import { Company, workExperiences } from "@/config/work-experiences";

const WorkExperience = () => {
  return (
    <Section>
      <H2 className="mb-2">Work Experience</H2>
      <div className="flex flex-col gap-4">
        {workExperiences.map((work) => {
          const { company, subCompany, modality } = work;

          const renderCompany = (company: Company): ReactNode => {
            if (company.url) {
              return (
                <a href={company.url} target="_blank" className="hover:underline">
                  {company.name}
                </a>
              );
            }

            return <>{company.name}</>;
          };

          return (
            <div key={company.name}>
              <div className="flex items-center gap-2">
                <H3>
                  {renderCompany(company)} {subCompany ? renderCompany(subCompany) : ""}
                </H3>
                <Badge className="capitalize">{modality}</Badge>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export { WorkExperience };
