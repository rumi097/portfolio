import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rumi097/repos')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []); 

  return (
    <section className="page-section">
      <h2>My Projects & Achievements</h2>

      <div className="project-highlights">
        <div className="highlight-card">
          <h3>1000+</h3>
          <p>Problems Solved (Codeforces, LeetCode, etc.)</p>
        </div>
        <div className="highlight-card">
          <h3>ICPC 2022</h3>
          <p>Participant in the world's most prestigious programming competition.</p>
        </div>
      </div>

      <h3 className="github-title">My GitHub Repositories</h3>
      <div className="project-grid">
        {projects.map(project => (
          
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description || 'No description available.'}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </motion.div>
          
        ))}
      </div>
    </section>
  )
}

export default Projects