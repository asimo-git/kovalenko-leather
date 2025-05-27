import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <section className="section">
        <h2 className="subtitle">Что я делаю</h2>
        <div className="flex  flex-wrap gap-6 justify-center w-full max-w-6xl">
          {[
            {
              src: "/2.png",
              alt: "кожаное кресло",
              title: "Перетяжка мягкой мебели",
              description:
                "Аккуратный демонтаж и профессиональный монтаж новой обивки",
            },
            {
              src: "/3.png",
              alt: "автомобильное кресло",
              title: "Перетяжка салона автомобиля",
              description:
                "Перетяжка сидений, дверных карт, рулей, потолков и подлокотников",
            },
            {
              src: "/1.png",
              alt: "кожаная подушка",
              title: "Индивидуальные кожаные подушки",
              description: "Интерьерный элемент с вышивкой под заказ",
            },
          ].map(({ src, alt, title, description }) => (
            <Card
              key={title}
              className="flex flex-col w-[350px] h-[460px] rounded-xl overflow-hidden"
            >
              <div className="h-[300px] w-full relative">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 300px"
                />
              </div>
              <CardHeader className="flex-1 px-4">
                <CardTitle className="text-center text-lg">{title}</CardTitle>
                <CardDescription className="text-center">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
