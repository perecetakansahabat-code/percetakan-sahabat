import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Catalog } from "@/components/catalog"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <Catalog />
      </main>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}