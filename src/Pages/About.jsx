import React from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function About() {
  const styles = {
    about: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7ff 0%, #e6f0ff 100%)",
      color: "#2c3e50",
      overflowX: "hidden",
    },
    abouthero: {
      background: "linear-gradient(135deg, #0056b3, #0099ff)",
      padding: "80px 20px",
      textAlign: "center",
      color: "white",
      position: "relative",
      overflow: "hidden",
    },
    aboutheroBefore: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80") center/cover',
      opacity: 0.15,
    },
    heroTitle: {
      fontSize: "3.5rem",
      fontWeight: 800,
      marginBottom: "15px",
      position: "relative",
      zIndex: 1,
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    },
    heroSubtitle: {
      fontSize: "1.3rem",
      opacity: 0.95,
      position: "relative",
      zIndex: 1,
      maxWidth: "600px",
      margin: "0 auto",
    },
    aboutContent: {
      maxWidth: "1200px",
      margin: "60px auto",
      padding: "0 20px",
    },
    section: {
      marginBottom: "40px",
    },
    sectionTitle: {
      fontSize: "1.8rem",
      color: "#0056b3",
      marginBottom: "15px",
      fontWeight: 700,
    },
    sectionText: {
      fontSize: "1.1rem",
      lineHeight: 1.8,
      color: "#555",
    },
    list: {
      paddingLeft: "20px",
      marginTop: "10px",
    },
    listItem: {
      marginBottom: "8px",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.about}>
        <div style={styles.abouthero}>
          <h1 style={styles.heroTitle}>About Dezy Hub</h1>
          <p style={styles.heroSubtitle}>Your creative partner in digital experiences</p>
        </div>
        <div style={styles.aboutContent}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Who We Are</h2>
            <p style={styles.sectionText}>
              Dezy Hub is a creative digital platform focused on building modern,
              user-friendly and visually appealing web experiences. We believe in
              clean design, simple solutions, and meaningful technology.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>What We Do</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>Web Design & Development</li>
              <li style={styles.listItem}>UI / UX Design</li>
              <li style={styles.listItem}>Creative Branding</li>
              <li style={styles.listItem}>Modern Frontend Solutions</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Vision</h2>
            <p style={styles.sectionText}>
              Our vision is to help individuals and businesses bring their ideas
              to life through powerful design and reliable technology — without
              unnecessary complexity.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
