import PageHero from "../components/PageHero";

export default function Contact() {
  return (
    <main className="page">
      <PageHero
        eyebrow="Craig Martinez"
        title="Contact"
        subtitle="Questions about Azure, COSCompute, or just want to say hello? Reach out."
      >
        <div className="hero-actions">
          <a className="btn btn-cta" href="mailto:craig@cmarti.org">
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
      </PageHero>
    </main>
  );
}
