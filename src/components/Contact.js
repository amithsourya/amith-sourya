import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "6d9f4592-ff37-43c2-a23d-091ca8e82a3e");

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setStatus('Thank you for contacting me!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <section id="contact" style={{
      padding: '4.5rem 2rem',
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
      }}>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        style={{
          maxWidth: 420,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          background: 'rgba(255,255,255,0.92)',
          padding: 36,
          borderRadius: 18,
          boxShadow: '0 4px 24px #b7eaff33, 0 1.5px 0 #fff8 inset',
          border: '1.5px solid #b7eaff44',
          fontFamily: "'Quicksand', 'Segoe UI', 'Montserrat', sans-serif"
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: 13,
            borderRadius: 8,
            border: '1.5px solid #b7eaff88',
            fontSize: '1.05rem',
            fontFamily: 'inherit',
            background: '#f8fcfa',
            transition: 'border 0.18s'
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: 13,
            borderRadius: 8,
            border: '1.5px solid #b7eaff88',
            fontSize: '1.05rem',
            fontFamily: 'inherit',
            background: '#f8fcfa',
            transition: 'border 0.18s'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{
            padding: 13,
            borderRadius: 8,
            border: '1.5px solid #b7eaff88',
            fontSize: '1.05rem',
            fontFamily: 'inherit',
            background: '#f8fcfa',
            resize: 'vertical',
            transition: 'border 0.18s'
          }}
        />
        <button type="submit" style={{
          padding: '13px 0',
          borderRadius: 24,
          border: 'none',
          background: 'linear-gradient(90deg, #52b788 0%, #80d9fc 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.08rem',
          letterSpacing: '0.03em',
          cursor: 'pointer',
          boxShadow: '0 2px 12px #b7eaff33',
          transition: 'background 0.18s, box-shadow 0.18s, transform 0.18s'
        }}
        onMouseOver={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #80d9fc 0%, #52b788 100%)'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'linear-gradient(90deg, #52b788 0%, #80d9fc 100%)'; }}
        >Send</button>
        {status && <div style={{
          textAlign: 'center',
          marginTop: 8,
          color: status.startsWith('Thank') ? '#52b788' : '#d32f2f',
          fontWeight: 600,
          fontSize: '1.01rem'
        }}>{status}</div>}
      </form>
    </section>
  );
}

export default Contact;
