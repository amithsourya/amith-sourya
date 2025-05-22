import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Amith Sourya Sadineni | Oracle Software Engineer | LLM | React | Portfolio</title>
        <meta name="description" content="Amith Sourya Sadineni - Oracle Software Engineer, LLM fine-tuning, React, Node.js, JavaScript. Portfolio, projects, contact, and experience." />
        <meta name="keywords" content="Amith Sourya, Amith Sourya Sadineni, Oracle, Software Engineer, React, Node.js, LLM, Portfolio, JavaScript, Fine Tuning, AI, CRM, Health CRM, Oracle Developer, Oracle Engineer" />
        <meta name="author" content="Amith Sourya Sadineni" />
        <meta property="og:title" content="Amith Sourya Sadineni | Oracle Software Engineer | LLM | React | Portfolio" />
        <meta property="og:description" content="Amith Sourya Sadineni - Oracle Software Engineer, LLM fine-tuning, React, Node.js, JavaScript. Portfolio, projects, contact, and experience." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/69379991?v=4" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amith-sourya.vercel.app/" />
        <link rel="canonical" href="https://amith-sourya.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amith Sourya Sadineni",
              "url": "https://amith-sourya.vercel.app/",
              "image": "https://avatars.githubusercontent.com/u/69379991?v=4",
              "sameAs": [
                "https://github.com/amithsourya",
                "https://www.linkedin.com/in/amith-sourya-sadineni/",
                "https://twitter.com/50urya"
              ],
              "jobTitle": "Oracle Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Oracle"
              },
              "description": "Amith Sourya Sadineni is a Software Engineer at Oracle specializing in LLM fine-tuning, React, Node.js, and JavaScript."
            }
          `}
        </script>
      </Helmet>
      <Header onNavClick={handleNavClick} />
      <div style={{ height: 70 }} /> {/* Spacer for fixed header */}
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
