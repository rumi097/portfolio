import React from 'react'

function Contact() {
  return (
    <section className="page-section">
      <h2>Contact Me</h2>
      <p>
        I'm always open to new opportunities and collaborations.
        Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <div className="contact-links">
        <a href="mailto:aliazgor.rumi.ruet.2103097@gmail.com" className="cta-button">
          Email Me
        </a>
        <a 
          href="https://linkedin.com/in/ali-azgor-rumi-86a73b200" 
          className="cta-button-secondary" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View LinkedIn Profile
        </a>
      </div>
    </section>
  )
}

export default Contact