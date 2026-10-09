import "./Contact.css";
import PageHero from "../components/PageHero";

const topics = [
  "Azure and cloud careers",
  "Home labs and Linux",
  "Breaking into IT",
  "Whatever you're building",
];

const services = [
  "Getting started in Azure",
  "Moving from on-prem or hybrid",
  "Support for existing environments",
  "Scaling as your business grows",
];

export default function Contact() {
  return (
    <main className="page">
      <PageHero
        eyebrow="Craig Martinez"
        title="Contact"
        subtitle="Looking for help with Azure, or just want to connect? Pick whichever fits."
      />

      <div className="contact-grid">
        <section className="contact-card contact-business">
          <p className="page-eyebrow">Business · COSCompute</p>
          <h2>Azure for small businesses</h2>
          <p>
            Starting fresh in Azure, moving off on-prem servers, or already running a
            hybrid setup that needs a hand? COSCompute helps small businesses get set up
            in Azure the right way and scale as they grow.
          </p>
          <ul className="service-list">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <div className="contact-actions">
            <a
              className="btn btn-cta"
              href="mailto:craig@coscompute.com?subject=COSCompute%20inquiry"
            >
              craig@coscompute.com
            </a>
            <a className="btn" href="https://coscompute.com" target="_blank" rel="noreferrer">
              coscompute.com
            </a>
          </div>
        </section>

        <section className="contact-card">
          <p className="page-eyebrow">Personal</p>
          <h2>Say hello</h2>
          <p>
            Questions about my work, tech, or career, or just want to connect? I'm always
            happy to talk shop.
          </p>
          <ul className="service-list">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <div className="contact-actions">
            <a className="btn" href="mailto:craig@cmarti.org">
              craig@cmarti.org
            </a>
            <a
              className="btn"
              href="https://www.linkedin.com/in/craig-martinez-78482a229"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
