export default function Advantages() {
  return (
    <>
      <section className="section bg-primary">
        <h2 className="subtitle">Преимущества моей мастерской</h2>
        <ul className="space-y-4 max-w-3xl w-full text-lg list-none">
          {[
            "Опыт более 10 лет — от старой «Тойоты» до дизайнерской мебели 80-х годов.",
            "Индивидуальный подход — каждая работа обсуждается лично.",
            "Выезд на дом — в Воронеже, Липецке, Курске и ближайших районах.",
            "Качественные материалы — только проверенные поставщики кожи и кожзама.",
            "Соблюдение сроков — оговорили — сделали.",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-muted/40 p-4 rounded-lg shadow-sm"
            >
              <span className="text-primary mt-1">✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
