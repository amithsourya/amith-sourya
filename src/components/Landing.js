import React from 'react';
import '../styles/Landing.css';
// Import the avatar image
import avatar from '../photo.jpeg';

function Landing() {
  return (
    <section
      id="landing"
      className="landing-section"
    >
      {/* Nature inspired background with animations */}
      <div className="landing-bg">
        {/* Birds group (triangle formation, animated right to left, perspective, flapping wings) */}
        <div className="birds-group">
          {/* 5 birds in a bent triangle formation, with perspective */}
          <svg width="240" height="90" className="birds-svg">
            {/* Top bird (closest, largest) */}
            <g>
              <g className="bird bird-top">
                <path d="M120,28 Q128,18 136,28" stroke="#444" strokeWidth="3" fill="none"/>
              </g>
            </g>
            {/* Middle row (smaller, further, bent) */}
            <g>
              <g className="bird bird-mid-left">
                <path d="M95,45 Q101,37 107,45" stroke="#444" strokeWidth="2.2" fill="none"/>
              </g>
              <g className="bird bird-mid-right">
                <path d="M145,45 Q151,37 157,45" stroke="#444" strokeWidth="2.2" fill="none"/>
              </g>
            </g>
            {/* Bottom row (smallest, furthest, more bent) */}
            <g>
              <g className="bird bird-bot-left">
                <path d="M75,68 Q80,62 85,68" stroke="#444" strokeWidth="1.5" fill="none"/>
              </g>
              <g className="bird bird-bot-right">
                <path d="M165,68 Q170,62 175,68" stroke="#444" strokeWidth="1.5" fill="none"/>
              </g>
            </g>
          </svg>
        </div>
        {/* Sun (animated) */}
        <div className="sun" />
        {/* Clouds (animated) */}
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        {/* Hills */}
        <div className="hill hill1" />
        <div className="hill hill2" />
        {/* Trees with animated foliage (no falling leaves) */}
        {[18, 38, 58, 78].map((left, i) => (
          <div key={i} className={`tree tree${i}`} style={{ left: `${left}%` }}>
            {/* Trunk */}
            <div className="tree-trunk" />
            {/* Foliage with animated sway */}
            <div className={`tree-foliage tree-foliage-main sway${i}`} />
            <div className={`tree-foliage tree-foliage-mid sway${i}`} />
            <div className={`tree-foliage tree-foliage-top sway${i}`} />
          </div>
        ))}
      </div>
      <div className="landing-content">
        <img
          src={avatar}
          alt="Avatar"
          className="landing-avatar"
        />
        <h1 className="landing-title">
          Amith Sourya Sadineni
        </h1>
        <p className="landing-desc">
          Hi! I'm Amith, a passionate software developer with a knack for problem-solving and building efficient solutions. I love clean code, good coffee, and physics.<br />Submit the form in the Contact section to get in touch with me! Or simply send out an email to:{' '}
          <a
            href="mailto:amith.sourya.sadineni@gmail.com"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            amith.sourya.sadineni@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Landing;
