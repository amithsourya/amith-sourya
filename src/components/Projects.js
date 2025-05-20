import React from 'react';

const projects = [
  {
    title: "Fine Tuning LLMs",
    description: "LLM with Supervised Fine-Tuning to generate Mysterious Responses",
    image: "https://the-decoder.com/wp-content/uploads/2023/11/Phi-2-MS-1200x684.jpg",
    link: "https://github.com/amithsourya/mysteriousLLM"
  },
  {
    title: "Health CRM",
    description: "A web-based CRM for healthcare providers. Manage patient information, appointments, and communications.",
    image: "https://media.istockphoto.com/id/1321691804/photo/professional-smiling-black-female-head-nurse-or-doctor-wearing-stethoscope-uses-medical.jpg?s=612x612&w=0&k=20&c=IU-FBpdfNFXexfee4e8UNdR-EY_z8hk9Mo3KRsdPduk=",
    link: "https://github.com/amithsourya/health-crm",
  },
  // {
  //   title: "Project Three",
  //   description: "Yet another project.",
  //   image: "https://via.placeholder.com/150",
  //   link: "#"
  // },
  // {
  //   title: "Project Four",
  //   description: "A fourth project.",
  //   image: "https://via.placeholder.com/150",
  //   link: "#"
  // }
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
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: '100%',
                height: '50%',
                objectFit: 'cover ',
                borderRadius: 8,
                marginBottom: 16
              }}
            />
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
