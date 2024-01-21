"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { CommandIcon, Printer, Search, X } from "lucide-react";
import { IconButton } from "@/components/ui";
import { links } from "@/config/links";
import { cn } from "@/lib/cn";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <IconButton
          className={cn(
            "fixed bottom-12 right-12 z-command-button sm:bottom-6 sm:right-6",
            "rounded-full border bg-white shadow-2xl",
            "print:hidden"
          )}
        >
          <CommandIcon />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-command-menu h-screen w-screen bg-black/20",
            "flex items-center justify-center md:items-start",
            "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in",
            "print:hidden"
          )}
        >
          <Dialog.Content
            className={cn(
              "max-h-[80vh] min-h-28 w-full max-w-[32rem] overflow-y-auto",
              "m-4 rounded-lg bg-white p-2 shadow-lg",
              "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
            )}
          >
            <Dialog.Title className="sr-only">Command Menu</Dialog.Title>
            <Command label="Command Menu" className="relative">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <Search size={18} />
                <Command.Input
                  placeholder="Type a command or search"
                  className="w-full p-2 outline-none"
                />
                <IconButton asChild className="absolute right-4">
                  <Dialog.Close>
                    <X size={18} />
                  </Dialog.Close>
                </IconButton>
              </div>
              <Command.Separator className="h-px bg-border-primary" />
              <Command.List>
                <Command.Empty className="py-6 text-center text-sm">
                  No results found.
                </Command.Empty>
                <Command.Group
                  heading="Actions"
                  className="overflow-hidden p-1 text-text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-primary"
                >
                  <Command.Item
                    className="flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary"
                    onSelect={() => {
                      setOpen(false);
                      window.print();
                    }}
                  >
                    <Printer size={18} />
                    Print
                  </Command.Item>
                </Command.Group>
                <Command.Group
                  heading="Links"
                  className="overflow-hidden p-1 text-text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-primary"
                >
                  {links.map(({ url, icon: Icon, label }) => {
                    return (
                      <Command.Item
                        key={url}
                        onSelect={() => {
                          setOpen(false);
                          window.open(url, "_blank");
                        }}
                        className="flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary"
                      >
                        <Icon size={18} />
                        {label}
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              </Command.List>
            </Command>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { CommandMenu };
