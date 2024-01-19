import {
  Introduction,
  About,
  WorkExperiences,
  EducationExperiences,
  MediaLinksPrint,
} from "./components";
import { Skills } from "@/app/components/skills";
import { Wrapper } from "@/components";

export default function Home() {
  return (
    <div className="my-16">
      <Wrapper>
        <div className="flex flex-col gap-8">
          <Introduction />
          <MediaLinksPrint />
          <About />
          <WorkExperiences />
          <EducationExperiences />
          <Skills />
        </div>
      </Wrapper>
    </div>
  );
}
