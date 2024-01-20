import type { LucideIcon } from "lucide-react";
import { Github, Home, Linkedin, Mail, Phone } from "lucide-react";

type Link = {
  url: string;
  cleanUrl: string;
  icon: LucideIcon;
  label: string;
};

export const links: Link[] = [
  {
    url: "https://aguirrealvaro.dev",
    cleanUrl: "aguirrealvaro.dev",
    icon: Home,
    label: "Home",
  },
  {
    url: "mailto:1aguirrealvaro@gmail.com",
    cleanUrl: "1aguirrealvaro@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    url: "https://api.whatsapp.com/send?phone=5491163247350",
    cleanUrl: "+54 11 6324 7350",
    icon: Phone,
    label: "Phone",
  },
  {
    url: "https://github.com/aguirrealvaro",
    cleanUrl: "github.com/aguirrealvaro",
    icon: Github,
    label: "Github",
  },
  {
    url: "https://linkedin.com/in/aguirrealvaro",
    cleanUrl: "linkedin.com/in/aguirrealvaro",
    icon: Linkedin,
    label: "Linkedin",
  },
];
