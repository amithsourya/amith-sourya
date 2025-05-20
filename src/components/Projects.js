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
    image: "https://private-user-images.githubusercontent.com/69379991/444867287-3b5718f9-5470-48b0-979e-a6183113ba5c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDc3NjU2NjQsIm5iZiI6MTc0Nzc2NTM2NCwicGF0aCI6Ii82OTM3OTk5MS80NDQ4NjcyODctM2I1NzE4ZjktNTQ3MC00OGIwLTk3OWUtYTYxODMxMTNiYTVjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTIwVDE4MjI0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzOGQwODIyMjdkMWRlMjQ5OTNkYTdkMmU3ZWRmMWVjYmQ4ZGFjNTNlMDM4YTY1NmE5MjE3NjdkYzM2NTc4YmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bbLvrCt20f4IwF3cObgWeyY632B1pR-F0FD14-yA6-s",
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
