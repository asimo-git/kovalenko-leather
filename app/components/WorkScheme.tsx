import { BedDouble, MessageCircle, PhoneCall, Wrench } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Оформление заявки",
    description: "Вы оставляете заявку с помощью любой формы на сайте.",
  },
  {
    icon: <PhoneCall className="w-8 h-8 " />,
    title: "Обсуждение деталей",
    description:
      "После получения заявки мы с вами связываемся для уточнения деталей.",
  },
  {
    icon: <Wrench className="w-8 h-8 " />,
    title: "Вызов мастера на дом",
    description:
      "Мастер приезжает для осмотра вашей мебели и согласования работ.",
  },
  {
    icon: <BedDouble className="w-8 h-8 " />,
    title: "Обивка мебели",
    description: "Мы выполняем реставрационные работы согласно договорённости.",
  },
];

export default function WorkSchem() {
  return (
    <>
      <section className="section">
        <h2 className="subtitle">Схема работы</h2>
        <div className="flex flex-col justify-center items-start">
          {steps.map((step, index) => (
            <div key={index} className="relative max-w-lg">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
              <div className="absolute top-1/2 left-0 mt-[-8px] ml-[-6px]  w-4 h-4 bg-accent rounded-full" />

              <div className="flex">
                <div className="m-6 p-6 h-14 rounded-full bg-primary flex items-center justify-center shadow-md">
                  {step.icon}
                </div>
                <div className="py-4">
                  <h3 className="text-xl font-semibold mb-2 ">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
