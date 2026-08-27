import headshot from "../assets/headshot.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero-content">
        <div className="hero-image">
          <img src={headshot}></img>
        </div>

        <h1>Clouds, Code, and Curious Ideas - Craig</h1>

        <h2>
          IT Professional • Software Developer • Azure Enthusiast • Founder of COSCompute
        </h2>

        <p>
          Hi, I'm Craig Martinez.
        </p>

        <h3>☀️ By Day</h3>

        <p>
          I happily support students, faculty, and staff at Pikes Peak State College @ the Service Desk. We support a wide range of issues and technologies at the college while being in a hybrid enviornment. If you got to school
          here, please feel free to drop by and say hello :) 
        </p>

        <h3>🌙 By Night</h3>

        <p>
          You'll usually find me working on projects such as -- figuring out what to do with my 3 Lenovo Tinys 
          (home firewall and host this site from home? k8s clusters just because. currently just using them to play with any new flavor of linux I hear about),
          side-projects in Azure, developing sites for fun, thinking about what to do next. 
          Working on starting up cloud consulting on the side through COSCompute (super happy with the name - Colorado Springs is my HOME) -- strong Azure skills, 
          plan to dive into AWS and GCP to be a true cloud architect (and not give one massive corp all my love -- better for the customer IMO)!
        </p>

        <p>
          I absolutely love working with tech and all the wonderfulness it brings to everybody. I am a true believer in making life efficient for everybody involved. 
          My biggest goal in life is to do whatever I can to make life easier for a huge majority of people, especially the people who need it. Needless to say, I 1000% support Open Source Software and
          anything I develop, I plan to release as that. 
        </p>

        <div className="hero-buttons">
          <Link to="/projects">
            <button>View Projects</button>
          </Link>

          <a href="/Craig-Martinez-Resume.pdf" download>
            <button>Download Resume</button>
          </a>

          <Link to="/contact">
            <button>Contact Me</button>
          </Link>
      </div>
      </section>

      <section className="focus-section">
        <h2 className="focus-title">What I'm Focused On</h2>

        <div className="focus-card">
          <h3>🎓 Community Impact</h3>
          <p>
            Supporting higher education through technology and serving the local
            community through my work at Pikes Peak State College. I'm always looking
            for opportunities to volunteer, mentor, and help make a positive impact.
          </p>
        </div>

        <div className="focus-card">
          <h3>☁️ Azure & Cloud</h3>
          <p>
            Passionate about cloud technologies, automation, infrastructure, and
            modern Microsoft solutions. While Azure is my primary focus, I'm eager
            to expand my knowledge of other major cloud platforms and technologies.
          </p>
        </div>

        <div className="focus-card">
          <h3>💻 Software Development</h3>
          <p>
            Most of my development experience has been in cloud environments. As a
            Subject Matter Expert for Azure App Service and Azure Functions, I worked
            with a variety of technology stacks and programming languages. That
            experience taught me to quickly learn new technologies and confidently
            tackle challenges regardless of the language or framework
          </p>
        </div>

        <div className="focus-card">
          <h3>🚀 COSCompute</h3>
          <p>
            COSCompute is an initiative focused on helping small businesses get started
            in Azure and scale as they grow. Whether it's a hybrid environment or a
            fully cloud-native solution, I'm happy to share guidance and answer
            questions about the journey to the cloud.
          </p>
        </div>
      </section>
    </main>
  );
}
``