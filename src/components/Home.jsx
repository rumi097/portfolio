import React from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpg'; // Import your image here

function Home() {
  return (
    <section className="page-section hero">
      <img src={profileImage} alt="Ali Azgor Rumi" className="profile-photo" /> {/* Add this line */}
      <h1>Hi, I'm Ali Azgor Rumi</h1>
      <p className="subtitle">A dedicated Computer Science and Engineering student at Rajshahi University of Engineering and Technology.</p>
      <p className="hero-bio">
        Rejoice in solving algorithmic, data structure and mathematical problems. 
        Enthusiastically enjoy exploring new technologies, read different 
        Bangla & English novels and writing real-life contents.
      </p>
      <Link to="/projects" className="cta-button">View My Work</Link>
    </section>
  )
}

export default Home