import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-2 mt-10 bg-primary">
      <div className="flex justify-center gap-10">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <Image src="/logo.png" alt="Логотип" width={50} height={50} />
            <span className="text-xl font-serif font-bold">
              Кожаная Мастерская
              <br /> Павла Коваленко
            </span>
          </div>
          <div className="text-center text-xs border-t">
            © {new Date().getFullYear()} Все права защищены.
          </div>
        </div>

        <div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +7 (000) 000-00-00
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> master@leathercraft.ru
            </li>
            <li className="flex gap-4 mt-3">
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/telegram.svg"
                  alt="Telegram icon"
                  width={50}
                  height={50}
                  className="w-8 h-8 hover:opacity-50 transition"
                />
              </a>
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/viber.svg"
                  alt="viber icon"
                  width={50}
                  height={50}
                  className="w-8 h-8 hover:opacity-50 transition"
                />
              </a>
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="whatsapp icon"
                  width={50}
                  height={50}
                  className="w-8 h-8 hover:opacity-50 transition"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
