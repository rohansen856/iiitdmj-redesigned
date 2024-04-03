import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Navbar } from "./navbar"
import { CustomHeader } from "./header"
import { Contact } from "./contact"

export default async function IndexPage() {
  return (
    <>
      <Navbar />
      <CustomHeader />
      <Contact />
    </>
  )
}
