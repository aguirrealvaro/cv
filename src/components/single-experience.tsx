import type { ReactNode } from "react";
import { Badge, H3, H4, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { Company, Experience } from "@/types";
import { formatDate } from "@/utils/format-date";

type ExperienceProps = {
  experience: Experience;
};

const SingleExperience = ({ experience }: ExperienceProps) => {
  const { company, subCompany, modality, roles, description, startDate, endDate } = experience;

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
    return roles.map((role, index) => {
      const showArrow = index !== 0;

      return (
        <span key={role} className={cn(showArrow ? "before:content-['_→_']" : "")}>
          {role}
        </span>
      );
    });
  };

  const parsedStartDate = formatDate(startDate);
  const parsedEndDate = endDate ? formatDate(endDate) : "";

  return (
    <div key={company.name}>
      <div className="flex items-center justify-between gap-4 xs:flex-col xs:items-start xs:gap-0">
        <div className="flex items-center gap-2">
          <H3>
            {renderCompany(company)} {subCompany && <>({renderCompany(subCompany)})</>}
          </H3>
          <Badge className="capitalize">{modality}</Badge>
        </div>
        <div className="font-mono">
          <time dateTime={parsedStartDate.dateString}>{parsedStartDate.formattedDate}</time>
          {" - "}
          {parsedEndDate ? (
            <time dateTime={parsedEndDate.dateString}>{parsedEndDate.formattedDate}</time>
          ) : (
            "Present"
          )}
        </div>
      </div>
      <H4 className="mb-0.5 flex items-center gap-2">{renderRoles()}</H4>
      {description && <Text>{description}</Text>}
    </div>
  );
};

export { SingleExperience };
