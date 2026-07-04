export type Product = {
  code: string
  name: string
  image: string
  priceBasic: number
  priceLaminated: number
  category: string
  badge?: string
}

export const WHATSAPP_NUMBER = "6281572070101"

export const products: Product[] = [
  {
    code: "SE-000",
    name: "Silver Edition — Golden Pampas",
    image: "/products/se-000.png",
    priceBasic: 1500,
    priceLaminated: 2000,
    category: "Lipat 2",
    badge: "Terlaris",
  },
  {
    code: "SE-001",
    name: "Silver Edition — Sage Minimalist",
    image: "/products/se-001.png",
    priceBasic: 1500,
    priceLaminated: 2000,
    category: "Lipat 3",
  },
  {
    code: "SE-002",
    name: "Silver Edition — Blush Floral",
    image: "/products/se-002.png",
    priceBasic: 1750,
    priceLaminated: 2250,
    category: "Amplop",
    badge: "Baru",
  },
  {
    code: "SE-003",
    name: "Rustic — Kraft Botanical",
    image: "/products/se-003.png",
    priceBasic: 1750,
    priceLaminated: 2250,
    category: "Hardcover",
  },
  
]

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function buildWhatsAppLink(product: Product): string {
  const message = `Halo Ka, saya tertarik memesan undangan cetak *${product.code} - ${product.name}*. Mohon info ketersediaan dan proses pemesanannya. Terima kasih!`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
