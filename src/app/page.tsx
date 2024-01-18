import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Wrapper } from "@/components";
import { H1, Text } from "@/components/ui";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    return <div>{"In progress :)"}</div>;
  }

  return (
    <div className="my-16">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div>
            <H1 className="mb-1">Alvaro Aguirre</H1>
            <div className="mb-1">
              <Text className="leading-4">Frontend Developer</Text>
              <Text className="leading-4">Degree in Computer Science</Text>
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs hover:underline">
              <Globe size={14} />
              <a href="https://maps.app.goo.gl/aPbV16G2CvPEVZwm7" target="_blank">
                <Text>Buenos Aires, Argentina</Text>
              </a>
            </div>
            <div className="flex gap-1">
              <a
                href="mailto:1aguirrealvaro@gmail.com"
                className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
                target="_blank"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5491163247350"
                className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
                target="_blank"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://github.com/aguirrealvaro"
                className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
                target="_blank"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/aguirrealvaro/"
                className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
                target="_blank"
              >
                <Linkedin size={16} />
              </a>
            </div>
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
        </div>
      </Wrapper>
    </div>
  );
}
