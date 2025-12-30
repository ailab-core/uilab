import { createFileRoute, Link } from "@tanstack/react-router"
import { HomeLayout } from "fumadocs-ui/layouts/home"
import { Badge } from "uilab-core"
import { CornerDownLeftIcon, StarIcon } from "lucide-react"
import homePageData from "@/src/data/homePage.json"
import { baseOptions } from "@/src/lib/layout.shared"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-col justify-center text-center flex-1">
        <h1 className="font-bold text-5xl mb-4">
          {homePageData.title}
        </h1>
        <p className="text-lg mb-8 w-2xl mx-auto">
          {homePageData.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/docs/$"
            params={{ _splat: "" }}
            className="px-4 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm"
          >
            {homePageData.button}
            <Badge
              className="ml-2 px-1"
              variant="secondary"
            >
              <CornerDownLeftIcon />
            </Badge>
          </Link>
          <a
            href="https://github.com/ailab-core/uilab"
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm"
          >
            {homePageData.starButton}
            <Badge
              className="ml-2 px-1"
              variant="secondary"
            >
              <StarIcon />
            </Badge>
          </a>
        </div>
      </div>
    </HomeLayout>
  )
}
