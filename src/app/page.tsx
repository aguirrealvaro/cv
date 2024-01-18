import { Introduction, About, WorkExperiences, EducationExperiences } from "./components";
import { Skills } from "@/app/components/skills";
import { Wrapper } from "@/components";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    return <div>{"In progress :)"}</div>;
  }

  return (
    <div className="my-16">
      <Wrapper>
        <Introduction />
        <About />
        <WorkExperiences />
        <EducationExperiences />
        <Skills />
      </Wrapper>
    </div>
  );
}
