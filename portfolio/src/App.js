import React from 'react';
import { BrowserRouter as BrowserRouter, Outlet, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Layout = () => {
  return (
    <div className="content">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
};

const Home = () => (
  <div className="content">
    <h2>
      Home
    </h2>
  </div>
);

const About = () => (
  <div className="content">
    <h2>
      About
    </h2>
  </div>
);

const Experience = () => (
  <div className="content">
    <h2>
      Experience
    </h2>
  </div>
);

const Projects = () => (
  <div className="content">
    <h2>
      Projects
    </h2>
  </div>
);

const Contact = () => (
  <div className="content">
    <h2>
      Contact
    </h2>
  </div>
);

const NoPage = () => (
  <div className="content">
    <h2>
      No Page Found
    </h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
