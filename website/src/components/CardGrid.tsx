import type { CardItem } from "../data/resume";

export default function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <div className="card" key={item.title}>
          <h4>{item.title}</h4>
          {item.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
