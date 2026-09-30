import './App.css'

function App() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2>
          Abhishek <span style={{ color: '#6366f1' }}>Babu</span>
        </h2>

        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#documents">Documents</a>
          <a href="#contact">Contact</a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">

        <div className="hero-content">

          <div className="hero-layout">

            {/* LEFT SIDE */}

            <div className="hero-left">

              <div className="availability-badge">
                <span>●</span> Available for Opportunities
              </div>

              <p className="hello">
                Hello, I'm
              </p>

              <h1>
                Abhishek Babu <span>Kolati</span>
              </h1>

              <h2>
                M.Tech CSE | Python | Machine Learning |
                Deep Learning & AI Enthusiast
              </h2>

              <p className="hero-text">
                Computer Science postgraduate passionate about
                Deep Learning, Machine Learning, NLP, Python
                and Data Science.
              </p>


              {/* BUTTONS */}

              <div className="buttons">

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  ↓ &nbsp; Download Resume
                </a>

                <a
                  href="#projects"
                  className="secondary-btn"
                >
                  ◇ &nbsp; View My Projects
                </a>

              </div>


              {/* CONTACT INFO */}

              <div className="hero-contact">

                <span>
                  📍 Tadepalligudem, AP
                </span>

                <span>
                  ✉️ abhiabhi1833@gmail.com
                </span>

                <a
                  href="https://linkedin.com/in/kolati-abhishek-babu-1592aa1a2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 LinkedIn Profile
                </a>
                <a
  href="https://github.com/abhiabhi1833-ux"
  target="_blank"
  rel="noreferrer"
>
  💻 GitHub Profile
