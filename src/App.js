import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gdowins Tuyishime</h1>
        <nav>
          <a href="Tuyishime_Godwins_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://linkedin.com/in/godwins-tuyishime" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/T-Godwins" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <header>Thank you!</header>
      </footer>
    </div>
  );
}

export default App;
