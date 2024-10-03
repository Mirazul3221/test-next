'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const route = useSearchParams()
    console.log(route)
  return (
    <div>page</div>
  )
}

export default Page