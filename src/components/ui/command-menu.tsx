"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import {
  CommandIcon,
  Download,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  Printer,
  Search,
  X,
} from "lucide-react";
import { IconButton } from "@/components/ui";
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
        <IconButton className="fixed bottom-12 right-12 z-10 rounded-full border shadow-2xl">
          <CommandIcon />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-20 h-screen w-screen bg-black/20",
            "flex items-center justify-center",
            "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in"
          )}
        >
          <Dialog.Content
            className={cn(
              "data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in",
              "max-h-[80vh] min-h-28 w-full max-w-[32rem] rounded-lg bg-white shadow-lg",
              "overflow-y-auto p-2"
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
                <Dialog.Close className="absolute right-4 top-4">
                  <X size={18} />
                </Dialog.Close>
              </div>
              <Command.Separator className="h-px bg-border-primary" />

              <Command.List className="py-2">
                <Command.Empty className="py-6 text-center text-sm">
                  No results found.
                </Command.Empty>
                <Command.Group
                  heading="Actions"
                  className="overflow-hidden p-1 text-text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-primary"
                >
                  <Command.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary">
                    <Printer size={18} />
                    Print
                  </Command.Item>
                  <Command.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary">
                    <Download size={18} />
                    Download as PDF
                  </Command.Item>
                </Command.Group>
                <Command.Group
                  heading="Links"
                  className="overflow-hidden p-1 text-text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-primary"
                >
                  <Command.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary">
                    <Home size={18} />
                    Webiste & Blog
                  </Command.Item>
                  <Command.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary">
                    <Mail size={18} />
                    Send me an email
                  </Command.Item>
                  <Command.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary">
                    <Linkedin size={18} />
                    Linkedin
                  </Command.Item>
                  <Command.Item className="flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-hover-primary">
                    <Github size={18} />
                    Github
                  </Command.Item>
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

// <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
