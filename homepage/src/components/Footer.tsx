import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div className="flex items-center gap-2">
          <Image src="/wasedaai-logo.png" alt="Waseda AI" width={22} height={22} className="object-contain" />
          <span className="text-sm font-medium text-gray-700">早稲田AI研究会</span>
        </div>

        <p className="text-xs text-gray-500">© {year} Waseda AI Study Group</p>

        <nav className="flex gap-4">
          <Link href="/#contact" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            お問い合わせ
          </Link>
          <Link href="/philosophy" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
            理念
          </Link>
        </nav>
      </div>
    </footer>
  );
}
