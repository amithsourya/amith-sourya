import React, { useEffect, useState } from 'react';
import '../styles/Landing.css';
import avatar from '../photo.jpeg';

function Landing() {
  // Typing animation state
  const fullTitle = "Amith Sourya Sadineni";
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    setTypedTitle('');
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Scroll to 40px and prevent user from scrolling above that
  // useEffect(() => {
  //   window.scrollTo({ top: 40, behavior: 'instant' });
  //   const handleScroll = (event) => {
  //     if (window.scrollY < 40) {
  //       event.preventDefault();
  //       // console.log(event)
  //       window.scrollTo({ top: 40, behavior: 'smooth' });
  //       // if (event) event.preventDefault();
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll, { passive: false });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <section
      id="landing"
      className="landing-section landing-modern"
    >
      <div className="landing-bg">
        {/* Removed birds-group */}
        <div className="sun" />
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        {/* Removed hills and trees */}
      </div>
      <div className="landing-main-row">
        <div className="landing-avatar-col">
          <img
            src={avatar}
            alt="Amith Sourya Sadineni"
            className="landing-avatar modern-avatar"
          />
        </div>
        <div className="landing-content modern-content">
          <h1 className="landing-title modern-title typing-title">
            {typedTitle}
            <span className={`typing-caret${typedTitle.length === fullTitle.length ? ' done' : ''}`}>|</span>
          </h1>
          <div className="modern-tagline">
            <span className="highlight modern-role">Software Engineer at Oracle</span> &mdash; Building impactful, cutting-edge digital products.
          </div>
          <p className="landing-desc modern-desc">
            Experienced in{' '}
            <span className="exp-keyword">Java</span>,{' '}
            <span className="exp-keyword">JavaScript</span>,{' '}
            {/* <span className="exp-keyword">Node.js</span>,{' '} */}
            <span className="exp-keyword">React</span>, and{' '}
            <span className="exp-keyword">fine-tuning LLMs</span>.<br />
            I create robust, transformative solutions with a focus on clean code and user experience.<br />
            <span className="desc-secondary">
              Open to new opportunities & collaborations.
            </span>
          </p>
          <a
            href="mailto:amith.sourya.sadineni@gmail.com"
            className="modern-email modern-cta"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Landing;
