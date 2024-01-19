import { Section } from "@/components";
import { H2 } from "@/components/ui";

const MediaLinksPrint = () => {
  return (
    <Section className="hidden print:block">
      <H2>Contact</H2>
      <div className="flex justify-between font-mono">
        <div className="flex flex-col">
          <span>1aguirrealvaro@gmail.com</span>
          <span>+54 11 6324 7350</span>
        </div>
        <div className="flex flex-col">
          <span>aguirrealvaro.dev</span>
          <span>github.com/aguirrealvaro</span>
          <span>linkedin.com/in/aguirrealvaro</span>
        </div>
      </div>
    </Section>
  );
};

export { MediaLinksPrint };
