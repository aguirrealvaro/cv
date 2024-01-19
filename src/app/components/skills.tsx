import { Section } from "@/components";
import { Badge, H2 } from "@/components/ui";

const skills = [
  "React",
  "Typescript",
  "NextJS",
  "React Query",
  "CSS-in-JS",
  "Tailwind",
  "React Testing Library",
  "Git",
  "NodeJS",
  "Express",
  "Nest",
];

const Skills = () => {
  return (
    <Section>
      <H2>Skills</H2>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return (
            <Badge key={skill} variant="dark">
              {skill}
            </Badge>
          );
        })}
      </div>
    </Section>
  );
};

export { Skills };
