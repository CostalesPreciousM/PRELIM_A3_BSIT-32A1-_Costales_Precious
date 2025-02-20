import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import News from "./News";
import Footer from "./Footer";

const Home = () => (
  <>
    <Hero />
    <Section id="home" title="Welcome to Lyceum of Alabang">
      <p>
        Experience world-class education with a focus on excellence, innovation,
        and success.
      </p>
      <a href="#about" className="btn-custom">
        Learn More
      </a>
    </Section>
  </>
);

const About = () => (
  <Section id="about" title="About Us">
    <p>
      Lyceum of Alabang is dedicated to shaping future leaders in technology,
      business, and the arts.
    </p>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact Us">
    <p>
      Email:{" "}
      <a href="mailto:info@lyceumalabang.edu.ph">info@lyceumalabang.edu.ph</a>
    </p>
    <p>Phone: (02) 123-4567</p>
    <p>Address: Km 30 National Road, Muntinlupa City</p>
  </Section>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
