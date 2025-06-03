import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { CONTACTS } from "../data/data";

export default function Footer() {
  return (
    <footer className="section bg-primary py-4 md:flex-row md:gap-10 gap-0">
      <div>
        <div className="flex items-center mb-2">
          <Image src="/logo.png" alt="Логотип" width={50} height={50} />
          <span className="title">Мастерская Павла Коваленко</span>
        </div>
        <div className="hidden md:block text-center text-xs border-t">
          © {new Date().getFullYear()} Все права защищены.
        </div>
      </div>

      <div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-center gap-2">
            <Phone size={16} /> {CONTACTS.phone}
          </li>
          <li className="flex items-center justify-center gap-2">
            <Mail size={16} /> {CONTACTS.email}
          </li>
          <li className="flex gap-4 mt-3 justify-center">
            {CONTACTS.social.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Image
                  src={icon}
                  alt={`${name} icon`}
                  width={32}
                  height={32}
                  className="w-8 h-8 hover:opacity-60 transition"
                />
              </a>
            ))}
          </li>
        </ul>
      </div>
      <div className="block md:hidden text-center text-xs border-t mt-4">
        © {new Date().getFullYear()} Все права защищены.
      </div>
    </footer>
  );
}
