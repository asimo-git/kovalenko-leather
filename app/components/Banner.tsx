export default function Banner() {
  return (
    <>
      <section className="relative  bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat text-banner ">
        <div className="p-10 sm:p-14 max-w-2xl ml-auto mr-4 sm:mr-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 sm:mb-10 leading-tight drop-shadow-lg">
            Профессиональная перетяжка и пошив на заказ
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl drop-shadow-md">
            Услуги по перетяжке мебели, реставрации салонов автомобилей,
            изготовлению подушек и аксессуаров.
          </p>
        </div>
      </section>
    </>
  );
}
