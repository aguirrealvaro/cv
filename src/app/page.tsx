import { Globe } from "lucide-react";
import { Wrapper } from "@/components";
import { H1, Text } from "@/components/ui";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    return <H1>{"In progress :)"}</H1>;
  }

  return (
    <div className="my-16">
      <Wrapper>
        <H1 className="mb-1">Alvaro Aguirre</H1>
        <div className="mb-1">
          <Text className="leading-4">Frontend Developer</Text>
          <Text className="leading-4">Degree in Computer Science</Text>
        </div>
        <div className="flex items-center gap-2 text-xs hover:underline">
          <Globe size={14} />
          <a href="https://maps.app.goo.gl/aPbV16G2CvPEVZwm7">
            <Text>Buenos Aires, Argentina</Text>
          </a>
        </div>
      </Wrapper>
    </div>
  );
}
