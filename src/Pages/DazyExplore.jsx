import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { QrcodeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import MapVector from "../Assets/mapvector.jpg"; // adjust path if needed


const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [bookedPackageId, setBookedPackageId] = useState(null);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  // ************ DATA ************
  const buildings = [
      { id: 1, name: 'Sky Residency', price: 'PKR 13,500/night', img: 'https://plus.unsplash.com/premium_photo-1663061414669-bb34bcd3ff2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D' },
  { id: 2, name: 'Cityview Apartments', price: 'PKR 18,000/night', img: 'https://images.unsplash.com/photo-1597081301980-87294f4ce881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGhvdGVscyUyMGFuZCUyMHJlc29ydHN8ZW58MHx8MHx8fDA%3D' },
  { id: 3, name: 'Budget Inn', price: 'PKR 7,500/night', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60' },
  { id: 4, name: 'Pearl Continental Suites', price: 'PKR 24,000/night', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
  { id: 5, name: 'Comfort Lodge', price: 'PKR 10,500/night', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60' },
  { id: 6, name: 'Hillside Resort', price: 'PKR 22,500/night', img: 'https://plus.unsplash.com/premium_photo-1663089259312-55752271767e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww' },
  { id: 7, name: 'Marina View Hotel', price: 'PKR 21,000/night', img: 'https://images.unsplash.com/photo-1636847782599-d4b10f4811d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww' },
  { id: 8, name: 'Green Valley Guest House', price: 'PKR 9,000/night', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60' },
  { id: 9, name: 'Urban Stay Apartments', price: 'PKR 16,500/night', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60' },
  { id: 10, name: 'Royal Inn Hotel', price: 'PKR 19,500/night', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60' },
  { id: 11, name: 'Mountain Peak Resort', price: 'PKR 28,500/night', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60' },
  { id: 12, name: 'Sunset Apartments', price: 'PKR 12,000/night', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60' },
  { id: 13, name: 'Blue Lagoon Suites', price: 'PKR 25,500/night', img: 'https://images.unsplash.com/photo-1545065053-56b6948e260a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww' },
  { id: 14, name: 'Cozy Corner Hotel', price: 'PKR 8,400/night', img: 'https://plus.unsplash.com/premium_photo-1683649964220-0fa832aa7068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww' },
  { id: 15, name: 'City Elite Residency', price: 'PKR 15,000/night', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60' },
  { id: 16, name: 'Galaxy Tower Suites', price: 'PKR 27,000/night', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60' },
  { id: 17, name: 'Serene Guest Palace', price: 'PKR 9,900/night', img: 'https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60' },
  { id: 18, name: 'Palm View Hotel', price: 'PKR 17,400/night', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
  { id: 19, name: 'Crystal Heights Apartments', price: 'PKR 21,600/night', img: 'https://images.unsplash.com/photo-1616520741419-185f30fb5347?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxob3RlbHMlMjBhbmQlMjByZXNvcnRzfGVufDB8fDB8fHww' },
  { id: 20, name: 'Luxury Central Hotel', price: 'PKR 29,700/night', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60' }
  ];

  const packages = [
   { id: 1, title: 'Hunza Valley Tour', days: '5 days', price: '₨63,000', img: 'https://media.istockphoto.com/id/1319188329/photo/woman-looking-at-mountains-of-northern-pakistan-from-window-in-the-van.webp?a=1&b=1&s=612x612&w=0&k=20&c=8iz9ahbWswNmFGLKp81zQwMVfJ0aid1Pc3jUfI1640g=' },
  { id: 2, title: 'Skardu Adventure', days: '6 days', price: '₨77,000', img: 'https://plus.unsplash.com/premium_photo-1697730198247-ed3c72ecf932?w=500&auto=format&fit=crop&q=60' },
  { id: 3, title: 'Naran Kaghan Trip', days: '4 days', price: '₨52,500', img: 'https://images.unsplash.com/photo-1736230132520-79086a2ef216?w=500&auto=format&fit=crop&q=60' },
  { id: 4, title: 'Murree Hills Getaway', days: '3 days', price: '₨31,500', img: 'https://images.unsplash.com/photo-1695197460386-74242dc9c0f7?w=500&auto=format&fit=crop&q=60' },
  { id: 5, title: 'Neelum Valley Escape', days: '4 days', price: '₨56,000', img: 'https://images.unsplash.com/photo-1722599556316-7873764fe301?w=500&auto=format&fit=crop&q=60' },
  { id: 6, title: 'Swat Malam Jabba Tour', days: '3 days', price: '₨45,500', img: 'https://images.unsplash.com/photo-1672915619138-108a218cfcd2?w=500&auto=format&fit=crop&q=60' },
  { id: 7, title: 'Fairy Meadows Trek', days: '5 days', price: '₨87,500', img: 'https://images.unsplash.com/photo-1736230132473-8a14f157edc5?w=500&auto=format&fit=crop&q=60' },
  { id: 8, title: 'Gorakh Hill Camping', days: '2 days', price: '₨24,500', img: 'https://images.unsplash.com/photo-1663076255593-f9c0980df45a?w=500&auto=format&fit=crop&q=60' },
  { id: 9, title: 'Islamabad City Tour', days: '2 days', price: '₨28,000', img: 'https://images.unsplash.com/photo-1608020932658-d0e19a69580b?w=500&auto=format&fit=crop&q=60' },
  { id: 10, title: 'Lahore Heritage Trip', days: '2 days', price: '₨22,750', img: 'https://images.unsplash.com/photo-1758714144057-aae0194dfde5?w=500&auto=format&fit=crop&q=60' },
  { id: 11, title: 'Karachi Sea View Tour', days: '1 day', price: '₨14,000', img: 'https://images.unsplash.com/photo-1696588654683-5d24a6b3872a?w=500&auto=format&fit=crop&q=60' },
  { id: 12, title: 'Gwadar Beach Trip', days: '3 days', price: '₨49,000', img: 'https://media.istockphoto.com/id/1185084209/photo/muine.webp?a=1&s=612x612&w=0&k=20&c=9oxgjE6JxZ99tb5I042YY1q10veYWvS8JUk8Bsm_DFk=' },
  { id: 13, title: 'Ranikot Fort Adventure', days: '1 day', price: '₨17,500', img: 'https://images.unsplash.com/photo-1668947277383-2bcc2d5fbe16?w=500&auto=format&fit=crop&q=60' },
  { id: 14, title: 'Cholistan Desert Safari', days: '2 days', price: '₨38,500', img: 'https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=500&auto=format&fit=crop&q=60' },
  { id: 15, title: 'Ziarat Trip', days: '2 days', price: '₨33,250', img: 'https://images.unsplash.com/photo-1707548546525-30c8a32304c5?w=500&auto=format&fit=crop&q=60' },
  { id: 16, title: 'Kumrat Valley Tour', days: '4 days', price: '₨59,500', img: 'https://images.unsplash.com/photo-1723577434680-5f060c6a7e00?w=500&auto=format&fit=crop&q=60' },
  { id: 17, title: 'Khaplu Palace Visit', days: '3 days', price: '₨52,500', img: 'https://images.unsplash.com/photo-1658378078665-093bc55aaa55?w=500&auto=format&fit=crop&q=60' },
  { id: 18, title: 'K2 Base Camp Trek', days: '12 days', price: '₨210,000', img: 'https://plus.unsplash.com/premium_photo-1723485618246-afd5f5830ea1?w=500&auto=format&fit=crop&q=60' },
  { id: 19, title: 'Shogran Siri Paye Tour', days: '3 days', price: '₨45,500', img: 'https://images.unsplash.com/photo-1728411963176-63aef3e865a6?w=500&auto=format&fit=crop&q=60' },
  { id: 20, title: 'Hingol National Park', days: '2 days', price: '₨42,000', img: 'https://images.unsplash.com/photo-1763102917342-15ba3b61a976?w=500&auto=format&fit=crop&q=60' },
  { id: 21, title: 'Astola Island Trip', days: '3 days', price: '₨56,000', img: 'https://media.istockphoto.com/id/981494284/photo/boat-sailing-in-sea-against-sky.webp?a=1&s=612x612&w=0&k=20&c=w_NangKR-bn8IE9IIC0XZZnQ6-QWn8KMDfAZQY005zk=' },
  { id: 22, title: 'Kalash Valley Festival', days: '4 days', price: '₨63,000', img: 'https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=500&auto=format&fit=crop&q=60' },
  ];

  const nearby = [
   { id: 1, name: 'Airport Guesthouse A', dist: '0.5 km', price: 30 },
  { id: 2, name: 'Transit Inn', dist: '1.2 km', price: 35 },
  { id: 3, name: 'Budget Pods', dist: '0.8 km', price: 20 },
  { id: 4, name: 'Runway View Hotel', dist: '0.4 km', price: 40 },
  { id: 5, name: 'Aviation Lodge', dist: '1.0 km', price: 28 },
  { id: 6, name: 'Airport Comfort Suites', dist: '1.5 km', price: 32 },
  { id: 7, name: 'Skyline Guest Rooms', dist: '0.6 km', price: 26 },
  { id: 8, name: 'Traveller’s Mini Hotel', dist: '1.8 km', price: 22 },
  { id: 9, name: 'Quick Stay Apartments', dist: '0.9 km', price: 34 },
  { id: 10, name: 'Metro Airport Hotel', dist: '1.3 km', price: 38 },
  { id: 11, name: 'Flight View Inn', dist: '0.7 km', price: 25 },
  { id: 12, name: 'Express Lodge', dist: '1.1 km', price: 27 },
  { id: 13, name: 'Airport Rest House', dist: '0.3 km', price: 33 },
  { id: 14, name: 'Sky Stay Pakistan', dist: '1.6 km', price: 29 },
  { id: 15, name: 'Comfort Transit Rooms', dist: '1.4 km', price: 31 },
  { id: 16, name: 'Cloud Nine Residency', dist: '0.6 km', price: 36 },
  { id: 17, name: 'Budget Traveller Inn', dist: '2.0 km', price: 19 },
  { id: 18, name: 'City Airport Guest Home', dist: '0.8 km', price: 28 },
  { id: 19, name: 'Flyers Guesthouse', dist: '1.7 km', price: 24 },
  { id: 20, name: 'Airport Plaza Suites', dist: '1.9 km', price: 37 },
  ];

  const weatherIcons = { Sunny: "☀️", Cloudy: "☁️", Rainy: "🌧️", Windy: "💨", Hot: "🌡️", Humid: "💧", "Partly Cloudy": "⛅", Cool: "❄️" };
  const mockCities = [
   { city: 'Karachi', weather: 'Sunny', temp: '31°C' },
  { city: 'Lahore', weather: 'Cloudy', temp: '28°C' },
  { city: 'Islamabad', weather: 'Rainy', temp: '24°C' },
  { city: 'Rawalpindi', weather: 'Partly Cloudy', temp: '25°C' },
  { city: 'Faisalabad', weather: 'Sunny', temp: '30°C' },
  { city: 'Multan', weather: 'Hot', temp: '34°C' },
  { city: 'Hyderabad', weather: 'Humid', temp: '33°C' },
  { city: 'Peshawar', weather: 'Windy', temp: '26°C' },
  { city: 'Quetta', weather: 'Cool', temp: '22°C' },
  { city: 'Sukkur', weather: 'Sunny', temp: '32°C' },
  { city: 'Sialkot', weather: 'Cloudy', temp: '27°C' },
  { city: 'Gujranwala', weather: 'Sunny', temp: '29°C' },
  { city: 'Bahawalpur', weather: 'Hot', temp: '35°C' },
  { city: 'Abbottabad', weather: 'Rainy', temp: '23°C' },
  { city: 'Mardan', weather: 'Windy', temp: '27°C' },
  { city: 'Mirpur', weather: 'Sunny', temp: '30°C' },
  { city: 'Okara', weather: 'Partly Cloudy', temp: '28°C' },
  { city: 'Larkana', weather: 'Hot', temp: '33°C' },
  { city: 'Nawabshah', weather: 'Sunny', temp: '32°C' },
  { city: 'Muzaffarabad', weather: 'Cool', temp: '24°C' },
  ];

  const cards = [
    { title: "Weather", description: "Check current weather at your destination.", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60", onClick: () => setActiveTab("weather") },
    { title: "Hotels and Stay", description: "Browse stay options and buildings with prices.", image: "https://images.unsplash.com/photo-1636847782599-d4b10f4811d1?w=500&auto=format&fit=crop&q=60", onClick: () => setActiveTab("building") },
    { title: "Nearby", description: "Find guesthouses and stays close to the airport.", image: "https://images.unsplash.com/photo-1746431564860-4bad7d9a756e?w=500&auto=format&fit=crop&q=60", onClick: () => setActiveTab("nearby") },
    { title: "Travel and Tour", description: "Explore travel packages, trips and nature tours.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60", onClick: () => setActiveTab("nature") },
  ];

  // ************ HANDLERS ************
  const handleBooking = (id) => setBookedPackageId(id);
  const handleViewDetails = (building) => { setSelectedBuilding(building); setActiveTab("buildingDetail"); };
  const handleBack = () => setActiveTab("building");
  const onFinish = async (values) => {
    await fetch("https://formspree.io/f/yourFormID", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    alert("Form Submitted Successfully!");
  };

  // ************ RENDER FUNCTIONS ************
  const renderHomeSection = () => (
    <section style={{ textAlign: "center", margin: "30px 0" }}>
      <h2>Welcome — Choose a service</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {cards.map((c) => (
          <div key={c.title} onClick={c.onClick} style={{ cursor: "pointer", width: "250px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <div style={{ backgroundImage: `url(${c.image})`, height: "200px", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderBuilding = () => (
    <section style={{ textAlign: "center", margin: "30px 0" }}>
      <h2>Hotels and Stays</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {buildings.map((b) => (
          <div key={b.id} style={{ width: "250px", border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ backgroundImage: `url(${b.img})`, height: "180px", backgroundSize: "cover", backgroundPosition: "center" }} />
            <div style={{ padding: "10px" }}>
              <h3>{b.name}</h3>
              <p style={{ fontWeight: "500" }}>PKR {b.price.toLocaleString()}/night</p>
              <button onClick={() => handleViewDetails(b)} style={{ padding: "8px 16px", border: "none", background: "#007bff", color: "#fff", borderRadius: "4px", cursor: "pointer" }}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderBuildingDetail = () => {
    if (!selectedBuilding) return null;
    const b = selectedBuilding;
    return (
      <div style={{ maxWidth: "800px", margin: "50px auto", textAlign: "center" }}>
        <button onClick={handleBack} style={{ marginBottom: "20px", padding: "8px 16px", cursor: "pointer", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>⬅ Back</button>
        <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <div style={{ backgroundImage: `url(${b.img})`, height: "400px", backgroundSize: "cover", backgroundPosition: "center" }} />
          <h2>{b.name}</h2>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>PKR {b.price.toLocaleString()}/night</p>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>Enjoy your stay at {b.name}! Comfortable accommodations, beautiful surroundings, and top-notch amenities.</p>
        </div>
      </div>
    );
  };

  const renderWeather = () => (
    <section style={{ textAlign: "center", margin: "30px 0" }}>
      <h2>Weather</h2>
      <p>Select a city to see current conditions</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
        {mockCities.map((c) => (
          <div key={c.city} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", minWidth: "150px" }}>
            <strong>{c.city}</strong>
            <div style={{ fontSize: "20px" }}>{weatherIcons[c.weather]}</div>
            <small>{c.weather}</small>
            <div>{c.temp}</div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderNature = () => (
    <section style={{ textAlign: "center", margin: "30px 0" }}>
      <h2>Nature & Travel Packages</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {packages.map((p) => {
          const isBooked = bookedPackageId === p.id;
          return (
            <div key={p.id} style={{ width: "250px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", textAlign: "center", boxShadow: isBooked ? "0 0 15px green" : "0 4px 6px rgba(0,0,0,0.1)", background: "#fff" }}>
              <div style={{ backgroundImage: `url(${p.img})`, height: "150px", backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ padding: "10px" }}>
                <h3>{p.title}</h3>
                <div>{p.days}</div>
                <div>₨ {p.price.toLocaleString()}</div>
                {isBooked ? <div style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}>✅ Tour Booked</div> :
                  <button onClick={() => handleBooking(p.id)} style={{ marginTop: "10px", padding: "8px 12px", cursor: "pointer" }}>Book Now</button>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  const renderNearby = () => {
    const usdToPkr = 300;
    return (
      <section style={{ textAlign: "center", margin: "30px 0" }}>
        <h2>Nearby Stays (close to airport)</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", marginTop: "20px" }}>
          {nearby.map((n) => (
            <div key={n.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "300px", padding: "10px", borderRadius: "6px", background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
              <div>
                <strong>{n.name}</strong>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#888" }}><FaMapMarkerAlt color="#e74c3c" /> {n.dist} away</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "4px", fontWeight: "500" }}>
                <FaMoneyBillWave color="#27ae60" /> PKR {(n.price * usdToPkr).toLocaleString()}/night
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const sections = {
    home: renderHomeSection,
    weather: renderWeather,
    building: renderBuilding,
    buildingDetail: renderBuildingDetail,
    nearby: renderNearby,
    nature: renderNature,
  };

  return (
    <>
     
   
    <nav className="nav">
      <div className="logo">DezyFlight ✈</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/package">Package</Link>
        </li>
        <li>
          <Link to="/flightstatus">Flight Status</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#8a8a8aff"
            >
              <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
    {/* ******NAVBAR STYLING****** */}
    <style>
        {`
          .nav {
            padding: 15px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #ffffff;
            color: #1C2FFF;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #1C2FFF;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: 25px;
            align-items: center;
          }

          .nav-links li a {
            color: #1C2FFF;
            text-decoration: none;
            font-size: 18px;
            transition: 0.2s ease;
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .nav-links li a:hover {
            color: #ff00ff;
          }

          .menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 28px;
            color: #1C2FFF;
            cursor: pointer;
            padding: 5px;
          }

          @media (max-width: 768px) {
            .nav-links { display: none; }
            .menu-btn { display: block; }
          }
        `}
      </style>
      {/* ********MAIN SECTION***** */}
      <div className="container">
            <div className="main-container">
                <div className="left">
                    <h1 className="heading">Where Do You <br /> Want To Go</h1>
                    <p className="description">
                        Let’s get you there safely and quickly, with a smooth experience that makes every journey feel effortless.                     </p>
                </div>

                {/* <div className="right">
                    <img src="https://raw.githubusercontent.com/amna1234567890-ops/Map-Page/6da9939062d865ba12047788e98736693b0cb548/src/Assets/MainImg.png" alt="Main Image" className="main-image" />
                </div> */}
                <div className="right">
  <img src={MapVector} alt="Main Image" className="main-image" />
</div>

            </div>
        </div>
         
        {/* ********MAIN STYLING******** */}
        <style>
        {`
          .main-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 1000px;
            padding: 60px 0;
            margin: 0 auto;
            text-align: left;
          }

          .left {
            flex: 1;
            text-align: left;
          }

          .heading {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: left;
          }

          .description {
            font-size: 18px;
            color: #444;
            line-height: 1.6;
            max-width: 450px;
            text-align: left;
          }

          .right {
            flex: 1;
            display: flex;
            justify-content: center;
          }

          .main-image {
            width: 100%;
            max-width: 450px;
            border-radius: 10px;
            object-fit: cover;
            display: block;
          }

          /* Responsive Fixes */
          @media (max-width: 1040px) {
            .main-container {
              width: 90%;
              max-width: 1000px;
              padding: 60px 20px;
            }
          }

          @media (max-width: 768px) {
            .main-container {
              flex-direction: column;
              gap: 40px;
              width: 90%;
              padding: 40px 20px;
            }

            .left, .right {
              width: 100%;
              text-align: left;
            }

            .heading {
              font-size: 36px;
            }

            .description {
              max-width: 100%;
            }

            .main-image {
              max-width: 400px;
              margin: 0 auto;
              display: block;
            }
          }

          @media (max-width: 480px) {
            .main-container {
              width: 95%;
              padding: 30px 15px;
            }

            .heading {
              font-size: 28px;
            }

            .description {
              font-size: 16px;
            }

            .main-image {
              max-width: 300px;
            }
          }
        `}
        </style>
        {/* *******BOTTOMBAR SECTION******* */}
        <div className="container">
      <div className="button-bar">
        <Link to="/" className="item airport">Airport Map</Link>
        <Link to="/ticket" className="item">Ticket Booking</Link>
        <Link to="/hotel" className="item">Hotel Reservation</Link>
        <Link to="/flight" className="item">Flight Reservation</Link>
      </div>
    </div>
    
        {/* *******BOTTOMBAR STYLING******* */}

        <style>
        {`
          .container {
            display: flex;
            justify-content: center;
          }

          .button-bar {
            display: flex;
            justify-content: center;
            width: 1000px;
            align-items: center;
            background: #e8f3ff;
            border-radius: 10px;
            gap: 10px;
            padding: 10px;
            box-sizing: border-box;
          }

          .item {
            flex: 1;
            text-align: center;
            padding: 15px 0;
            background: transparent;
            font-size: 16px;
            font-weight: 500;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.2s;
            min-width: 0;
            text-decoration: none;
            color: #002AFF;
          }

          .item:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .airport {
            color: #ffffff;
            font-weight: 600;
            background-color: #002AFF;
          }

          /* Responsive */
          @media (max-width: 1040px) {
            .button-bar {
              width: 95%;
              max-width: 1000px;
            }
          }

          @media (max-width: 768px) {
            .button-bar {
              width: 95%;
              flex-wrap: wrap;
            }

            .item {
              flex: 1 0 calc(50% - 10px);
              min-width: 150px;
              padding: 12px 0;
            }
          }

          @media (max-width: 480px) {
            .button-bar {
              width: 95%;
              flex-direction: column;
              gap: 8px;
            }

            .item {
              width: 100%;
              padding: 12px 0;
            }
          }
        `}
      </style>
     {/* BOTTOM BAR WITH PAGE LINKS */}
<div style={{
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  padding: "12px",
  background: "#f0f4ff",
  borderRadius: "20px",
  margin: "20px auto",
  maxWidth: "1000px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
}}>
  {["home", "weather", "building", "nearby", "nature"].map((tab) => {
    const labels = {
      home: "Home",
      weather: "Weather",
      building: "Hotels",
      nearby: "Nearby",
      nature: "Tour & Travel"
    };
    const isActive = activeTab === tab;
    return (
      <div
        key={tab}
        onClick={() => setActiveTab(tab)}
        style={{
          flex: 1,
          textAlign: "center",
          padding: "10px 0",
          background: isActive ? "#3756f1ff" : "#fff",
          color: isActive ? "#fff" : "#2548f7ff",
          borderRadius: "50px",
          cursor: "pointer",
          fontWeight: "500",
          transition: "all 0.3s",
          boxShadow: isActive ? "0 4px 8px rgba(124, 146, 253, 0.3)" : "none"
        }}
        onMouseEnter={(e) => {
          if (!isActive) e.currentTarget.style.background = "#e0e7ff";
        }}
        onMouseLeave={(e) => {
          if (!isActive) e.currentTarget.style.background = "#fff";
        }}
      >
        {labels[tab]}
      </div>
    );
  })}
</div>


      {/* ACTIVE TAB SECTION */}
      {sections[activeTab] && sections[activeTab]()}

      {/* FOOTER + BOOKING FORM */}
      
<div className="footer-container">
  <div className="left-section">
    <h2>Book Popular Flight Ticket</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
      eiusmod tempor incididunt ut labore et dolore.
    </p>

    <img
      src="https://github.com/ayeshhdeveloper55/main-and-footerr/blob/main/globe.png?raw=true"
      alt="flight world"
      className="flight-image"
    />
  </div>

  <div className="right-section">
    <div className="form-box">
      <h3 style={{ color: "black", fontWeight: "900" }}>
        Book Your Flight Now
      </h3>

      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="Enter Your Name" />
        </Form.Item>

        <Form.Item name="contact" rules={[{ required: true }]}>
          <Input placeholder="Enter Your Contact" />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="book-btn">
          Book
        </Button>

        <div className="qr-area">
          <QrcodeOutlined />
        </div>
      </Form>
    </div>
  </div>
</div>


        {/* *********FOOTER STYLING**** */}
        <style>
{`
.footer-container {
  display: flex;
  justify-content: center;
  margin: 40px auto;
  align-items: center;
  width: 1000px;
  background: #4b74ff;
  padding: 40px;
  border-radius: 10px;
  color: white;
}

.left-section {
  width: 50%;
}

.left-section h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.left-section p {
  width: 70%;
}

.flight-image {
  width: 200px;
  margin-top: 20px;
}

.right-section {
  width: 35%;
  display: flex;
  justify-content: center;
}

.form-box {
  background: rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 12px;
  width: 100%;
  text-align: center;
}

.form-box h3 {
  margin-bottom: 15px;
}

.book-btn {
  width: 100%;
  font-weight: bold;
}

.qr-area {
  margin: 15px 0;
}

.qr-area svg {
  font-size: 80px;
}

/* Responsive */
@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    padding: 30px;
    width: 95%;
  }

  .left-section,
  .right-section {
    width: 100%;
  }

  .left-section p {
    width: 100%;
  }

  .flight-image {
    width: 150px;
    margin: 20px auto;
  }

  .form-box {
    width: 90%;
    margin-top: 20px;
  }
}

@media (max-width: 500px) {
  .footer-container {
    padding: 20px;
  }

  .left-section h2 {
    font-size: 22px;
  }

  .flight-image {
    width: 120px;
  }

  .form-box {
    padding: 18px;
  }

  .qr-area svg {
    font-size: 60px;
  }
}
`}
</style>

    </>
  );
};

export default Navbar;
