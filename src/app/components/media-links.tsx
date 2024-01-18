import { Github, Linkedin, Mail, Phone } from "lucide-react";

const MediaLinks = () => {
  const size = 16;

  return (
    <div className="flex gap-1">
      <a
        href="mailto:1aguirrealvaro@gmail.com"
        className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
        target="_blank"
      >
        <Mail size={size} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=5491163247350"
        className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
        target="_blank"
      >
        <Phone size={size} />
      </a>
      <a
        href="https://github.com/aguirrealvaro"
        className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
        target="_blank"
      >
        <Github size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/aguirrealvaro/"
        className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
        target="_blank"
      >
        <Linkedin size={size} />
      </a>
    </div>
  );
};

export { MediaLinks };
