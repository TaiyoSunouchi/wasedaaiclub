"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/activity-2.jpg", alt: "2024年 集合写真" },
  { src: "/activity-3.jpg", alt: "活動写真" },
  { src: "/activity-1.jpg", alt: "勉強会の様子" },
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg max-w-3xl mx-auto" style={{ aspectRatio: "16/9" }}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
        </div>
      ))}

    </div>
  );
}
