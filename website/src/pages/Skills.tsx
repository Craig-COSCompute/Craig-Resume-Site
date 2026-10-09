import "./Skills.css";
import CardGrid from "../components/CardGrid";
import PageHero, { type Stat } from "../components/PageHero";
import { certifications } from "../data/resume";
import { beyond, LEVEL_LABELS, professional, technical, type Level } from "../data/skills";

const stats: Stat[] = [
  { value: "4+", label: "Years supporting Azure" },
  { value: String(certifications.length), label: "Certifications" },
  { value: "4.9/5", label: "CSAT maintained" },
  { value: "6 mo", label: "Cloud engineering" },
];

const sections = [
  { id: "certifications", label: "Certifications" },
  { id: "technical", label: "Technical" },
  { id: "professional", label: "Professional" },
  { id: "beyond", label: "Beyond the Terminal" },
];

const levels = Object.keys(LEVEL_LABELS) as Level[];

export default function Skills() {
  return (
    <main className="page">
      <PageHero
        eyebrow="Craig Martinez"
        title="Skills & Expertise"
        subtitle="Azure specialist with a security foundation, from supporting Microsoft customers to building cloud environments and running a Linux home lab."
        stats={stats}
      >
        <nav className="jump-links" aria-label="Skills sections">
          {sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>
              {section.label}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="page-section" id="certifications">
        <h2>Certifications</h2>
        <CardGrid items={certifications} />
      </section>

      <section className="page-section" id="technical">
        <h2>Technical</h2>
        <ul className="chip-list level-legend">
          {levels.map((level) => (
            <li className={`chip chip-${level}`} key={level}>
              {LEVEL_LABELS[level]}
            </li>
          ))}
        </ul>

        {technical.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.blurb && <p className="skill-blurb">{group.blurb}</p>}
            <ul className="chip-list">
              {group.skills.map((skill) => (
                <li className={`chip chip-${skill.level}`} key={skill.name}>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="page-section" id="professional">
        <h2>Professional</h2>
        <CardGrid items={professional} />
      </section>

      <section className="page-section" id="beyond">
        <h2>Beyond the Terminal</h2>
        <CardGrid items={beyond} />
      </section>
    </main>
  );
}
