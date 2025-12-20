import React, { useState } from "react";

<<<<<<< HEAD
=======
// 22+ mock users with avatars
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
const mockUsers = [
  { name: "Aqsa Sadiq", role: "Admin", img: "https://i.pravatar.cc/100?img=5" },
  { name: "Hamza Khan", role: "Editor", img: "https://i.pravatar.cc/100?img=2" },
  { name: "Sara Malik", role: "User", img: "https://i.pravatar.cc/100?img=3" },
  { name: "Ali Raza", role: "Viewer", img: "https://i.pravatar.cc/100?img=4" },
  { name: "Zain Ali", role: "Admin", img: "https://i.pravatar.cc/100?img=1" },
  { name: "Hina Noor", role: "Editor", img: "https://i.pravatar.cc/100?img=6" },
  { name: "Bilal Ahmed", role: "User", img: "https://i.pravatar.cc/100?img=7" },
  { name: "Ayesha Khan", role: "Viewer", img: "https://i.pravatar.cc/100?img=8" },
  { name: "Fahad Malik", role: "Admin", img: "https://i.pravatar.cc/100?img=9" },
  { name: "Mariam Shah", role: "Editor", img: "https://i.pravatar.cc/100?img=10" },
  { name: "Omar Farooq", role: "User", img: "https://i.pravatar.cc/100?img=11" },
  { name: "Sania Iqbal", role: "Viewer", img: "https://i.pravatar.cc/100?img=12" },
  { name: "Ahmad Rafi", role: "Admin", img: "https://i.pravatar.cc/100?img=13" },
  { name: "Nida Tariq", role: "Editor", img: "https://i.pravatar.cc/100?img=14" },
  { name: "Usman Sheikh", role: "User", img: "https://i.pravatar.cc/100?img=15" },
  { name: "Alina Qureshi", role: "Viewer", img: "https://i.pravatar.cc/100?img=16" },
  { name: "Zubair Khan", role: "Admin", img: "https://i.pravatar.cc/100?img=17" },
  { name: "Huma Farah", role: "Editor", img: "https://i.pravatar.cc/100?img=18" },
  { name: "Saad Aslam", role: "User", img: "https://i.pravatar.cc/100?img=19" },
  { name: "Rabia Saeed", role: "Viewer", img: "https://i.pravatar.cc/100?img=20" },
  { name: "Shahid Iqbal", role: "Admin", img: "https://i.pravatar.cc/100?img=21" },
  { name: "Komal Riaz", role: "Editor", img: "https://i.pravatar.cc/100?img=22" },
];

export default function User() {
  const [data] = useState(mockUsers);

  return (
<<<<<<< HEAD
    <section
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Heading and paragraph at the top */}
      <h2 style={{ margin: 0, fontSize: "28px", color: "#2849b8", textAlign: "center" }}>
        Users
      </h2>
      <p style={{ margin: "5px 0 20px 0", fontSize: "16px", color: "#555", textAlign: "center" }}>
        Registered users list:
      </p>

      {/* Users list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong style={{ fontSize: "16px", color: "#333" }}>{item.name}</strong>
              <span style={{ fontSize: "14px", color: "#555" }}>{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 480px) {
          h2 { font-size: 24px !important; }
          p { font-size: 14px !important; }
          div[style*="flex-wrap: wrap"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          img {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
=======
    <section className="page container">
    
    

      <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "5px",       // spacing between heading & paragraph
    marginBottom: "20px"
  }}
>
  <h2 style={{ margin: 0, fontSize: "28px", color: "#2849b8" }}>
      Users
    
  </h2>
  <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
  Registered users list:
  </p>
</div>


      <div className="list" style={{ marginTop: "10px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="list-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              gap: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <strong>{item.name}</strong>
            </div>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
    </section>
  );
}
