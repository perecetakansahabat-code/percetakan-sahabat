"use client"

import { useMemo, useState } from "react"
import { products, type Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { cn } from "@/lib/utils"

export function Catalog() {
  const categories = useMemo(() => {
    return ["Semua", ...Array.from(new Set(products.map((p) => p.category)))]
  }, [])
  const [active, setActive] = useState("Semua")
  const [search, setSearch] = useState("")

  const filtered = products.filter((product) => {
  const matchCategory =
    active === "Semua" || product.category === active

  const keyword = search.toLowerCase()

  const matchSearch =
    product.code.toLowerCase().includes(keyword) ||
    product.name.toLowerCase().includes(keyword)

  return matchCategory && matchSearch
})

  return (
    <section id="katalog" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary sm:text-4xl">Katalog Undangan</h2>
          <p className="mt-3 text-muted-foreground">
            Pilih jenis dan desain undangan favorit Anda. Semua harga tersedia dalam pilihan tanpa laminasi dan dengan laminasi.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Cari kode atau nama undangan..."
    className="w-full max-w-md rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-green-600"
  />
  </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                active === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
