import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './CSS Files/App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Blogs from './blogs';
import BlogPost from './blogpages';

function AppContent() {
  const location = useLocation();

  // render the navbar only if the path is not "/blogs"
  const showNavbar = !location.pathname.startsWith('/blogs');

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <About />
              <Projects />
              <Contact />
            </div>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
