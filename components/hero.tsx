import Image from "next/image"
import { Truck, Sparkles, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const perks = [
  { icon: Sparkles, label: "Desain Premium" },
  { icon: ShieldCheck, label: "Kualitas Terjamin" },
]

export function Hero() {

      return (
    <section className="relative overflow-hidden">
            <Image
        src="/hero-bg.jpg"
        alt="Background Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center">

        <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
          Percetakan Sahabat Martapura
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
          Cetak Undangan
          <br />
          Berkualitas & Elegan
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200">
          Ratusan desain undangan siap cetak dengan harga terjangkau.
          Cocok untuk pernikahan, khitan, ulang tahun,
          dan berbagai kebutuhan lainnya.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a href="#katalog">
            <Button
             className="rounded-full bg-emerald-600 px-8 py-6 text-base hover:bg-emerald-700"
          >
            Lihat Katalog
          </Button>
        </a>

          <a
  href="https://wa.me/6281572070101"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    className="rounded-full px-8 py-6 text-base"
  >
    Chat WhatsApp
  </Button>
</a>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">

          {perks.map((perk) => (
            <div
              key={perk.label}
              className="flex items-center gap-2"
            >
              <perk.icon className="h-5 w-5 text-emerald-600" />
              <span>{perk.label}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}