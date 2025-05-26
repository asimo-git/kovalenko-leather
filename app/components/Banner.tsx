export default function Banner() {
  return (
    <>
      <section className="relative h-[60vh] bg-banner bg-[url('/banner.png')] bg-contain bg-right bg-no-repeat">
        <div className="p-8 max-w-2xl">
          <h1 className="text-6xl font-serif mb-10">
            Изделия из кожи и реставрация
          </h1>
          <p className="text-3xl">
            Услуги по перетяжке мебели, реставрации салонов автомобилей,
            изготовлению подушек и аксессуаров из кожи.
          </p>
        </div>
      </section>
    </>
  );
}
