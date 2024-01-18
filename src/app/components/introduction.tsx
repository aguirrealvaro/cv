import { Globe } from "lucide-react";
import Image from "next/image";
import { MediaLinks } from ".";
import { Section } from "@/components";
import { H1, Text } from "@/components/ui";

const Introduction = () => {
  return (
    <Section className="flex items-center justify-between">
      <div>
        <H1 className="mb-1">Alvaro Aguirre</H1>
        <div className="mb-1">
          <Text>Frontend Developer</Text>
          <Text>Degree in Computer Science</Text>
        </div>
        <div className="mb-2 flex items-center gap-2 text-xs ">
          <Globe size={14} />
          <a
            href="https://maps.app.goo.gl/aPbV16G2CvPEVZwm7"
            target="_blank"
            className="hover:underline"
          >
            <Text>Buenos Aires, Argentina</Text>
          </a>
        </div>
        <MediaLinks />
      </div>
      <div>
        <Image
          alt="Picture of Alvaro Aguirre"
          src="/avatar-square.png"
          width={378}
          height={378}
          className="aspect-square size-28 rounded-xl object-cover"
        />
      </div>
    </Section>
  );
};

export { Introduction };
