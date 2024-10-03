'use client'

import { useSearchParams } from "next/navigation";

export default function Home() {
  const route = useSearchParams()
  console.log(route)
  return (
    <div>
      Hello World
    </div>
  );
}
