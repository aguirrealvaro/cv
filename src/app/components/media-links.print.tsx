import { H3 } from "@/components/ui";

const MediaLinksPrint = () => {
  return (
    <div className="hidden print:block">
      <H3 className="mb-1">Contacto</H3>
      <div className="flex flex-col text-sm">
        <span className="font-mono">aguirrealvaro.dev</span>
        <span className="font-mono">1aguirrealvaro@gmail.com</span>
        <span className="font-mono">+54 11 6324 7350</span>
        <span className="font-mono">github.com/aguirrealvaro</span>
        <span className="font-mono">linkedin.com/in/aguirrealvaro</span>
      </div>
    </div>
  );
};

export { MediaLinksPrint };
