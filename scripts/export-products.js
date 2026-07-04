const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path");

// Membaca isi products.ts sebagai teks
const filePath = path.join(__dirname, "..", "lib", "products.ts");
const content = fs.readFileSync(filePath, "utf8");

// Ambil isi array products
const match = content.match(/export const products: Product\[\] = (\[[\s\S]*?\n\])/);

if (!match) {
  console.error("❌ Tidak menemukan data products.");
  process.exit(1);
}

// Ubah menjadi object JavaScript
const products = eval(match[1]);

// Ubah image menjadi hanya nama file
const rows = products.map((p) => ({
  code: p.code,
  name: p.name,
  image: p.image.replace("/products/", ""),
  priceBasic: p.priceBasic,
  priceLaminated: p.priceLaminated,
  category: p.category,
  badge: p.badge || "",
}));

// Buat workbook Excel
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(rows);

XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

XLSX.writeFile(workbook, "products.xlsx");

console.log("✅ products.xlsx berhasil dibuat.");