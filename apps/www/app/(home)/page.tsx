import Link from "next/link";
import Image from "next/image";
import { Button } from "uilab-core";

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
]

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <div className="container h-40 border-x border-dashed mx-auto w-6xl" />
      <div className="container border-y border-dashed mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center border-x border-dashed w-6xl">
          <div className="flex flex-col items-center gap-4 m-12">
            <Link
              href="https://ailab.mn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/ailab.svg"
                alt="Ailab"
                className="invert-100 dark:invert-0"
                width={120}
                height={120}
              />
            </Link>
            <h1 className="text-6xl font-black flex flex-col">
              {"An easier solution to build new UI"}
            </h1>
            <p className="text-muted-foreground text-lg font-normal">
              {"Company internal fully loaded component library for building fast UI"}
            </p>
            <Button
              className="text-sm px-6 h-10 mt-4"
              nativeButton={false}
              render={
                <Link href="/docs">
                  {"Get started"}
                </Link>
              }
            />
          </div>
          <hr className="border-t border-dashed w-full" />
          <div className="flex flex-col items-center gap-4 m-12">
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
                    <Link
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        className="dark:invert-100"
                        width={20}
                        height={20}
                      />
                    </Link>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container h-40 border-x border-dashed mx-auto w-6xl" />
    </div>
  );
}
