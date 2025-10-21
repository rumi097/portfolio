import React from 'react'

function About() {
  return (
    <section className="page-section">
      <h2>About Me</h2>
      <p>
        I rejoice in solving algorithmic, data structure and mathematical problems. 
        I enthusiastically enjoy exploring new technologies, read different 
        Bangla & English novels and writing real-life contents.
      </p>
      
      <h3>My Skills</h3>
      <ul className="skills-list">
        <li>Competitive Programming</li>
        <li>Data Structure and algorithms</li>
        <li>Critical Thinking</li>
        <li>Project Management</li>
        <li>Writer</li>
        <li>Communication & Teaching</li>
      </ul>

      <h3>Education</h3>
      <div className="education-card">
        <h4>BSc in Computer Science and Engineering</h4>
        <p>Rajshahi University of Engineering and Technology</p>
        <p><em>(December 2022 - Present)</em></p>
      </div>
    </section>
  )
}

export default About