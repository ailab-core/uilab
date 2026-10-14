import * as React from "react";

import { getDemo } from "@/demos";
import { cn } from "@/lib/cn";

import { CodeBlock } from "./codeblock";

// Demo sources are bundled as raw strings and loaded on demand.
const demoSources = import.meta.glob<string>("../../demos/**/*.tsx", {
  query: "?raw",
  import: "default",
});

const sourceCache = new Map<string, Promise<string | undefined>>();

function loadDemoSource(file: string) {
  let cached = sourceCache.get(file);
  if (!cached) {
    cached =
      demoSources[`../../demos/${file}`]?.() ?? Promise.resolve(undefined);
    sourceCache.set(file, cached);
  }
  return cached;
}

export function ComponentSource({
  className,
  // TODO: Disclosure is not ready yet, so we need to use collapsible for now
  collapsible = true,
  language,
  name,
  showCodeTitle = false,
  showLineNumbers = true,
  title,
}: React.ComponentProps<"div"> & {
  name?: string;
  title?: string;
  language?: string;
  showCodeTitle?: boolean;
  showLineNumbers?: boolean;
  collapsible?: boolean;
}) {
  const file = name ? getDemo(name)?.file : undefined;
  if (!file) return null;

  const lang = language ?? title?.split(".").pop() ?? "tsx";

  return (
    <div className={cn("relative", className)}>
      <React.Suspense fallback={null}>
        <ComponentSourceCode
          collapsible={collapsible}
          file={file}
          lang={lang}
          showLineNumbers={showLineNumbers}
          title={showCodeTitle ? title : undefined}
        />
      </React.Suspense>
    </div>
  );
}

function ComponentSourceCode({
  file,
  ...props
}: {
  file: string;
  lang: string;
  collapsible: boolean;
  showLineNumbers: boolean;
  title: string | undefined;
}) {
  const code = React.use(loadDemoSource(file));
  if (!code) return null;

  return <CodeBlock code={code} {...props} />;
}
