import * as React from 'react';
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock"
import { getRegistryItem } from '@/lib/registry.client';
import { getIconForLanguageExtension } from './icons';
import { ComponentSource } from './component-source';
import { highlightCode } from '../lib/highlight-code';

export function ComponentInstallation({
  name
}: React.ComponentProps<"div"> & {
  name: string
}) {
  const [cliCode, setCliCode] = React.useState<string | null>(null);
  const [manualCode, setManualCode] = React.useState<string | null>(null);
  const [doesDependencyExist, setDoesDependencyExist] = React.useState<boolean | null>(null);

  if (!name) {
    return null
  }

  React.useEffect(() => {
    if (name) {
      getRegistryItem(name).then((itm) => {
        highlightCode(`npx shadcn@latest add @uilab/${itm?.name}`, "bash")
          .then((hc) => setCliCode(hc))

        if (itm?.dependencies && itm.dependencies.length > 0) {
          setDoesDependencyExist(true)
        }

        highlightCode(`npm install ${(itm?.dependencies || []).join(" ")}`, "bash")
          .then((hc) => setManualCode(hc))
      })
    }
  }, [])

  if (!highlightCode || !manualCode) {
    return null
  }

  return (
    <Tabs items={["CLI", "Manual"]} persist>
      <Tab value="CLI">
        <CodeBlock
          data-slot="code"
          icon={getIconForLanguageExtension("bash")}
          allowCopy
        >
          <Pre dangerouslySetInnerHTML={{ __html: cliCode || "" }} />
        </CodeBlock>
      </Tab>
      <Tab value="Manual">
        {doesDependencyExist && (
          <>
            <p>{"Install the following dependencies:"}</p>
            <CodeBlock
              data-slot="code"
              icon={getIconForLanguageExtension("bash")}
              allowCopy
            >
              <Pre dangerouslySetInnerHTML={{ __html: manualCode }} />
            </CodeBlock>
          </>
        )}
        <p>{"Copy and paste the following code into your project."}</p>
        <ComponentSource name={name} />
      </Tab>
    </Tabs>
  )
}
