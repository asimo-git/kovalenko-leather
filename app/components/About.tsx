import Image from "next/image";

export default function About() {
  return (
    <section className="section md:flex-row my-12 gap-8">
      <div className="w-full min-w-80 max-w-[300px] md:max-w-[30vw] aspect-square overflow-hidden shadow-md">
        <Image
          src="/foto.jpg"
          alt="фото мастера"
          width={500}
          height={500}
          className="w-full h-full  object-cover"
        />
      </div>

      <div className="max-w-2xl text-base md:text-xl leading-relaxed">
        <p>
          <strong>Здравствуйте!</strong>
          <br />
          <br />
          Меня зовут Павел, и вот уже более 10 лет я помогаю оживить любимую
          мебель, обновить интерьер автомобиля и создать уют с помощью авторских
          подушек. Работаю в нескольких городах, выезжаю на замеры и
          консультации, подбираю материалы под интерьер и бюджет, а каждую
          работу выполняю как для себя — аккуратно, качественно и с душой.
        </p>
      </div>
    </section>
  );
}
