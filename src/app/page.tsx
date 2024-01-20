import {
  Introduction,
  About,
  WorkExperiences,
  EducationExperiences,
  MediaLinksPrint,
} from "./components";
import { Skills } from "@/app/components/skills";
import { Wrapper } from "@/components";
import { CommandMenu } from "@/components/ui";

export default function Home() {
  return (
    <div className="my-16 sm:my-8">
      <Wrapper>
        <div className="flex flex-col gap-8">
          <Introduction />
          <MediaLinksPrint />
          <About />
          <WorkExperiences />
          <EducationExperiences />
          <Skills />
          <CommandMenu />
        </div>
      </Wrapper>
    </div>
  );
}
