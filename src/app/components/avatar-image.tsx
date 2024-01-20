"use client";

import * as Avatar from "@radix-ui/react-avatar";
import Image from "next/image";
import { cn } from "@/lib/cn";

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
      <Avatar.Fallback
        asChild
        className={cn(
          "aspect-square size-28 rounded-xl object-cover",
          "flex items-center justify-center bg-neutral-200"
        )}
      ></Avatar.Fallback>
    </Avatar.Root>
  );
};

export { AvatarImage };
