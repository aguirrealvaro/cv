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
    <section>
      <H2 className="mb-2">Skills</H2>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return (
            <Badge key={skill} variant="dark">
              {skill}
            </Badge>
          );
        })}
      </div>
    </section>
  );
};

export { Skills };
