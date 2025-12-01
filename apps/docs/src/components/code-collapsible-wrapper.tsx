"use client";

import * as React from "react";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Separator,
  cn
} from "uilab-core";

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible
      className={cn("group/collapsible md:-mx-1 relative", className)}
      onOpenChange={setIsOpened}
      open={isOpened}
      {...props}
    >
      <div className="absolute top-1.5 right-10 z-10 flex items-center">
        <CollapsibleTrigger asChild>
          <Button className="text-muted-foreground" variant="ghost">
            {isOpened ? "Collapse" : "Expand"}
          </Button>
        </CollapsibleTrigger>
        <Separator className="mx-1.5 h-5" orientation="vertical" />
      </div>
      <CollapsibleContent
        className="relative mt-6 h-full overflow-hidden data-closed:max-h-64 [&>figure]:mt-0"
        hidden={false}
      >
        {children}
      </CollapsibleContent>
      <CollapsibleTrigger className="-bottom-2 absolute inset-x-0 flex h-20 cursor-pointer items-center justify-center rounded-b-lg bg-linear-to-b from-transparent via-50% via-background to-background font-medium text-muted-foreground text-sm transition-colors hover:text-foreground group-data-open/collapsible:hidden">
        {isOpened ? "Collapse" : "Expand"}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
