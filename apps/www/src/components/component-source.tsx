import * as React from "react"
import { highlightCode } from "@/src/lib/highlight-code"
import { getRegistryItem } from "@/lib/registry.client"
import { getIconForLanguageExtension } from "@/src/components/icons"
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock"
import { Index } from "@/registry/__index__"

export function ComponentSource({
  name,
  src,
  title,
  language,
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
}) {
  const [highlightedCode, setHighlightedCode] = React.useState<string | null>(null)
  const lang = language ?? title?.split(".").pop() ?? "tsx"
  const item = Index[name]

  const componentPath = item.files?.[0]?.path
    ? `@/registry/classic/${item.files[0].path}`
    : ""

  console.log(item)
  console.log(componentPath)

  const arst = React.lazy(async () => {
    const mod = await import(componentPath)
    console.log(mod)
  })

  if (!name && !src) {
    return null
  }

  React.useEffect(() => {
    if (name) {
      getRegistryItem(name).then((itm) => {
        const code = itm?.files?.[0]?.content || ''

        highlightCode(code, lang).then((hc) => {
          setHighlightedCode(hc)
        })
      })
    }
  }, [])

  if (!highlightedCode) {
    return null
  }

  return (
    <ComponentCode
      highlightedCode={highlightedCode}
      language={lang}
      title={title}
    />
  )
}

function ComponentCode({
  highlightedCode,
  language,
  title,
}: {
  highlightedCode: string
  language: string
  title: string | undefined
}) {
  return (
    <CodeBlock
      data-slot="code"
      icon={getIconForLanguageExtension(language)}
      title={title}
      allowCopy
    >
      <Pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </CodeBlock>
  )
}
