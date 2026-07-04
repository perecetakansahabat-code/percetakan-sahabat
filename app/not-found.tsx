import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">

        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <Search className="h-10 w-10 text-emerald-600" />
        </div>

        <h1 className="text-5xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-semibold">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          Silakan kembali ke halaman utama untuk melihat katalog undangan kami.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Home size={18} />
          Kembali ke Beranda
        </Link>

      </div>
    </main>
  );
}