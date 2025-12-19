import React, { useState } from "react";

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
    </section>
  );
}