</a>

                <span>
                  &lt;/&gt; Building a smarter future
                </span>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="hero-right">

              <img
                src="/images/profile.jpg"
                alt="Abhishek Babu"
                className="profile-photo"
              />

              <div className="dream-text">

                <span>Dream</span>
                <br />
                → Build
                <br />
                → Grow

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="about-layout">

          <div className="about-text">

            <div className="section-label">
              About Me
            </div>

            <h2>
              Who I Am
            </h2>

            <p>
              I completed my M.Tech in Computer Science and
              Engineering. I am interested in Deep Learning,
              Machine Learning, NLP, Python and Data Science.
              I enjoy building practical technology projects
              and learning new tools and technologies.
            </p>

          </div>


          <div className="about-cards">

            <div className="info-card">

              <div className="info-icon">
                🎓
              </div>

              <div>
                <h3>Education</h3>
                <p>M.Tech CSE</p>
                <small>2024 – 2026</small>
              </div>

            </div>


            <div className="info-card">

              <div className="info-icon">
                &lt;/&gt;
              </div>

              <div>
                <h3>Key Interests</h3>
                <p>
                  Deep Learning, NLP,
                  AI, Data Science
                </p>
              </div>

            </div>


            <div className="info-card">

              <div className="info-icon">
                🐍
              </div>

              <div>
                <h3>Languages</h3>
                <p>
                  Python, JavaScript,
                  HTML, CSS
                </p>
              </div>

            </div>


            <div className="info-card">

              <div className="info-icon">
                ⚙️
              </div>

              <div>
                <h3>Tools & Frameworks</h3>
                <p>
                  TensorFlow, PyTorch,
                  React, Node.js, Streamlit
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section">

        <div className="section-label">
          My Skills
        </div>

        <h2>
          Technical Skills
        </h2>

        <div className="skills-container">

          <span>Python</span>
          <span>Machine Learning</span>
          <span>Deep Learning</span>
          <span>NLP</span>
          <span>DistilBERT</span>
          <span>TensorFlow</span>
          <span>Scikit-learn</span>
          <span>SHAP</span>
          <span>Streamlit</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>Git & GitHub</span>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <div className="section-label">
          My Journey
        </div>

        <h2>
          Professional Experience
        </h2>


        <div className="experience-card">

          <div className="experience-icon">
            👨‍🏫
          </div>

          <div>

            <h3>
              Teacher
            </h3>

            <h4>
              St. Mary's E.M. School, Parthipadu
            </h4>

            <p className="experience-duration">
              2022 – 2024
            </p>

            <p>
              Worked as a teacher and handled academic
              subjects including Computer Science and
              other subjects. Developed communication,
              problem-solving and classroom management skills.
            </p>

          </div>

        </div>


        <div className="experience-card">

          <div className="experience-icon">
            💻
          </div>

          <div>

            <h3>
              Machine Learning Intern
            </h3>

            <h4>
              DSIR-CRTDH, National Institute of Technology
              Andhra Pradesh
            </h4>

            <p className="experience-duration">
              15 April 2026 – 7 August 2026
            </p>

            <p>
              Completed an internship at DSIR-sponsored
              Common Research and Technology Development Hub
              (CRTDH), NIT Andhra Pradesh. Worked on Deep
              Learning, Machine Learning and Artificial
              Intelligence based projects.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <div className="section-label">
          What I Build
        </div>

        <h2>
          Featured Projects
        </h2>

        <div className="projects-container">


          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              Fake News Detection Using DistilBERT
            </h3>

            <p>
              A Deep Learning based application for detecting
              fake and real news using DistilBERT and Machine
              Learning algorithms.
            </p>

            <p>
              <strong>Technologies:</strong> Python,
              DistilBERT, Transformers, Scikit-learn,
              SHAP and Streamlit.
            </p>

          </div>


          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Smart Electrical Fault Detection System
            </h3>

            <p>
              A Machine Learning and Artificial Intelligence
              based project focused on detecting electrical
              faults using data-driven techniques.
            </p>

            <p>
              <strong>Organization:</strong> DSIR-CRTDH,
              NIT Andhra Pradesh
            </p>

            <p>
              <strong>Technologies:</strong> Machine Learning,
              Artificial Intelligence and Python.
            </p>

          </div>


          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              Colour Detection Using Machine Learning
            </h3>

            <p>
              A Machine Learning based project developed
              for identifying and detecting colours from images.
            </p>

            <p>
              <strong>Technologies:</strong> Python
              and Machine Learning.
            </p>

          </div>


          <div className="project-card">

            <div className="project-number">
              04
            </div>

            <h3>
              TypeNova – Stylish Name Generator
            </h3>

            <p>
              A modern web application developed to generate
              and style names for bikes, cars, stickers and
              other creative uses.
            </p>

            <p>
              <strong>Technologies:</strong> React,
              JavaScript, Vite, HTML and CSS.
            </p>

          </div>


          <div className="project-card">

            <div className="project-number">
              05
            </div>

            <h3>
              Personal Portfolio Website
            </h3>

            <p>
              A responsive personal portfolio website created
              to showcase education, technical skills, projects,
              professional experience and published research.
            </p>

            <p>
              <strong>Technologies:</strong> React,
              JavaScript, HTML and CSS.
            </p>

          </div>

        </div>

      </section>


      {/* ================= RESEARCH ================= */}

      <section id="research" className="section research-section">

        <div className="research-highlight">

          <div className="research-label">
            📚 PUBLISHED RESEARCH
          </div>

          <h2>
            Author of Published Research Paper
          </h2>

          <h3>
            A Comparative Framework for Fake News Detection
            Using DistilBERT and Machine Learning Algorithms
          </h3>

          <p>
            <strong>Authors:</strong> Kolati Abhishek Babu,
            Persis Voola
          </p>

          <p>
            Published in the Journal of Computing and Data
            Technology, Krrish Scientific Publications Pvt. Ltd.
          </p>

          <p>
            The research focuses on comparing Deep Learning
            and Machine Learning approaches for fake news
            detection using DistilBERT, NLP and SHAP-based
            explainability.
          </p>

          <p>
            <strong>Research Area:</strong> Deep Learning,
            NLP and Machine Learning
          </p>

          <p>
            <strong>DOI:</strong>{' '}

            <a
              href="https://doi.org/10.71426/jcdt.v2.i2.pp165-171"
              target="_blank"
              rel="noreferrer"
            >
              10.71426/jcdt.v2.i2.pp165-171
            </a>

          </p>

          <a
            href="/research/research-paper.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            📄 View Published Paper
          </a>

        </div>

      </section>


      {/* ================= DOCUMENTS ================= */}

      <section id="documents" className="section">

        <div className="section-label">
          Credentials
        </div>

        <h2>
          Documents & Achievements
        </h2>

        <p className="documents-intro">
          Academic and professional documents showcasing
          my educational background, internship experience
          and achievements.
        </p>


        <div className="document-card resume-card">

          <h3>
            📄 Resume
          </h3>

          <p>
            View my latest resume including education,
            skills, projects, research publication
            and experience.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            View Resume
          </a>

        </div>


        <div className="document-card">

          <h3>
            🏆 NIT Andhra Pradesh Internship Certificate
          </h3>

          <p>
            Certificate of Appreciation for successfully
            completing the internship at DSIR-CRTDH,
            NIT Andhra Pradesh.
          </p>

          <img
            src="/images/nit-internship-certificate.jpeg"
            alt="NIT Andhra Pradesh Internship Certificate"
            className="certificate-image"
          />

          <a
            href="/images/nit-internship-certificate.jpeg"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            View Certificate
          </a>

        </div>


        <h3 className="documents-subtitle">
          Academic & Professional ID Cards
        </h3>


        <div className="id-cards-container">


          <div className="id-card">

            <img
              src="/images/teacher-id.jpg"
              alt="Teacher ID Card"
            />

            <h3>
              Teacher Experience
            </h3>

            <p>
              St. Mary's E.M. School
            </p>

          </div>


          <div className="id-card">

            <img
              src="/images/btech-id.jpeg"
              alt="B.Tech ID Card"
            />

            <h3>
              B.Tech
            </h3>

            <p>
              Computer Science & Engineering
            </p>

          </div>


          <div className="id-card">

            <img
              src="/images/mtech-id.jpeg"
              alt="M.Tech ID Card"
            />

            <h3>
              M.Tech
            </h3>

            <p>
              Computer Science & Engineering
            </p>

          </div>


          <div className="id-card">

            <img
              src="/images/inter-id.jpeg"
              alt="Intermediate ID Card"
            />

            <h3>
              Intermediate
            </h3>

            <p>
              Academic Qualification
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">

        <div className="section-label">
          Get In Touch
        </div>

        <h2>
          Let's Connect
        </h2>

        <p>
          I am open to entry-level opportunities in Software
          Development, Data Science, Machine Learning and
          Deep Learning.
        </p>

        <div className="contact-links">

          <p>
            📱 Phone: +91 94908 23277
          </p>

          <p>
            📧 Email: abhiabhi1833@gmail.com
          </p>

          <p>
            🔗 LinkedIn:{' '}

            <a
              href="https://linkedin.com/in/kolati-abhishek-babu-1592aa1a2/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>

          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Abhishek Babu Kolati. All Rights Reserved.
        </p>

        <p>
          Published Research Author | M.Tech CSE |
          Python | Machine Learning | Deep Learning & AI
        </p>

      </footer>

    </div>
  )
}

export default App