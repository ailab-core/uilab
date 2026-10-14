import { highlight } from "fumadocs-core/highlight";
import type { CodeBlockProps } from "fumadocs-ui/components/codeblock";
import * as Base from "fumadocs-ui/components/codeblock";
import * as React from "react";

import { CodeBlock as CodeBlockClient } from "./codeblock-client";

interface Highlighted {
  rendered: React.ReactNode;
  renderedPreview?: React.ReactNode;
}

const highlightCache = new Map<string, Promise<Highlighted>>();

function highlightCode(code: string, lang: string): Promise<Highlighted> {
  const key = `${lang}\0${code}`;
  let cached = highlightCache.get(key);
  if (!cached) {
    cached = renderHighlighted(code, lang);
    highlightCache.set(key, cached);
  }
  return cached;
}

async function renderHighlighted(
  code: string,
  lang: string,
): Promise<Highlighted> {
  try {
    // Trim the code to avoid issues with leading/trailing whitespace
    const trimmedCode = (code?.trim() || "") // Normalize line endings
      .replace("@/registry/base/components", "@/components");

    // Skip highlighting for empty code blocks
    if (!trimmedCode) {
      return {
        rendered: (
          <Base.Pre>
            <code />
          </Base.Pre>
        ),
      };
    }

    const options = {
      components: {
        pre: (props: React.ComponentProps<"pre">) => <Base.Pre {...props} />,
      },
      lang: lang || "text",
    };
    const lines = trimmedCode.split("\n");

    return {
      renderedPreview:
        lines.length > 10
          ? await highlight(lines.slice(0, 5).join("\n"), options)
          : undefined,
      rendered: await highlight(trimmedCode, options),
    };
  } catch (error) {
    console.error("Syntax highlighting error:", error);
    // Fallback to plain code block without syntax highlighting
    return {
      rendered: (
        <Base.Pre>
          <code>{code}</code>
        </Base.Pre>
      ),
    };
  }
}

export function CodeBlock({
  className,
  code,
  collapsible,
  isIsolated = false,
  lang,
  showLineNumbers,
  title,
  ...props
}: {
  code: string;
  lang: string;
  // Means the code block is rendered directly in the MDX file using <CollapsibleCode>
  isIsolated?: boolean;
  showLineNumbers?: boolean;
  title: string | undefined;
  collapsible?: boolean;
} & CodeBlockProps) {
  const { rendered, renderedPreview } = React.use(highlightCode(code, lang));

  return (
    <CodeBlockClient
      className={className}
      collapsible={collapsible}
      isIsolated={isIsolated}
      lang={lang}
      preview={renderedPreview}
      showLineNumbers={showLineNumbers}
      title={title}
      {...props}
    >
      {rendered}
    </CodeBlockClient>
  );
}
