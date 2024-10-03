'use client'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const Page = () => {
    const route = useSearchParams()
    console.log(route)
  return (
    <Suspense>
        hello World
    </Suspense>
  )
}

export default Page