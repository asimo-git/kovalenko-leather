import Image from "next/image";

export default function Contacts() {
  return (
    <>
      <section className="section">
        <h2 className="subtitle">Как со мной связаться?</h2>
        <div>
          Вы можете позвонить или написать в любой из мессенджеров. Я на связи с
          8-00 до 22-00 MSK и с удовольствием проконсультирую вас по всем
          вопросам.
        </div>
        <div className="bg-muted/40 p-6 rounded-xl shadow-md w-full max-w-md text-center space-y-4">
          <p className="text-xl font-medium">+7 (000) 000-00-00</p>

          <ul className="flex justify-center gap-10 text-sm sm:text-base">
            <li>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Telegram
              </a>
              <Image
                src="/qr-telegram.png"
                alt="QR Telegram"
                width={120}
                height={120}
                className="mt-2"
              />
            </li>
            <li>
              <a
                href="https://wa.me/70000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
              <Image
                src="/qr-whatsapp.png"
                alt="QR WhatsApp"
                width={120}
                height={120}
                className="mt-2"
              />
            </li>
            <li>
              <a
                href="viber://chat?number=+70000000000"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
              >
                Viber
              </a>
              <Image
                src="/qr-viber.png"
                alt="QR Viber"
                width={120}
                height={120}
                className="mt-2"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
