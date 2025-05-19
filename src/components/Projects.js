import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "A cool project about React.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Another awesome project.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Yet another project.",
    image: "https://via.placeholder.com/150",
    link: "#"
  },
  {
    title: "Project Four",
    description: "A fourth project.",
    image: "https://via.placeholder.com/150",
    link: "#"
  }
];

function Projects() {
  return (
    <section id="projects" style={{
      padding: '4rem 0',
      background: '#fff'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        maxWidth: 900,
        margin: '0 auto'
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            background: '#f9f9f9',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img src={proj.image} alt={proj.title} style={{ width: 100, height: 100, borderRadius: 8, marginBottom: 16 }} />
            <h3>{proj.title}</h3>
            <p style={{ textAlign: 'center' }}>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
              marginTop: 12,
              color: '#1976d2',
              textDecoration: 'underline'
            }}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
