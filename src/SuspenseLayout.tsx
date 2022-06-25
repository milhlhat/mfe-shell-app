import React, { PropsWithChildren, Suspense } from 'react'

type Props = {}

function SuspenseLayout({children}: PropsWithChildren<Props>) {
  return (
    <Suspense fallback="loading...">{children}</Suspense>
  )
}

export default SuspenseLayout