"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO } from "../data/data";

export default function ImageSlider({
  initialIndex,
  onClose,
}: {
  initialIndex: number;
  onClose: () => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(initialIndex, true);
  }, [emblaApi, initialIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, emblaApi]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 text-white z-50"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <X size={32} />
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Предыдущий"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Следующий"
      >
        <ChevronRight size={40} />
      </button>

      <div className="overflow-hidden w-full max-w-4xl" ref={emblaRef}>
        <div className="flex">
          {PORTFOLIO.map((img, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] flex justify-center items-center h-[80vh] relative"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
