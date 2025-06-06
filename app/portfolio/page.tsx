import { PORTFOLIO } from "../data/data";
import Link from "next/link";
import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage() {
  return (
    <section className="px-4 py-10">
      <h2 className="subtitle">Примеры работ</h2>
      <p className="text-center max-w-2xl mx-auto text-muted-foreground mb-10">
        Все работы выполнены вручную с вниманием к каждой детали. Работа с
        кожзамом, тканями, плюшем, искусственным мехом, заказы любой сложности.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {PORTFOLIO.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10">
        Хотите что-то подобное?{" "}
        <Link
          href="/contact"
          className="transition-colors underline text-accent"
        >
          Напишите
        </Link>{" "}
        — обсудим ваш проект!
      </p>
    </section>
  );
}
