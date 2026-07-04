import {
  MessageCircle,
  AtSign,
  MapPin,
  Clock,
} from "lucide-react"

import { WHATSAPP_NUMBER } from "@/lib/products"

export function SiteFooter() {
  return (
    <footer
      id="kontak"
      className="border-t bg-slate-900 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Tentang */}
          <div>
            <h2 className="text-2xl font-bold">
              Percetakan Sahabat
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Melayani cetak undangan berkualitas dengan harga
              terjangkau. Tersedia berbagai pilihan model undangan
              seperti Lipat 2, Lipat 3, Amplop, dan Hardcover.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-lg font-semibold">
              Menu
            </h3>

            <ul className="mt-4 space-y-3 text-slate-300">

              <li>
                <a href="#">
                  Home
                </a>
              </li>

              <li>
                <a href="#catalog">
                  Katalog
                </a>
              </li>

              <li>
                <a href="#cara-pesan">
                  Cara Pesan
                </a>
              </li>

              <li>
                <a href="#kontak">
                  Kontak
                </a>
              </li>

            </ul>
          </div>

          {/* Kontak */}
          <div>

            <h3 className="text-lg font-semibold">
              Hubungi Kami
            </h3>

            <div className="mt-4 space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>
                  Jl. Tanjung Rema Darat,
                <br />
                  Depan Gg. Sahabat,
                <br />
                  Martapura, Kalimantan Selatan
                </span>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="flex items-center gap-3 hover:text-emerald-400"
                target="_blank"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <div className="flex items-center gap-3">
                <AtSign size={18} />
                @percetakan_sahabat.mtp
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} />
                Senin - Sabtu
                <br />
                08.00 - 17.00
              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Percetakan Sahabat. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}