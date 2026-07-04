"use client"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  Menu,
  X,
  MapPin,
  AtSign,
  MessageCircle,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const infoLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/percetakan_sahabat.mtp/",
    icon: AtSign,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281572070101",
    icon: MessageCircle,
  },
  {
    label: "Syarat & Ketentuan",
    href: "#syarat",
    icon: FileText,
  },
]

const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Katalog",
    href: "#tema",
  },
  {
    label: "Cara Pesan",
    href: "#cara-pesan",
  },
  {
    label: "Testimoni",
    href: "#testimoni",
  },
  {
    label: "Kontak",
    href: "#kontak",
  },
]

function InfoBar() {
  return (
    <div className="hidden md:block border-b bg-gray-50 text-xs text-gray-600">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">

        <div className="flex items-center gap-2">
          <MapPin size={14} />
          Martapura Kota, Kalimantan Selatan
        </div>

        <div className="flex items-center gap-5">
          {infoLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 hover:text-green-600"
              target="_blank"
              rel="noreferrer"
            >
              <item.icon size={14} />
              {item.label}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg">

      <InfoBar />

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="Percetakan Sahabat"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              Percetakan Sahabat
            </h1>

            <p className="text-xs text-slate-400">
              Menyediakan ATK, dan Jasa Percetakan
            </p>
          </div>

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <a
  href="https://wa.me/6281572070101"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-medium shadow-md transition hover:bg-[#20ba5a] hover:shadow-xl"
>
  <FaWhatsapp className="text-xl" />
  <span>Chat WhatsApp</span>
</a>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {open && (

        <div className="border-t border-slate-800 bg-slate-900 lg:hidden">

          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block border-b border-slate-800 px-5 py-4 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

        </div>

      )}

    </header>
  )
}