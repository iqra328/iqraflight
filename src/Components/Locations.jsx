<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66

const mockLocations = [
  { city: "Karachi", province: "Sindh", icon: "🏖️" },
  { city: "Lahore", province: "Punjab", icon: "🏰" },
  { city: "Islamabad", province: "Islamabad Capital Territory", icon: "🏙️" },
  { city: "Quetta", province: "Balochistan", icon: "⛰️" },
  { city: "Peshawar", province: "KPK", icon: "🏯" },
  { city: "Sukkur", province: "Sindh", icon: "🌉" },
  { city: "Faisalabad", province: "Punjab", icon: "🏭" },
  { city: "Multan", province: "Punjab", icon: "🕌" },
  { city: "Sialkot", province: "Punjab", icon: "⚽" },
<<<<<<< HEAD
];

export default function Locations() {
  return (
    <section style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ fontSize: "32px", color: "#2849b8", margin: 0 }}>Locations</h2>
        <p style={{ margin: "8px 0 0", color: "#555", fontSize: "16px" }}>
          Explore cities with their provinces
        </p>
      </div>

      {/* Grid cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {mockLocations.map((item, index) => (
          <div key={index} style={{
            background: "linear-gradient(135deg, #e0f0ff, #ffffff)",
            borderRadius: "15px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "default"
          }}>
            <div style={{
              fontSize: "36px",
              marginBottom: "15px",
              width: "70px",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#2849b8",
              color: "#fff",
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              {item.icon}
            </div>
            <strong style={{ display: "block", fontSize: "20px", color: "#333", marginBottom: "5px" }}>
              {item.city}
            </strong>
            <span style={{ fontSize: "14px", color: "#555" }}>{item.province}</span>
          </div>
        ))}
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 480px) {
          h2 { font-size: 26px !important; }
          p { font-size: 14px !important; }
          div[style*="padding: 20px"] { padding: 15px !important; }
          strong { font-size: 18px !important; }
          div[style*="font-size: 36px"] { font-size: 28px !important; width: 60px; height: 60px; }
        }

        div[style*="transition: transform"]:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>
=======
  { city: "Rawalpindi", province: "Punjab", icon: "🏙️" },
  { city: "Abbottabad", province: "KPK", icon: "⛰️" },
  { city: "Hyderabad", province: "Sindh", icon: "🏙️" },
  { city: "Gwadar", province: "Balochistan", icon: "🌊" },
  { city: "Skardu", province: "Gilgit-Baltistan", icon: "⛰️" },
  { city: "Hunza", province: "Gilgit-Baltistan", icon: "🏞️" },
  { city: "Murree", province: "Punjab", icon: "⛰️" },
  { city: "Swat", province: "KPK", icon: "🏞️" },
  { city: "Chitral", province: "KPK", icon: "⛰️" },
  { city: "Neelum Valley", province: "Azad Kashmir", icon: "🏞️" },
  { city: "Ranikot", province: "Sindh", icon: "🏯" },
  { city: "Ziarat", province: "Balochistan", icon: "⛰️" },
  { city: "Kumrat Valley", province: "KPK", icon: "🏞️" },
];

export default function Locations() {
  const [data] = useState(mockLocations);
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="page container"
      style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
          textAlign: "center",
          gap: "5px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "28px", color: "#2849b8" }}>
          Locations
        </h2>
        <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
          Select a city to see details:
        </p>
      </div>

      <div className="list">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(item.city)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 15px",
              borderRadius: "8px",
              borderBottom: "1px solid #ddd",
              cursor: "pointer",
              backgroundColor:
                selected === item.city ? "#e6f0ff" : "transparent",
              transition: "background 0.3s",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "20px",
              }}
            >
              <span>{item.icon}</span>
              <strong>{item.city}</strong>
            </div>
            <span style={{ fontSize: "14px", color: "#555" }}>
              {item.province}
            </span>
          </div>
        ))}
      </div>
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
    </section>
  );
}
