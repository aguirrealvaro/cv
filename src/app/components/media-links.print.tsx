import { Section } from "@/components";
import { H2 } from "@/components/ui";
import { links } from "@/config/links";

const MediaLinksPrint = () => {
  return (
    <Section className="hidden print:block">
      <H2>Contact</H2>
      <div className="grid grid-cols-2">
        {links.map(({ url, cleanUrl }) => {
          return (
            <span key={url} className="font-mono">
              {cleanUrl}
            </span>
          );
        })}
      </div>
    </Section>
  );
};

export { MediaLinksPrint };
