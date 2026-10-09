import type { ReactNode } from "react";

export type Stat = { value: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats?: Stat[];
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, subtitle, stats, children }: Props) {
  return (
    <header className="page-hero">
      <p className="page-eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-subtitle">{subtitle}</p>

      {stats && (
        <ul className="stat-grid">
          {stats.map((stat) => (
            <li className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      )}

      {children}
    </header>
  );
}
