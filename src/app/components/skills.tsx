import { Badge, H2 } from "@/components/ui";

const skills = [
  "React",
  "Typescript",
  "NextJS",
  "ReactQuery",
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
    <div>
      <H2 className="mb-2">Skills</H2>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </div>
  );
};

export { Skills };
