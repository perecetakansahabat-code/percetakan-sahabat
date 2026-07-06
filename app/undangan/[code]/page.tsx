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
  Spesifikasi
</h2>

<ul className="mt-4 space-y-2 text-gray-600">
  {product.specifications.map((item, index) => (
    <li key={index} className="flex gap-2">
      <span className="text-green-600">✓</span>
      <span>{item}</span>
    </li>
  ))}
</ul>

<div className="mt-10 rounded-2xl bg-green-50 border border-green-200 p-6">

  <h2 className="text-2xl font-bold text-green-700">
    Kenapa Memilih Percetakan Sahabat?
  </h2>

  <ul className="mt-5 space-y-3 text-gray-700">

    <li>✅ Gratis konsultasi desain</li>

    <li>✅ Revisi desain hingga ACC</li>

    <li>✅ Pilihan laminasi doff & glossy</li>

    <li>✅ Gratis kirim wilayah Martapura & Banjarbaru</li>

    <li>✅ Hasil cetak berkualitas</li>

  </ul>

</div>

<div className="mt-8 rounded-2xl border p-6">

  <h2 className="text-xl font-bold">
    📍 Percetakan Sahabat
  </h2>

  <p className="mt-4 leading-7 text-gray-600">
    Jl. Tanjung Rema Darat Depan Gg. Sahabat,
    Kecamatan Martapura,
    Kabupaten Banjar,
    Kalimantan Selatan.
  </p>

  <div className="mt-5 space-y-2 text-gray-600">

    <p>🕒 Senin - Sabtu</p>

    <p>08.00 - 18.00 WITA</p>

    <p>📞 081572070101</p>

  </div>

  <a
    href="https://www.google.com/maps/place/Percetakan+Sahabat/@-3.4210537,114.8518286,17z/data=!3m1!4b1!4m6!3m5!1s0x2de6816ececb6849:0xed0fe642dfe58e2a!8m2!3d-3.4210591!4d114.8544035!16s%2Fg%2F11nyc4lbql?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    📍 Lihat di Google Maps
  </a>

</div>

<a
  href={buildWhatsAppLink(product)}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
>
  <MessageCircle size={20} />
  Pesan via WhatsApp
</a>

        </div>

      </div>
    </main>
  )
}