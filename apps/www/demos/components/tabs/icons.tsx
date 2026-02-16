"use client"

import { Tabs, TabsList, TabsTrigger } from "uilab-core"
import { AppWindowIcon, CodeIcon } from "lucide-react"

export function TabsIconsExample() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          Preview
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          Code
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
