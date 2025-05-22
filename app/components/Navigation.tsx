"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/portfolio", label: "Примеры работ" },
  { href: "/contact", label: "Контакты" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex  gap-6">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "hover:text-accent transition-colors p-1",
              pathname === href && "border  rounded"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Бургер-меню*/}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-sm text-muted-foreground hover:bg-accent"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className={cn("bg-primary", "p-2")}>
            <SheetHeader>
              <SheetTitle className="sr-only">Навигация</SheetTitle>
            </SheetHeader>
            <SheetDescription className="sr-only">
              Ссылки для перехода по сайту
            </SheetDescription>
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg hover:text-accent transition-colors",
                    pathname === href && "underline"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
