"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "団体紹介" },
  { href: "/philosophy", label: "理念" },
  { href: "/#reports", label: "活動報告" },
  { href: "/#highlights", label: "活動内容" },
  { href: "/#contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "site-header sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-white/60 backdrop-blur border-b border-gray-100"
      )}
    >
      <div
        className="site-container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold shrink-0">
          <Image
            src="/wasedaai-logo2.png"
            alt="早稲田AI研究会"
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="text-base md:text-lg tracking-tight whitespace-nowrap">早稲田AI研究会</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl">
          <nav className="site-container py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-2.5 text-sm rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
