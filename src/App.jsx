import React from 'react';
import Navbar from './Navbar';
import './CSS Files/App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';





function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;