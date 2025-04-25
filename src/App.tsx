import { useState } from "react";
import "./index.css";
// Import logo as string URL instead of module
import reactLogo from "./react.svg";

// Pages
const Home = () => (
  <div className="page home-page">
    <h1>Photography Portfolio</h1>
    <p>Welcome to my photography showcase. Explore my work through the gallery.</p>
    <div className="featured-image">
      <img src={reactLogo} alt="Featured" className="featured" />
      <p>Featured Shot of the Day</p>
    </div>
  </div>
);

const Gallery = () => (
  <div className="page gallery-page">
    <h1>Gallery</h1>
    <div className="gallery-grid">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="gallery-item">
          <img src={reactLogo} alt={`Gallery item ${i}`} />
          <p>Photo #{i}</p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className="page about-page">
    <h1>About Me</h1>
    <div className="about-content">
      <img src={reactLogo} alt="Photographer" className="about-image" />
      <div>
        <p>I am a passionate photographer with 5 years of experience capturing beautiful moments.</p>
        <p>My style focuses on natural light and candid expressions to tell authentic stories.</p>
        <p>I specialize in landscape, portrait, and event photography.</p>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="page contact-page">
    <h1>Contact</h1>
    <p>Get in touch for bookings or inquiries</p>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Your message" rows={5}></textarea>
      </div>
      <button type="submit" className="submit-button">Send Message</button>
    </form>
  </div>
);

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Navigation handler with explicit type
  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  // Render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'gallery': return <Gallery />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <img src={reactLogo} alt="Logo" className="nav-logo" />
          <span>Photography Portfolio</span>
        </div>
        <ul className="nav-menu">
          <li><button className={currentPage === 'home' ? 'active' : ''} onClick={() => navigateTo('home')}>Home</button></li>
          <li><button className={currentPage === 'gallery' ? 'active' : ''} onClick={() => navigateTo('gallery')}>Gallery</button></li>
          <li><button className={currentPage === 'about' ? 'active' : ''} onClick={() => navigateTo('about')}>About</button></li>
          <li><button className={currentPage === 'contact' ? 'active' : ''} onClick={() => navigateTo('contact')}>Contact</button></li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Photography Portfolio. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
