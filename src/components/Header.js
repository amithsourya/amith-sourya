import React, { useRef, useEffect, useState } from 'react';
import '../styles/Header.css';

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
      {/* Animated bubbles */}
      <div className="header-bubble b1"></div>
      <div className="header-bubble b2"></div>
      <div className="header-bubble b3"></div>
      <div className="header-bubble b4"></div>

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

      {/* Social Links */}
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
        {/* Social links in sidebar for mobile */}
        <div className="header-nav-socials">
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
        </div>
      </nav>
      {/* Overlay for mobile nav */}
      {mobileNav && <div className="header-nav-overlay" onClick={() => setMobileNav(false)} />}
    </header>
  );
}

export default Header;
