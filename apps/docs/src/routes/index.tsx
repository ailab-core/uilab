import { createFileRoute, Link } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <HomeLayout {...baseOptions()} className="text-center py-32 justify-center">
      <h1 className="font-medium text-3xl mb-4">
        <span className="font-black text-blue-400">{"UILAB"}</span>
        {" Documentation"}
      </h1>
      <p className="mb-8">{"Company internal fully loaded component library for building fast UI"}</p>
      <Link
        to="/docs/$"
        params={{
          _splat: '',
        }}
        className="px-3 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mx-auto"
      >
        Get started
      </Link>
    </HomeLayout>
  )
}
