import React, { useState } from "react";

const citiesData = [
  { city: "Karachi", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Lahore", country: "Pakistan", slots: ["7:00 AM", "12:00 PM", "5:00 PM", "10:00 PM"] },
  { city: "Islamabad", country: "Pakistan", slots: ["6:30 AM", "1:30 PM", "6:30 PM", "9:30 PM"] },
  { city: "Peshawar", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "5:30 PM", "9:00 PM"] },
  { city: "Quetta", country: "Pakistan", slots: ["6:15 AM", "1:15 PM", "6:15 PM", "9:15 PM"] },
  { city: "Multan", country: "Pakistan", slots: ["6:00 AM", "12:00 PM", "5:30 PM", "9:00 PM"] },
  { city: "Faisalabad", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:00 PM", "9:00 PM"] },
  { city: "Sialkot", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:30 PM"] },
  { city: "Rawalpindi", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "5:30 PM", "9:00 PM"] },
  { city: "Abbottabad", country: "Pakistan", slots: ["6:30 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Hyderabad", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:30 PM", "9:30 PM"] },
  { city: "Sukkur", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "5:30 PM", "9:00 PM"] },
  { city: "Gwadar", country: "Pakistan", slots: ["6:30 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Skardu", country: "Pakistan", slots: ["5:30 AM", "12:30 PM", "5:30 PM", "8:30 PM"] },
  { city: "Hunza", country: "Pakistan", slots: ["5:30 AM", "12:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Murree", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:30 PM", "9:30 PM"] },
  { city: "Swat", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Chitral", country: "Pakistan", slots: ["5:30 AM", "12:00 PM", "5:30 PM", "8:30 PM"] },
  { city: "Neelum Valley", country: "Pakistan", slots: ["6:00 AM", "12:30 PM", "6:00 PM", "9:00 PM"] },
  { city: "Ranikot", country: "Pakistan", slots: ["6:00 AM", "1:00 PM", "6:00 PM", "9:00 PM"] },
  { city: "Ziarat", country: "Pakistan", slots: ["6:30 AM", "12:30 PM", "6:00 PM", "9:30 PM"] },
  { city: "Kumrat Valley", country: "Pakistan", slots: ["5:30 AM", "12:00 PM", "6:00 PM", "8:30 PM"] },
];

export default function CitiesWithTime() {
  const [data] = useState(citiesData);

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
      {/* Heading + paragraph */}
      <h2 style={{ margin: 0, fontSize: "28px", color: "#2849b8", textAlign: "center" }}>
        Cities & Available Time Slots
      </h2>
      <p style={{ margin: "5px 0 20px 0", fontSize: "16px", color: "#555", textAlign: "center" }}>
        Explore cities with their available time slots:
      </p>

      {/* Cities list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "12px 15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              backgroundColor: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <strong style={{ fontSize: "16px", color: "#333" }}>
              {item.city}, {item.country}
            </strong>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
    Cities & Available Time Slots
  </h2>
  <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
    Explore cities with their available time slots:
  </p>
</div>

      <div className="list" style={{ marginTop: "20px" }}>
        {data.map((item, index) => (
          <div
            key={index}
            className="list-item"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              borderBottom: "1px solid #ddd",
              marginBottom: "5px",
            }}
          >
            <strong style={{ fontSize: "16px" }}>{item.city}, {item.country}</strong>
            <div style={{ marginTop: "5px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
              {item.slots.map((slot, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#3e8ffaff",
<<<<<<< HEAD
                    color: "#fff",
=======
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD

      {/* Responsive */}
      <style>{`
        @media (max-width: 480px) {
          h2 { font-size: 24px !important; }
          p { font-size: 14px !important; }
          div[style*="flex-wrap: wrap"] span {
            flex: 1 1 45%; /* wrap two per line on mobile */
            text-align: center;
          }
        }
      `}</style>
=======
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
    </section>
  );
}
