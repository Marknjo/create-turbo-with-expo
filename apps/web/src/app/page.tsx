// export const runtime = "edge";

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

import { Button } from '@mj/ui-web/button'

export default async function HomePage() {
  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-primary">Turbo</span> With{' '}
          <span className="text-primary">Expo</span>
        </h1>
        <div className="flex flex-row justify-between gap-4">
          <Button variant="primary" className="text-white">
            <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
            <span className="ml-2 inline-block ">Button 1</span>
          </Button>

          <Button variant="outline">
            <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
            <span className="ml-2 inline-block">Button 2</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
