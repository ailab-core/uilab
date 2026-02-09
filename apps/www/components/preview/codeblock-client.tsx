"use client";

import type { CodeBlockProps } from "fumadocs-ui/components/codeblock";
import { CodeBlock as FumadocsCodeBlock, } from "fumadocs-ui/components/codeblock";

import { Button } from "uilab-core";
import * as React from "react";

import { cn } from "@/lib/cn";
import { ArrowDownToLineIcon, ArrowUpToLineIcon } from "lucide-react";

export function CodeBlock({
  children,
  className,
  collapsible,
  isIsolated = false,
  preview,
  showLineNumbers,
  title,
  ...props
}: {
  isIsolated?: boolean;
  lang?: string;
  collapsible?: boolean;
  showLineNumbers?: boolean;
  title: string | undefined;
  children: React.ReactNode | React.ReactElement;
  preview?: React.ReactNode;
} & CodeBlockProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  if (!collapsible) {
    return (
      <FumadocsCodeBlock
        title={title}
        className={cn(
          "code-block-wrapper docs-code-block",
          isIsolated && "is-isolated",
          showLineNumbers && "docs-code-block-line-numbers",
          className,
        )}
        {...props}
      >
        {children}
      </FumadocsCodeBlock>
    );
  }

  return (
    <div className="relative">
      <div
        className={cn(
          "code-block-wrapper",
          isIsolated && "is-isolated",
          isCollapsed && "mask-to-bottom relative max-h-37.5 overflow-hidden",
        )}
      >
        <FumadocsCodeBlock
          title={title}
          className={cn(
            "docs-code-block shadow-none",
            showLineNumbers && "docs-code-block-line-numbers",
            className,
          )}
          {...props}
        >
          {isCollapsed && preview ? preview : children}
        </FumadocsCodeBlock>
      </div>
      <Button
        className="absolute right-1/2 bottom-4 translate-x-1/2 shadow-sm shadow-black/5"
        size="lg"
        variant="secondary"
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ArrowDownToLineIcon /> : <ArrowUpToLineIcon />}
        {isCollapsed ? "Expand code" : "Collapse code"}
      </Button>
    </div>
  );
}
