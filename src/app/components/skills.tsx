import { Section } from "@/components";
import { Badge, H2 } from "@/components/ui";
import { skills } from "@/config/skills";

const Skills = () => {
  return (
    <Section>
      <H2>Skills</H2>
      <ul className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return (
            <li key={skill}>
              <Badge variant="dark">{skill}</Badge>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export { Skills };
