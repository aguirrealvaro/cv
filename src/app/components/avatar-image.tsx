"use client";

import * as Avatar from "@radix-ui/react-avatar";
import Image from "next/image";

const AvatarImage = () => {
  return (
    <Avatar.Root>
      <Avatar.Image asChild src="/avatar-square.png">
        <Image
          alt="Picture of Alvaro Aguirre"
          src="/avatar-square.png"
          width={378}
          height={378}
          className="aspect-square size-28 rounded-xl object-cover"
          priority
        />
      </Avatar.Image>
      <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-xl bg-neutral-300" />
    </Avatar.Root>
  );
};

export { AvatarImage };
