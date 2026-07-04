import { MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/products"

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Inviee.id, saya ingin bertanya tentang undangan cetak.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-hover"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
