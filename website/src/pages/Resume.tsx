export default function Resume() {
  return (
    <div className="resume-container">
      <div 
        className="resume-header" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '1rem', 
          marginBottom: '2rem',
          textAlign: 'center' 
        }}
      >
        <h1>Resume</h1>
        <a 
          href="/Craig_Martinez_Resume.pdf" 
          download="Craig_Martinez_Resume.pdf" 
          className="download-btn"
        >
          Download Resume
        </a>
      </div>

      <div className="pdf-embed-container">
        <iframe
          src="/Craig_Martinez_Resume.pdf"
          title="Resume PDF"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        >
          <p>
            Your browser does not support PDFs. Please download the PDF to view it: 
            <a href="/Craig_Martinez_Resume.pdf">Download PDF</a>.
          </p>
        </iframe>
      </div>
    </div>
  );
}