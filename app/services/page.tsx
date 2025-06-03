import Image from "next/image";
import { SERVICES } from "../data/data";

export default function ServicesPage() {
  return (
    <section className="p-10">
      <h2 className="subtitle">Выберите подходящую услугу</h2>
      <div className="max-w-6xl flex flex-col gap-12">
        {SERVICES.map(({ src, alt, title, text, list }) => (
          <div
            key={title}
            className="flex flex-col md:flex-row bg-background shadow-lg rounded-2xl overflow-hidden"
          >
            {/* Изображение */}
            <div className="relative w-full md:w-1/2 min-h-[300px]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Текстовый блок */}
            <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
              <div>
                <h3 className="text-2xl font-serif mb-4">{title}</h3>
                <p className="mb-4 text-muted-foreground">{text}</p>

                <ul className="list-disc list-inside space-y-2 marker:text-primary">
                  {list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
