import { registryItemFileSchema, registryItemSchema } from "shadcn/schema"
import { z } from "zod/v3"

import { Index } from "@/registry/__index__"

export function getRegistryComponent(name: string) {
  return Index[name]?.component
}

export async function getRegistryItem(name: string) {
  const item = Index[name]

  if (!item) {
    return null
  }

  // Convert all file paths to object.
  item.files = item.files.map((file: unknown) =>
    typeof file === "string" ? { path: file } : file
  )

  // Fail early before doing expensive file operations.
  const result = registryItemSchema.safeParse(item)
  if (!result.success) {
    return null
  }

  // Build path mappings from all files for import rewriting
  const pathMappings = buildPathMappings(item.files)

  let files: typeof result.data.files = []
  for (const file of item.files) {
    const content = await getFileContent(file, pathMappings)
    // For CSR, we use relative paths from the registry root
    const relativePath = file.path.replace(/^registry\//, '')

    files.push({
      ...file,
      path: relativePath,
      content,
    })
  }

  // Fix file paths.
  files = fixFilePaths(files)

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
  })

  if (!parsed.success) {
    console.error(parsed.error.message)
    return null
  }

  return parsed.data
}

function buildPathMappings(
  files: Array<{ path?: string; target?: string }>
): Map<string, string> {
  const mappings = new Map<string, string>()

  files.forEach((file) => {
    if (file.path && file.target) {
      // Extract the source path relative to registry/classic/
      const match = file.path.match(/registry\/classic\/(.+)$/)
      if (match) {
        mappings.set(match[1], file.target)
      }
    }
  })

  return mappings
}

async function getFileContent(
  file: z.infer<typeof registryItemFileSchema>,
  pathMappings: Map<string, string>
) {
  // CSR: Use dynamic import with ?raw to get file content
  let raw: string
  
  try {
    // Try to load as raw text using Vite's ?raw import
    const modulePath = `/${file.path}?raw`
    const module = await import(/* @vite-ignore */ modulePath)
    raw = module.default
  } catch (error) {
    console.error(`Failed to load file: ${file.path}`, error)
    throw new Error(`Could not load file: ${file.path}`)
  }

  // CSR: We skip the ts-morph processing since it's a Node.js library
  // Instead, we do simple string manipulation
  let code = raw

  // Some registry items uses default export.
  // We want to use named export instead.
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export")
  }

  // Fix imports using path mappings.
  code = fixImport(code, pathMappings)

  return code
}

function getFileTarget(file: z.infer<typeof registryItemFileSchema>) {
  let target = file.target

  if (!target || target === "") {
    const fileName = file.path.split("/").pop()
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`
    }
  }

  return target ?? ""
}

function fixFilePaths(files: z.infer<typeof registryItemSchema>["files"]) {
  if (!files || files.length === 0) {
    return []
  }

  // CSR: Use simple path manipulation instead of Node.js path module
  const firstFilePath = files[0].path
  const firstFilePathDir = firstFilePath.substring(0, firstFilePath.lastIndexOf('/'))

  return files.map((file) => {
    let relativePath = file.path
    if (firstFilePathDir && file.path.startsWith(firstFilePathDir)) {
      relativePath = file.path.substring(firstFilePathDir.length + 1)
    }
    
    return {
      ...file,
      path: relativePath,
      target: getFileTarget(file),
    }
  })
}

export function fixImport(content: string, pathMappings: Map<string, string>) {
  // Convert registry imports to their target paths using the provided mappings
  // This ensures imports match the actual target locations

  // Sort mappings by path length (longest first) to handle more specific paths first
  const sortedMappings = Array.from(pathMappings.entries()).sort(
    ([a], [b]) => b.length - a.length
  )

  // Handle block-specific imports using the exact path mappings
  sortedMappings.forEach(([sourcePath, targetPath]) => {
    if (sourcePath.startsWith("blocks/")) {
      // Remove the file extension from sourcePath to match import statements
      const sourcePathNoExt = sourcePath.replace(/\.(tsx?|jsx?)$/, "")

      // Remove the file extension from targetPath
      const targetPathNoExt = targetPath.replace(/\.(tsx?|jsx?)$/, "")

      // Create regex to match this specific import path
      const escapedPath = sourcePathNoExt.replace(/\//g, "\\/")
      const importRegex = new RegExp(
        `@\\/registry\\/classic\\/${escapedPath}`,
        "g"
      )

      content = content.replace(importRegex, `@/${targetPathNoExt}`)
    }
  })

  // Fix UI component imports
  content = content.replaceAll(
    "@/registry/classic/ui/",
    "@/components/ui/"
  )

  // Fix example imports
  content = content.replaceAll(
    "@/registry/classic/examples/",
    "@/components/examples/"
  )

  // Fix block imports
  content = content.replaceAll(
    "@/registry/classic/blocks/",
    "@/components/"
  )

  // Fix hook imports
  content = content.replaceAll("@/registry/classic/hooks/", "@/hooks/")

  // Fix lib imports
  content = content.replaceAll("@/registry/classic/lib/", "@/lib/")

  return content
}

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = []

  for (const file of files) {
    const path = file.target ?? file.path
    const parts = path.split("/")
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find((node) => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path
        } else {
          // Move to next level in the tree
          currentLevel = existingNode.children!
        }
      } else {
        const newNode: FileTree = isFile
          ? { name: part, path }
          : { name: part, children: [] }

        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  return root
}
