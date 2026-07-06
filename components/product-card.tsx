import Link from "next/link"
import Image from "next/image"
import { MessageCircle, Layers, Square } from "lucide-react"
import { type Product, formatRupiah, buildWhatsAppLink } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={`Contoh undangan cetak ${product.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="rounded-md bg-secondary px-1.5 py-0.5 text-[10px] sm:text-xs font-semibold text-primary">
            {product.code}
          </span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">{product.category}</span>
        </div>

        <h3 className="line-clamp-2 min-h-[2.8rem] text-sm sm:text-base font-semibold leading-snug text-foreground">{product.name}</h3>

        <dl className="mt-3 space-y-2 rounded-xl bg-secondary/60 p-2.5 sm:p-3">
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Square className="size-3.5" />
              Tanpa Laminasi
            </dt>
            <dd className="text-sm font-semibold text-foreground">{formatRupiah(product.priceBasic)}</dd>
          </div>
          <div className="flex flex-col items-start gap-1 border-t border-border pt-2 sm:flex-row sm:items-center sm:justify-between">
            <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Layers className="size-3.5 text-green-600" />
              Dengan Laminasi
            </dt>
            <dd className="text-sm font-bold text-green-400">{formatRupiah(product.priceLaminated)}</dd>
          </div>
        </dl>

        <div className="mt-4 space-y-2">

  <Link
  href={`/undangan/${product.code}`}
  scroll={true}
  className="inline-flex w-full items-center justify-center rounded-lg border border-emerald-600 py-2 font-semibold text-emerald-600 transition hover:bg-emerald-50"
>
  Lihat Detail
</Link>

  <a
    href={buildWhatsAppLink(product)}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
  >
    <MessageCircle className="size-4" />
    Pesan via WhatsApp
  </a>

</div>
      </div>
    </article>
  )
}
