import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Chatbot } from "@/components/chatbot"
import { MainNav } from "@/components/shared/main-nav"
import { SiteFooter } from "@/components/shared/site-footer"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
