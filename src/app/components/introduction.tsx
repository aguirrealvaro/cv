import { Globe } from "lucide-react";
import { AvatarImage, MediaLinks } from ".";
import { H1, Text } from "@/components/ui";

const Introduction = () => {
  return (
    <section className="flex items-center justify-between">
      <div>
        <H1 className="mb-1">Alvaro Aguirre</H1>
        <div className="mb-1">
          <Text>Frontend Developer</Text>
          <Text>Degree in Computer Science</Text>
        </div>
        <div className="mb-2 flex items-center gap-2 text-xs ">
          <a
            href="https://maps.app.goo.gl/aPbV16G2CvPEVZwm7"
            target="_blank"
            className="flex items-center gap-2 hover:underline"
          >
            <Globe size={14} />
            <Text>Buenos Aires, Argentina</Text>
          </a>
        </div>
        <MediaLinks />
      </div>
      <AvatarImage />
    </section>
  );
};

export { Introduction };
