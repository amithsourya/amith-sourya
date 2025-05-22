import React from 'react';

const projects = [
  {
    title: "Mysterious LLM",
    description: (
      <>
        A compact yet powerful Large Language Model (LLM) built on top of Microsoft’s Phi architecture.
        I have trained it to generate mysterious responses to user queries.
        This model of upto
        <span className="project-highlight">2.7 Billion</span>
        parameters was trained with Supervised Fine Tuning using
        
        <span className="project-highlight">Python</span>
        ,
        <span className="project-highlight">Pytorch</span>
      </>
    ),
    image: "https://the-decoder.com/wp-content/uploads/2023/11/Phi-2-MS-1200x684.jpg",
    link: "https://github.com/amithsourya/mysteriousLLM"
  },
  {
    title: "Health CRM",
    description: (
      <>
        A web-based Customer Relationship Management (CRM) system tailored for healthcare providers.
        It helps manage patient information, appointments, and communications efficiently.
        The modern UI was built using
        <span className="project-highlight">HTML</span>,
        <span className="project-highlight">CSS</span>,
        <span className="project-highlight">JavaScript</span>and
        <span className="project-highlight">React</span>
        
      </>
    ),
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
      background: 'linear-gradient(120deg, #e0ffd6 0%, #b7eaff 100%)'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        fontFamily: "'Montserrat', 'Segoe UI', 'Quicksand', sans-serif",
        fontWeight: 700,
        fontSize: '2.1rem',
        letterSpacing: '0.02em',
        color: '#184c29',
        background: 'linear-gradient(90deg, #163e24 60%, #45839b 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Featured Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.2rem',
        maxWidth: 1000,
        margin: '0 auto'
      }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            background: 'rgba(255,255,255,0.85)',
            borderRadius: 18,
            boxShadow: '0 4px 24px #b7eaff33, 0 1.5px 0 #fff8 inset',
            padding: 28,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            transition: 'box-shadow 0.18s, transform 0.18s',
            border: '1.5px solid #b7eaff44',
            position: 'relative',
            minHeight: 340,
            cursor: 'pointer'
          }}>
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: '100%',
                height: 160,
                objectFit: 'cover',
                borderRadius: 12,
                marginBottom: 18,
                boxShadow: '0 2px 12px #b7eaff22'
              }}
            />
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '1.32rem',
              fontWeight: 700,
              color: '#1976d2',
              letterSpacing: '0.01em',
              fontFamily: "'Montserrat', 'Segoe UI', 'Quicksand', sans-serif"
            }}>{proj.title}</h3>
            <p style={{
              textAlign: 'left',
              color: '#184c29',
              fontSize: '1.05rem',
              marginBottom: 18,
              fontFamily: "'Quicksand', 'Segoe UI', 'Montserrat', sans-serif"
            }}>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{
              marginTop: 'auto',
              color: '#fff',
              background: 'linear-gradient(90deg, #52b788 0%, #80d9fc 100%)',
              padding: '10px 28px',
              borderRadius: '20px',
              fontWeight: 600,
              fontSize: '1.04rem',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              boxShadow: '0 2px 12px #b7eaff33',
              transition: 'background 0.18s, box-shadow 0.18s, color 0.18s'
            }}
            onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #80d9fc 0%, #52b788 100%)'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #52b788 0%, #80d9fc 100%)'; }}
            >View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
