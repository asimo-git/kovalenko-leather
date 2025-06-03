import Image from "next/image";

const materialsSrc = [
  "/material1.jpg",
  "/material2.jpg",
  "/material3.jpg",
  "/material4.jpg",
  "/material5.jpg",
  "/material6.jpg",
  "/material7.jpg",
  "/material8.jpg",
  "/material9.jpg",
];

export default function Materials() {
  return (
    <section className="section px-0">
      <h2 className="subtitle px-4 sm:px-10">
        Широкий ассортимент обивочных материалов
      </h2>
      <div className="flex flex-wrap gap-0">
        {materialsSrc.map((src, index) => (
          <div
            key={index}
            className={`relative w-1/2 sm:w-1/3 lg:w-1/4 aspect-square ${
              index === 8 && "sm:block lg:hidden hidden"
            }`}
          >
            <Image
              src={src}
              alt="пример обивочного материала"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
