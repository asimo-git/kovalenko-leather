"use client";

import { useState } from "react";
import { Package, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import { PortfolioItem } from "../data/data";
import ImageSlider from "./ImageSlider";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="w-full max-w-xs shadow hover:shadow-2xl transition p-2 flex flex-col items-center"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full h-64 bg-white flex justify-center items-center">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>

        <div className="w-full mt-4 px-2">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Package size={16} />
              <span>Материал: {item.material}</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} />
              <span>Время: {item.time}</span>
            </li>
            <li className="flex items-center gap-2">
              <DollarSign size={16} />
              <span>Стоимость: {item.price}</span>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <ImageSlider onClose={() => setIsOpen(false)} initialIndex={item.id} />
      )}
    </>
  );
}
