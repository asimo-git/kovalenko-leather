"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Package, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import { PortfolioItem } from "../data/data";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="w-full max-w-xs shadow hover:shadow-2xl transition p-2 flex flex-col items-center"
          aria-label={`Открыть детали для ${item.title}`}
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
        </button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] h-[90vh] !max-w-none !max-h-none p-4">
        <div className="flex flex-col md:flex-row gap-6 items-center h-full">
          <div className="relative w-full h-full md:w-2/3 bg-muted flex justify-center items-center">
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain"
            />
          </div>

          <div className="md:w-1/3 space-y-4">
            <DialogHeader>
              <DialogTitle>{item.title}</DialogTitle>
              <DialogDescription className="sr-only">
                Индивидуальный заказ, выполненный вручную.
              </DialogDescription>
            </DialogHeader>

            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Package size={18} />
                <span>Материал: {item.material}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} />
                <span>Время: {item.time}</span>
              </li>
              <li className="flex items-center gap-2">
                <DollarSign size={18} />
                <span>Стоимость: {item.price}</span>
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
