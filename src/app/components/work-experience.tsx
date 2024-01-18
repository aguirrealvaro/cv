import { Fragment, ReactNode } from "react";
import { Section } from "@/components";
import { Badge, H2, H3, H4, Text } from "@/components/ui";
import { Company, workExperiences } from "@/config/work-experiences";

const WorkExperience = () => {
  return (
    <Section>
      <H2 className="mb-2">Work Experience</H2>
      <div className="flex flex-col gap-6">
        {workExperiences.map((work) => {
          const { company, subCompany, modality, roles, description } = work;

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

          const renderRoles = () => {
            return roles.map((role) => {
              return <span key={role}>{role}</span>;
            });
          };

          return (
            <div key={company.name}>
              <div className="flex items-center gap-2">
                <H3>
                  {renderCompany(company)} {subCompany ? renderCompany(subCompany) : ""}
                </H3>
                <Badge className="capitalize">{modality}</Badge>
              </div>
              <H4 className="mb-1 flex items-center gap-2">{renderRoles()}</H4>
              <Text>{description}</Text>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export { WorkExperience };
