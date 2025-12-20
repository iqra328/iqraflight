import React, { useState } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaWind, FaSmog, FaCloudSun, FaTemperatureHigh } from 'react-icons/fa';

const mockCities = [
<<<<<<< HEAD
  { city: 'Karachi', weather: 'Sunny', temp: '31°C' },
  { city: 'Lahore', weather: 'Cloudy', temp: '28°C' }, 
  { city: 'Islamabad', weather: 'Rainy', temp: '24°C' },
  { city: 'Rawalpindi', weather: 'Partly Cloudy', temp: '25°C' },
  { city: 'Faisalabad', weather: 'Sunny', temp: '30°C' },
  { city: 'Multan', weather: 'Hot', temp: '34°C' },
  { city: 'Hyderabad', weather: 'Humid', temp: '33°C' },
  { city: 'Peshawar', weather: 'Windy', temp: '26°C' },
  { city: 'Quetta', weather: 'Cold', temp: '12°C' },
  { city: 'Sialkot', weather: 'Cloudy', temp: '27°C' },
  { city: 'Gujranwala', weather: 'Hazy', temp: '29°C' },
  { city: 'Sukkur', weather: 'Sunny', temp: '35°C' },
  { city: 'Bahawalpur', weather: 'Hot', temp: '33°C' },
  { city: 'Mardan', weather: 'Clear', temp: '23°C' },
  { city: 'Abbottabad', weather: 'Cold', temp: '14°C' },
  { city: 'Gilgit', weather: 'Snowy', temp: '5°C' },
  { city: 'Skardu', weather: 'Freezing', temp: '2°C' },
  { city: 'Mirpurkhas', weather: 'Humid', temp: '32°C' },
  { city: 'Larkana', weather: 'Hot', temp: '36°C' },
  { city: 'Gwadar', weather: 'Breezy', temp: '28°C' },
=======
 { city: 'Karachi', weather: 'Sunny', temp: '31°C' },
 { city: 'Lahore', weather: 'Cloudy', temp: '28°C' },
 { city: 'Islamabad', weather: 'Rainy', temp: '24°C' },
 { city: 'Rawalpindi', weather: 'Partly Cloudy', temp: '25°C' },
 { city: 'Faisalabad', weather: 'Sunny', temp: '30°C' },
 { city: 'Multan', weather: 'Hot', temp: '34°C' },
 { city: 'Hyderabad', weather: 'Humid', temp: '33°C' },
 { city: 'Peshawar', weather: 'Windy', temp: '26°C' },
 { city: 'Quetta', weather: 'Cold', temp: '12°C' },
 { city: 'Sialkot', weather: 'Cloudy', temp: '27°C' },
 { city: 'Gujranwala', weather: 'Hazy', temp: '29°C' },
 { city: 'Sukkur', weather: 'Sunny', temp: '35°C' },
 { city: 'Bahawalpur', weather: 'Hot', temp: '33°C' },
 { city: 'Mardan', weather: 'Clear', temp: '23°C' },
 { city: 'Abbottabad', weather: 'Cold', temp: '14°C' },
 { city: 'Gilgit', weather: 'Snowy', temp: '5°C' },
 { city: 'Skardu', weather: 'Freezing', temp: '2°C' },
 { city: 'Mirpurkhas', weather: 'Humid', temp: '32°C' },
 { city: 'Larkana', weather: 'Hot', temp: '36°C' },
 { city: 'Gwadar', weather: 'Breezy', temp: '28°C' },
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
];

export default function Weather() {
  const [cities] = useState(mockCities);

  const weatherIcons = {
    Sunny: <FaSun color="#f1c40f" />,
    Hot: <FaTemperatureHigh color="#e74c3c" />,
    Cloudy: <FaCloud color="#95a5a6" />,
    'Partly Cloudy': <FaCloudSun color="#f39c12" />,
    Rainy: <FaCloudRain color="#3498db" />,
    Snowy: <FaSnowflake color="#3498db" />,
    Freezing: <FaSnowflake color="#2980b9" />,
    Windy: <FaWind color="#7f8c8d" />,
    Hazy: <FaSmog color="#95a5a6" />,
    Humid: <FaCloud color="#16a085" />,
    Clear: <FaSun color="#f39c12" />,
    Cold: <FaTemperatureHigh color="#2980b9" />,
    Breezy: <FaWind color="#1abc9c" />,
  };

  return (
<<<<<<< HEAD
    <section
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      {/* Heading + paragraph */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '5px',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '28px', color: '#2849b8' }}>
          Weather
        </h2>
        <p style={{ margin: 0, fontSize: '16px', color: '#555' }}>
          Select a city to see current condition:
        </p>
      </div>

      {/* Cities list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {cities.map((c) => (
          <div
            key={c.city}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 15px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>{weatherIcons[c.weather]}</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '16px', color: '#333' }}>{c.city}</strong>
                <span style={{ fontSize: '14px', color: '#555' }}>{c.weather}</span>
              </div>
            </div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#2849b8' }}>
              {c.temp}
            </div>
          </div>
        ))}
      </div>

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 480px) {
          h2 { font-size: 24px !important; }
          p { font-size: 14px !important; }
          div[style*="flex-direction: row"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          div[style*="justify-content: space-between"] > div:last-child {
            margin-top: 8px;
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
    marginBottom: "20px",
  }}
>
  <h2 style={{ margin: 0, fontSize: "28px", color: "#2849b8" }}>
    Weather
  </h2>
  <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
    Select a city to see current condition:
  </p>
</div>


      <div className="list">
        {cities.map((c) => (
          <div className="list-item" key={c.city} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <strong>{c.city}</strong>
              <span className="muted">{weatherIcons[c.weather]}</span>
              <div className="muted">{c.weather}</div>
            </div>
            <div className="price">{c.temp}</div>
          </div>
        ))}
      </div>
>>>>>>> c7ea92548f5d486ebdb215e845318d288b52af66
    </section>
  );
}
