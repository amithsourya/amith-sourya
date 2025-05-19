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
        setStatus('Thank you for contacting me! I will write back to your email within 2 business days.');
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
      padding: '4rem 0',
      background: '#f5f5f5'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        method="POST"
        style={{
          maxWidth: 400,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          background: '#fff',
          padding: 32,
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', resize: 'vertical' }}
        />
        <button type="submit" style={{
          padding: 12,
          borderRadius: 6,
          border: 'none',
          background: '#1976d2',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>Send</button>
        {status && <div style={{ textAlign: 'center', marginTop: 8 }}>{status}</div>}
      </form>
    </section>
  );
}

export default Contact;
