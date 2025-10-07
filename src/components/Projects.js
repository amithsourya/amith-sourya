import React from 'react';

const projects = [
  {
    title: "Script Generator using AI",
    description: (
      <>
        An AI to generate domain-specific scripts for Oracle Utilities.
        I have trained the Large Language Model (LLM) to generate scripts using simple English prompts.
        This LLM, derived from the Meta LLaMA architecture of upto
        <span className="project-highlight">1 Billion</span> parameters
        , was trained with Supervised Fine Tuning using
        <span className="project-highlight">Python</span>and
        <span className="project-highlight">Pytorch</span>
        
      </>
    ),
    image: "https://www.aiwire.net/wp-content/uploads/2024/06/6-4-24-1713710970597-550x320.png",
    link: "https://github.com/amithsourya/Script-Generate-4GL",
  },
  {
    title: "Healthcare System",
    description: (
      <>
        A Website tailored for healthcare providers.
        It helps manage patient information, appointments, and communications efficiently.
        
        
      </>
    ),
    image: "https://media.istockphoto.com/id/1321691804/photo/professional-smiling-black-female-head-nurse-or-doctor-wearing-stethoscope-uses-medical.jpg?s=612x612&w=0&k=20&c=IU-FBpdfNFXexfee4e8UNdR-EY_z8hk9Mo3KRsdPduk=",
    link: "https://github.com/amithsourya/health-crm",
  },
  {
    title: "Mysterious LLM",
    description: (
      <>
        A compact yet powerful AI built on top of Microsoft’s Phi architecture.
        It was trained to generate mysterious responses to user queries.
        This Large Language Model of upto
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
    title: "Meme Generator",
    description: (
      <>
        Create hilarious, share-worthy memes in seconds with this easy-to-use web-based meme generator.
        It is developed using
        <span className="project-highlight">HTML</span>,
        <span className="project-highlight">CSS</span>,
        <span className="project-highlight">JavaScript</span>and
        <span className="project-highlight">React</span>
      </>
    ),
    image: "https://i.ytimg.com/vi/D-zhr3Ii8MU/maxresdefault.jpg",
    link: "https://github.com/amithsourya/React-Practice/tree/main/meme-generator"
  }
];

function Projects() {
  return (
    <section id="projects" style={{
      padding: '4rem 2rem',
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
            // margin: '10px 10px',
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
              margin: '0 0 0 0',
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
              fontFamily: "'Quicksand', 'Segoe UI', 'Montserrat', sans-serif",
              wordBreak: 'break-word', // Ensures long words break
              whiteSpace: 'normal',    // Allows wrapping
              overflowWrap: 'break-word' // Fallback for older browsers
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
