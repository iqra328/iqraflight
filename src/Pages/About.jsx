import React, { useState } from 'react';
import '../Styles/About.css'; // Import custom CSS
import Navbar from '../Components/Navbar'

function About() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({
    story: `SkyWay Airlines started with a simple vision: to make air travel accessible, reliable, and memorable for everyone. Founded in 1995, we began with just three aircraft and a dream to connect people across the world. Today, we serve over 150 destinations globally with a modern fleet of 100+ aircraft.`,
    mission: `Our mission is to provide safe, comfortable, and seamless air travel experiences. We're committed to innovation, sustainability, and exceptional customer service. Every flight is designed to deliver reliability and care at the center of your journey.`,
    vision: `We envision a world where air travel is sustainable, accessible, and inspiring. By 2030, we aim to transition to 50% sustainable aviation fuel and achieve net-zero emissions by 2040. Our goal is to redefine air travel through technology and personalized experiences.`
  });

  const guides = [
    { 
      name: 'Captain Raj Sharma', 
      role: 'Senior Pilot - 20+ years experience', 
      img: 'https://t3.ftcdn.net/jpg/05/89/93/26/360_F_589932689_aWLE8LJBF3snRzndnK4w2ySDSsNP9Xhx.jpg' 
    },
    { 
      name: 'Priya Mehta', 
      role: 'Chief Flight Attendant', 
      img: 'https://media.istockphoto.com/id/624391346/photo/aeroplane-pilot-looking-at-camera-and-smiling.jpg?s=612x612&w=0&k=20&c=eDTZ8IyauO4ONPSTYy_iDEodEiP4n3OYhBVJGohUvGs=' 
    },
    { 
      name: 'Arjun Kapoor', 
      role: 'Ground Operations Manager', 
      img: 'https://img.freepik.com/free-photo/front-view-female-flight-attendant-studio_23-2150312723.jpg?semt=ais_hybrid&w=740&q=80' 
    },
  ];

  function openEditor() {
    setOpen(true);
  }

  function save() {
    setOpen(false);
  }

  return (
    <>
    <Navbar/>
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-hero-title">About SkyWay Airlines</h1>
        <p className="about-hero-subtitle">Your Journey, Our Commitment Since 1995</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-grid">
          {/* Our Story Card */}
          <div className="about-card story-card">
            <div className="card-icon">✈️</div>
            <h3 className="card-title">Our Story</h3>
            <p className="card-text">{draft.story}</p>
          </div>

          {/* Our Mission Card */}
          <div className="about-card mission-card">
            <div className="card-icon">🌍</div>
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">{draft.mission}</p>
          </div>

          {/* Our Vision Card */}
          <div className="about-card vision-card">
            <div className="card-icon">⭐</div>
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">{draft.vision}</p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="about-actions">
          <button onClick={openEditor} className="edit-button">
            Edit About Section
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="section-title">Meet Our Flight Crew</h2>
        <p className="section-subtitle">Dedicated professionals ensuring your safe and comfortable journey</p>
        
        <div className="team-grid">
          {guides.map((guide, index) => (
            <div key={index} className="team-card">
              <div className="team-img-container">
                <img src={guide.img} alt={guide.name} className="team-img" />
              </div>
              <h4 className="team-name">{guide.name}</h4>
              <p className="team-role">{guide.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Years of Service</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">150+</h3>
            <p className="stat-label">Destinations</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100+</h3>
            <p className="stat-label">Modern Aircraft</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10M+</h3>
            <p className="stat-label">Happy Passengers</p>
          </div>
        </div>
      </div>

      {/* Modal for Editing */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Edit About Section</h3>
            
            <div className="modal-input-group">
              <label>Our Story</label>
              <textarea
                value={draft.story}
                onChange={(e) => setDraft({...draft, story: e.target.value})}
                className="modal-textarea"
                rows="4"
              />
            </div>

            <div className="modal-input-group">
              <label>Our Mission</label>
              <textarea
                value={draft.mission}
                onChange={(e) => setDraft({...draft, mission: e.target.value})}
                className="modal-textarea"
                rows="4"
              />
            </div>

            <div className="modal-input-group">
              <label>Our Vision</label>
              <textarea
                value={draft.vision}
                onChange={(e) => setDraft({...draft, vision: e.target.value})}
                className="modal-textarea"
                rows="4"
              />
            </div>

            <div className="modal-actions">
              <button onClick={() => setOpen(false)} className="modal-cancel">
                Cancel
              </button>
              <button onClick={save} className="modal-save">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="about-footer">
        <p>© {new Date().getFullYear()} SkyWay Airlines — Your Trusted Air Travel Partner</p>
      </footer>
    </div>
    </>
  );
}

export default About;
