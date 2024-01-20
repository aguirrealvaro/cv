import { links } from "@/config/links";

const MediaLinks = () => {
  return (
    <div className="flex gap-1 print:hidden">
      {links.map(({ url, icon: Icon }) => {
        return (
          <a
            key={url}
            href={url}
            className="rounded-md border p-2 transition-colors hover:bg-hover-primary"
            target="_blank"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
};

export { MediaLinks };
