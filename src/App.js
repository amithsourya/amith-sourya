import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Smooth scroll handler for internal links
  const handleNavClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fafafa' }}>
      <Header onNavClick={handleNavClick} />
      <div style={{ height: 70 }} /> {/* Spacer for fixed header */}
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
