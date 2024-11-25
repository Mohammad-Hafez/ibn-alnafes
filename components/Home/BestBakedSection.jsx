"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "antd";
import { useClientTranslation } from "@/app/i18n/client";

export default function BestBakedSection({lng}) {
    const { t } =  useClientTranslation(lng);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: "/placeholder.svg" },
    { id: 2, image: "/placeholder.svg" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-customTeal text-white">
      <h2 className="text-3xl font-bold mb-8">{t("bestBaked.title")}</h2>
      <div className="relative">
        <div className="overflow-hidden relative h-[400px] md:h-[500px] rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Best baked ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <Button
type="primary"
className="absolute left-2 top-1/2 -translate-y-1/2"
          onClick={() =>
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
type="primary"
className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}

