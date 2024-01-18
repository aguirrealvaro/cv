import { Introduction, About, WorkExperience } from "./components";
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
        <WorkExperience />
      </Wrapper>
    </div>
  );
}
