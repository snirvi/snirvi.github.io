import { Projects } from "./components/project";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home">
          Nirvi Shah
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="hero-label">Front-End Developer</p>

          <h1>
            Building thoughtful digital experiences with modern web
            technologies.
          </h1>

          <p className="hero-description">
            I develop responsive and maintainable applications using React,
            TypeScript and modern front-end architecture.
          </p>

          <a className="button button-primary" href="#projects">
            View My Work
          </a>
        </section>

        <Projects />

        <section className="contact-section" id="contact">
          <p className="section-label">Contact</p>
          <h2>Let us connect</h2>
          <p>
            Visit my GitHub profile to review my projects and development work.
          </p>

          <a
            className="button button-secondary"
            href="https://github.com/snirvi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Nirvi Shah</p>
      </footer>
    </>
  );
}

export default App;