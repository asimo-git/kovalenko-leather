import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SERVICES } from "../data/data";

export default function Services() {
  return (
    <>
      <section className="section bg-primary">
        <h2 className="subtitle">Что я делаю</h2>
        <div className="flex  flex-wrap gap-6 justify-center w-full max-w-6xl">
          {SERVICES.map(({ src, alt, title, description }) => (
            <Card
              key={title}
              className="flex flex-col w-[350px] h-[460px] bg-background border-none rounded-none overflow-hidden"
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
                <CardTitle className="text-center text-lg md:text-2xl">
                  {title}
                </CardTitle>
                <CardDescription className="text-center text-base md:text-xl">
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
