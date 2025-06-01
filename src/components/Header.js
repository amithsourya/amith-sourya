import React, { useRef, useEffect, useState } from 'react';
import '../styles/Header.css';

// SVG icon components
const GitHubIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#232b36" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2Z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
    <path d="M7.5 8.5A1.5 1.5 0 1 1 7.5 5a1.5 1.5 0 0 1 0 3Zm-1.25 2.25h2.5v7.25h-2.5v-7.25ZM12.25 10.75h2.4v1.02h.03c.33-.62 1.13-1.27 2.33-1.27 2.5 0 2.96 1.65 2.96 3.8v4.2h-2.5v-3.73c0-.89-.02-2.04-1.25-2.04-1.25 0-1.44.97-1.44 1.97v3.8h-2.5v-7.25Z" fill="#fff"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="4" fill="#1DA1F2"/>
    <path d="M19.46 8.37c.01.14.01.29.01.43 0 4.39-3.34 9.47-9.47 9.47-1.88 0-3.63-.55-5.1-1.5.26.03.52.05.79.05 1.56 0 2.99-.53 4.13-1.43a3.34 3.34 0 0 1-3.12-2.32c.21.03.42.06.65.06.31 0 .62-.04.91-.12a3.33 3.33 0 0 1-2.67-3.27v-.04c.45.25.97.4 1.52.42a3.33 3.33 0 0 1-1.03-4.44 9.47 9.47 0 0 0 6.87 3.48c-.14-.61-.14-1.25.04-1.85a3.33 3.33 0 0 1 5.76-3.04 6.67 6.67 0 0 0 2.11-.81 3.33 3.33 0 0 1-1.46 1.84 6.66 6.66 0 0 0 1.91-.52 7.13 7.13 0 0 1-1.67 1.73Z" fill="#fff"/>
  </svg>
);

function Header({ onNavClick }) {
  const [show, setShow] = useState(true);
  const [mobileNav, setMobileNav] = useState(false);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShow(currentScroll < 50 || currentScroll < lastScroll.current);
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on resize or navigation
  useEffect(() => {
    const close = () => setMobileNav(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className={`header${show ? ' header-show' : ' header-hide'}`}>

      {/* Hamburger for mobile */}
      <button
        className={`header-hamburger${mobileNav ? ' open' : ''}`}
        aria-label="Open navigation"
        onClick={() => setMobileNav(v => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Social Links (desktop only, text) */}
      <nav className="header-socials">
        <a
          href="https://github.com/amithsourya/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link header-link-social"
        >GitHub</a>
        <a
          href="https://www.linkedin.com/in/amith-sourya-sadineni/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link header-link-social"
        >LinkedIn</a>
        <a
          href="https://twitter.com/50urya"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link header-link-social"
        >Twitter</a>
      </nav>
      {/* Internal Links + Social Links for mobile */}
      <nav className={`header-nav${mobileNav ? ' show' : ''}`}>
        <a
          href="#landing"
          onClick={onNavClick}
          className="header-link header-link-nav"
        >Home</a>
        <a
          href="#projects"
          onClick={onNavClick}
          className="header-link header-link-nav"
        >Projects</a>
        <a
          href="#contact"
          onClick={onNavClick}
          className="header-link header-link-nav"
        >Contact</a>
        {/* Social icons in sidebar for mobile - bottom left, no box */}
        <div className="header-nav-socials-icons">
          <a
            href="https://github.com/amithsourya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/amith-sourya-sadineni/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/50urya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            title="Twitter"
          >
            <TwitterIcon />
          </a>
        </div>
      </nav>
      {/* Overlay for mobile nav */}
      {mobileNav && <div className="header-nav-overlay" onClick={() => setMobileNav(false)} />}
    </header>
  );
}

export default Header;
