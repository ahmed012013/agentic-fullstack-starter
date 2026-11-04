import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sendMessage } from "@/features/contact/actions/send-message";
import { ContactForm } from "@/features/contact/components/contact-form";

const stack = ["Next.js App Router", "TypeScript", "Tailwind v4", "shadcn/ui", "Zod", "Vitest"];

// Server Component by default — interactivity lives in leaf client components.
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-4">
        <p className="text-muted-foreground text-sm font-medium">Agentic Full-Stack Starter</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Ship features, not boilerplate.
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg text-pretty">
          A production-ready base with agent rules in <code className="font-mono text-sm">CLAUDE.md</code> and{" "}
          <code className="font-mono text-sm">.cursorrules</code>. Replace this page and start building.
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {stack.map((item) => (
            <li key={item} className="bg-secondary text-secondary-foreground rounded-md px-2.5 py-1 text-xs font-medium">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Get started</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Start a new project</DialogTitle>
                <DialogDescription>
                  On GitHub, click “Use this template”, clone your copy, then run{" "}
                  <code className="font-mono">npm install</code> and <code className="font-mono">npm run dev</code>.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Scripts <ChevronDown aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>npm run …</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>dev</DropdownMenuItem>
              <DropdownMenuItem>test</DropdownMenuItem>
              <DropdownMenuItem>lint</DropdownMenuItem>
              <DropdownMenuItem>typecheck</DropdownMenuItem>
              <DropdownMenuItem>build</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" asChild>
            <a href="https://github.com/ahmed012013/agentic-fullstack-starter" target="_blank" rel="noreferrer">
              Repository <ArrowUpRight aria-hidden />
            </a>
          </Button>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Example feature: contact form</CardTitle>
          <CardDescription>
            Zod schema shared by the client form and the server action, with loading, error and success states.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm action={sendMessage} />
        </CardContent>
      </Card>
    </main>
  );
}
