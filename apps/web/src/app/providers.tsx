// app/providers.jsx
'use client'

import 'raf/polyfill'
import React from 'react'
import dynamic from 'next/dynamic'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const ReactQueryDevtools = dynamic(
  () =>
    import('@tanstack/react-query-devtools').then(
      ({ ReactQueryDevtools }) => ReactQueryDevtools,
    ),
  {
    ssr: false,
  },
)

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      {<ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
