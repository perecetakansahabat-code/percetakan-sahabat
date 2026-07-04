import Image from "next/image"
import { notFound } from "next/navigation"
import { MessageCircle } from "lucide-react"

import {
  products,
  formatRupiah,
  buildWhatsAppLink,
} from "@/lib/products"

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params

  const product = products.find((p) => p.code === code)

  if (!product) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">

        {/* Foto */}
        <div>
          <div className="overflow-hidden rounded-2xl border">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={800}
              className="w-full"
            />
          </div>
        </div>

        {/* Informasi */}
        <div>

          <span className="rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            {product.code}
          </span>

          <h1 className="mt-4 text-3xl font-bold">
            {product.name}
          </h1>

          <p className="mt-2 text-gray-500">
            Jenis : {product.category}
          </p>

          <div className="mt-8 rounded-xl border p-5">

            <div className="flex justify-between">
              <span>Tanpa Laminasi</span>
              <strong>
                {formatRupiah(product.priceBasic)}
              </strong>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between">
              <span>Dengan Laminasi</span>
              <strong className="text-green-600">
                {formatRupiah(product.priceLaminated)}
              </strong>
            </div>

          </div>

          <h2 className="mt-8 text-xl font-semibold">
            Deskripsi
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Undangan berkualitas dengan desain elegan.
            Tersedia pilihan laminasi maupun tanpa laminasi.
            Cocok untuk berbagai acara.
          </p>

          <a
            href={buildWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
          >
            <MessageCircle size={20} />
            Pesan via WhatsApp
          </a>

        </div>

      </div>
    </main>
  )
}