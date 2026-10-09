import "./Resume.css";
import CardGrid from "../components/CardGrid";
import PageHero, { type Stat } from "../components/PageHero";
import { certifications, education, experience, RESUME_PDF } from "../data/resume";

const stats: Stat[] = [
  { value: "5+", label: "Years in IT & cloud" },
  { value: String(certifications.length), label: "Certifications" },
  { value: "4.9/5", label: "CSAT maintained" },
];

export default function Resume() {
  return (
    <main className="page">
      <PageHero
        eyebrow="Colorado Springs, CO"
        title="Resume"
        subtitle="Cloud-focused IT professional across Microsoft Azure, Microsoft 365, hybrid identity, and endpoint support."
        stats={stats}
      >
        <a className="btn btn-cta" href={RESUME_PDF} download="Craig_Martinez_Resume.pdf">
          Download PDF
        </a>
      </PageHero>

      <section className="page-section">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timeline-item" key={`${job.org}-${job.dates}`}>
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="timeline-dates">{job.dates}</span>
              </div>
              <p className="timeline-org">{job.org}</p>
              <ul>
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>Education</h2>
        <CardGrid items={education} />
      </section>

      <section className="page-section">
        <h2>Certifications</h2>
        <CardGrid items={certifications} />
      </section>

      <section className="page-section">
        <h2>Full Resume</h2>
        <iframe className="pdf-frame" src={RESUME_PDF} title="Resume PDF" />
        <p className="pdf-fallback">
          Can't see the PDF? <a href={RESUME_PDF}>Open it directly</a>.
        </p>
      </section>
    </main>
  );
}
