import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Button } from "uilab-core";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
  component: () => (
    <HomeLayout {...baseOptions()}>
      <HomePage />
    </HomeLayout>
  ),
});

const TECHNOLOGIES = [
  {
    name: "React",
    icon: "/assets/react.svg",
    href: "https://react.dev/",
  },
  {
    name: "Shadcn",
    icon: "/assets/shadcn.svg",
    href: "https://ui.shadcn.com/",
  },
  {
    name: "Tailwind",
    icon: "/assets/tailwind.svg",
    href: "https://tailwindcss.com/",
  },
  {
    name: "BaseUI",
    icon: "/assets/baseui.svg",
    href: "https://base-ui.com/",
  },
];

function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <div className="container mx-auto lg:px-0 px-8 flex flex-col justify-center items-center gap-36">
        <div className="flex flex-col items-center gap-4">
          <a href="https://ailab.mn" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/ailab.svg"
              alt="Ailab"
              className="invert-100 dark:invert-0"
              width={120}
              height={120}
            />
          </a>
          <h1 className="text-4xl font-black">
            {"An easier solution to build new UI"}
          </h1>
          <p className="text-muted-foreground text-lg font-normal">
            {
              "Company internal fully loaded component library for building fast UI"
            }
          </p>
          <div className="flex gap-4">
            <Button
              className="text-sm px-4 h-9 mt-4"
              nativeButton={false}
              render={
                <Link to="/docs/$" params={{ _splat: "" }}>
                  {"🚀 Get started"}
                </Link>
              }
            />
            <Button
              className="text-sm px-4 h-9 mt-4"
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://github.com/ailab-core/uilab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"🌟 Star on GitHub"}
                </a>
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground">
            {"Built with open-source technologies"}
          </p>
          <div className="flex gap-2">
            {TECHNOLOGIES.map((tech) => (
              <Button
                key={tech.name}
                size="icon-lg"
                variant="outline"
                className="p-2 size-9"
                nativeButton={false}
                render={
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="dark:invert-100"
                      width={20}
                      height={20}
                    />
                  </a>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
