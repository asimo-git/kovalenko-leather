import Image from "next/image";
import { CONTACTS } from "../data/data";

export default function Contacts() {
  return (
    <section className="section">
      <h2 className="subtitle">Как со мной связаться?</h2>

      <p className="mb-6 max-w-2xl text-center">
        Вы можете позвонить или написать в любой из мессенджеров. Я на связи с
        8:00 до 22:00 MSK и с удовольствием проконсультирую вас по всем
        вопросам.
      </p>

      <div className="bg-muted/40 p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto text-center space-y-4">
        <p className="text-2xl font-semibold">+7 (000) 000-00-00</p>

        <ul className="flex flex-wrap justify-center gap-6">
          {CONTACTS.social.map(({ name, href, color, qr }) => (
            <li
              key={name}
              className="flex flex-col items-center w-[140px] sm:w-[160px]"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-full text-white text-sm font-medium transition ${color}`}
              >
                {name}
              </a>
              <div className="mt-2">
                <Image
                  src={qr}
                  alt={`QR ${name}`}
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
