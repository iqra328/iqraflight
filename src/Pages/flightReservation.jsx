import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";


import { v4 as uuidv4 } from 'uuid';
import { Form, Input, Button } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";
import MapVector from "../Assets/mapvector.jpg"; // adjust path if needed
import { Link } from "react-router-dom";







function App() {
  // Hotels data
  const hotels = [
    { id:1, name:'Sky Residency', price:'PKR 13,500/night', img:'https://plus.unsplash.com/premium_photo-1663061414669-bb34bcd3ff2f?w=500&auto=format&fit=crop&q=60' },
    { id:2, name:'Cityview Apartments', price:'PKR 18,000/night', img:'https://images.unsplash.com/photo-1597081301980-87294f4ce881?w=500&auto=format&fit=crop&q=60' },
    { id:3, name:'Budget Inn', price:'PKR 7,500/night', img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60' },
    { id:4, name:'Pearl Continental Suites', price:'PKR 24,000/night', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
    { id:5, name:'Comfort Lodge', price:'PKR 10,500/night', img:'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60' },
    { id:6, name:'Hillside Resort', price:'PKR 22,500/night', img:'https://plus.unsplash.com/premium_photo-1663089259312-55752271767e?w=500&auto=format&fit=crop&q=60' },
    { id:7, name:'Marina View Hotel', price:'PKR 21,000/night', img:'https://images.unsplash.com/photo-1636847782599-d4b10f4811d1?w=500&auto=format&fit=crop&q=60' },
    { id:8, name:'Green Valley Guest House', price:'PKR 9,000/night', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60' },
    { id:9, name:'Urban Stay Apartments', price:'PKR 16,500/night', img:'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60' },
    { id:10, name:'Royal Inn Hotel', price:'PKR 19,500/night', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60' },
    { id:11, name:'Mountain Peak Resort', price:'PKR 28,500/night', img:'https://images.unsplash.com/photo-1522708323590-d24db6b0267?auto=format&fit=crop&w=800&q=60' },
    { id:12, name:'Sunset Apartments', price:'PKR 12,000/night', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60' },
    { id:13, name:'Blue Lagoon Suites', price:'PKR 25,500/night', img:'https://images.unsplash.com/photo-1545065053-56b6948e260a?w=500&auto=format&fit=crop&q=60' },
    { id:14, name:'Cozy Corner Hotel', price:'PKR 8,400/night', img:'https://plus.unsplash.com/premium_photo-1683649964220-0fa832aa7068?w=500&auto=format&fit=crop&q=60' },
    { id:15, name:'City Elite Residency', price:'PKR 15,000/night', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60' },
    { id:16, name:'Galaxy Tower Suites', price:'PKR 27,000/night', img:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60' },
    { id:17, name:'Serene Guest Palace', price:'PKR 9,900/night', img:'https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=800&q=60' },
    { id:18, name:'Palm View Hotel', price:'PKR 17,400/night', img:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
    { id:19, name:'Crystal Heights Apartments', price:'PKR 21,600/night', img:'https://images.unsplash.com/photo-1616520741419-185f30fb5347?w=500&auto=format&fit=crop&q=60' },
    { id:20, name:'Luxury Central Hotel', price:'PKR 29,700/night', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60' }
  ];

  // Passengers data
  const passengers = [
    { id: 1, name: 'Ayesha Khan', flight: 'PK-201', departure: '19:45', duration: '1h 30m', price: '$450.00', from: 'KHI', to: 'LHE' },
    { id: 2, name: 'Muhammad Ali', flight: 'PK-230', departure: '12:10', duration: '1h 31m', price: '$220.00', from: 'ISB', to: 'KHI' },
    { id: 3, name: 'Fatima Noor', flight: 'PK-312', departure: '09:20', duration: '2h 05m', price: '$310.00', from: 'LHE', to: 'ISB' },
    { id: 4, name: 'Hassan Raza', flight: 'PK-145', departure: '07:00', duration: '1h 15m', price: '$190.00', from: 'KHI', to: 'ISB' },
    { id: 5, name: 'Zainab Bano', flight: 'PK-178', departure: '21:10', duration: '2h 00m', price: '$275.00', from: 'ISB', to: 'LHE' },
    { id: 6, name: 'Bilal Ahmed', flight: 'PK-199', departure: '13:45', duration: '1h 50m', price: '$230.00', from: 'KHI', to: 'MCT' },
    { id: 7, name: 'Sana Javed', flight: 'PK-220', departure: '16:30', duration: '1h 10m', price: '$205.00', from: 'MCT', to: 'KHI' },
    { id: 8, name: 'Owais Khan', flight: 'PK-277', departure: '11:15', duration: '3h 00m', price: '$490.00', from: 'LHE', to: 'DXB' },
    { id: 9, name: 'Maryam Siddiqui', flight: 'PK-309', departure: '18:00', duration: '2h 20m', price: '$330.00', from: 'ISB', to: 'LHR' },
    { id: 10, name: 'Usman Shah', flight: 'PK-350', departure: '06:40', duration: '1h 05m', price: '$180.00', from: 'KHI', to: 'ISB' },
    { id: 11, name: 'Hira Malik', flight: 'PK-411', departure: '14:55', duration: '2h 15m', price: '$305.00', from: 'LHE', to: 'KHI' },
    { id: 12, name: 'Faraz Iqbal', flight: 'PK-422', departure: '10:10', duration: '1h 45m', price: '$240.00', from: 'ISB', to: 'MCT' },
    { id: 13, name: 'Sadia Nazir', flight: 'PK-433', departure: '17:20', duration: '1h 40m', price: '$260.00', from: 'KHI', to: 'LHE' },
    { id: 14, name: 'Adeel Khan', flight: 'PK-444', departure: '15:00', duration: '2h 05m', price: '$320.00', from: 'ISB', to: 'DXB' },
    { id: 15, name: 'Rida Qureshi', flight: 'PK-455', departure: '20:30', duration: '1h 55m', price: '$290.00', from: 'KHI', to: 'LHE' },
    { id: 16, name: 'Imran Nazir', flight: 'PK-466', departure: '08:25', duration: '1h 20m', price: '$210.00', from: 'ISB', to: 'KHI' },
    { id: 17, name: 'Nida Hassan', flight: 'PK-477', departure: '22:15', duration: '2h 30m', price: '$350.00', from: 'LHR', to: 'ISB' },
    { id: 18, name: 'Sarfraz Ahmed', flight: 'PK-488', departure: '05:50', duration: '1h 00m', price: '$160.00', from: 'KHI', to: 'MCT' },
    { id: 19, name: 'Zoya Khan', flight: 'PK-499', departure: '12:00', duration: '1h 25m', price: '$225.00', from: 'ISB', to: 'KHI' },
    { id: 20, name: 'Adil Javed', flight: 'PK-500', departure: '23:05', duration: '2h 10m', price: '$340.00', from: 'KHI', to: 'DXB' }
  ];

  // State for navigation and flight booking
  const [currentView, setCurrentView] = useState('home');
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingData, setBookingData] = useState(null);
  const [query, setQuery] = useState('');
  const [filterBy, setFilterBy] = useState('name');
  const [activeSection, setActiveSection] = useState('flight');

  // Form handler
  const onFinish = async (values) => {
    await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    alert("Form Submitted Successfully!");
  };

  // Filter passengers based on search
  const filteredPassengers = passengers.filter(p => {
    if (!query) return true;
    return String(p[filterBy]).toLowerCase().includes(query.toLowerCase());
  });

  // Toggle seat selection
  const toggleSeat = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(x => x !== seat) : [...prev, seat]
    );
  };

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    const code = uuidv4().slice(0, 8);
    const total = selectedPassenger ? 
      (parseFloat(selectedPassenger.price.replace('$', '')) * selectedSeats.length) : 0;
    
    setBookingData({
      passenger: selectedPassenger,
      seats: selectedSeats,
      code,
      total
    });
    setCurrentView('confirm');
  };

  // Handle navigation
  const goToHotels = () => {
    setCurrentView('hotels');
    setSelectedHotel(null);
    setActiveSection('hotel');
  };

  const goToHotelDetail = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentView('hotelDetail');
  };

  const goToSeatBooking = (passenger) => {
    setSelectedPassenger(passenger);
    setCurrentView('seatBooking');
  };

  const goBack = () => {
    if (currentView === 'hotelDetail') {
      setCurrentView('hotels');
    } else if (currentView === 'seatBooking') {
      setCurrentView('home');
    } else if (currentView === 'confirm') {
      setCurrentView('seatBooking');
    } else {
      setCurrentView('home');
    }
  };

  const goToHome = () => {
    setCurrentView('home');
    setSelectedPassenger(null);
    setSelectedSeats([]);
    setBookingData(null);
    setActiveSection('flight');
  };

  // Render different views for flight booking
  const renderFlightView = () => {
    switch(currentView) {
      case 'hotels':
        return (
          <section className="hotels">
            <h2>Hotels and Stays</h2>
            <div className="hotel-list">
              {hotels.map(b => (
                <div className="hotel-card" key={b.id}>
                  <div className="hotel-img" style={{backgroundImage: `url(${b.img})`}} />
                  <div className="hotel-body">
                    <h3>{b.name}</h3>
                    <p className="price">{b.price}</p>
                    <button className="btn" onClick={() => goToHotelDetail(b)}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'hotelDetail':
        if (!selectedHotel) {
          return <p style={{textAlign:'center', marginTop:50}}>Hotel not found</p>;
        }
        return (
          <div className="hotel-detail container">
            <button className="btn back" onClick={goBack}>⬅ Back</button>
            <div className="detail-img" style={{backgroundImage: `url(${selectedHotel.img})`}} />
            <h2>{selectedHotel.name}</h2>
            <p className="price">{selectedHotel.price}</p>
            <p>Enjoy your stay at {selectedHotel.name}. Comfortable rooms, great location and excellent service.</p>
          </div>
        );

      case 'seatBooking':
        if (!selectedPassenger) {
          return <p style={{textAlign:'center', marginTop:50}}>No passenger data</p>;
        }
        const seats = Array.from({length: 30}).map((_, i) => `A${i+1}`);
        const baseFare = parseFloat(selectedPassenger.price.replace('$', ''));
        
        return (
          <div className="seat-page container">
            <h2>Seat Layout — {selectedPassenger.name || 'Guest'}</h2>
            <div className="seat-grid">
              {seats.map(s => (
                <div 
                  key={s} 
                  className={`seat ${selectedSeats.includes(s) ? 'selected' : ''}`}
                  onClick={() => toggleSeat(s)}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="price-box">
              <p>Base Fare: ${baseFare.toFixed(2)}</p>
              <p>Selected Seats: {selectedSeats.length}</p>
              <p>Total: ${(baseFare * selectedSeats.length).toFixed(2)}</p>
              <button 
                className="btn" 
                onClick={handleConfirmBooking}
                disabled={selectedSeats.length === 0}
              >
                Booking confirm
              </button>
            </div>
          </div>
        );

      case 'confirm':
        if (!bookingData) {
          return <p style={{textAlign:'center', marginTop:50}}>No booking data</p>;
        }
        const { passenger, seats: confirmSeats, code, total } = bookingData;
        
        return (
          <div className="confirm container">
            <div className="confirm-box">
              <div className="check">✔</div>
              <h3>Booking Confirmed!</h3>
              <p>confirmation code: <strong>{code}</strong></p>
              <div className="info-row">Ticket: {confirmSeats.length} &nbsp; Member: 1 &nbsp; Confirm: 1</div>
              <div className="ticket-details">
                <p>Name: {passenger.name}</p>
                <p>Flight: {passenger.flight}</p>
                <p>Departure: {passenger.departure}</p>
                <p>Seats: {confirmSeats.join(', ')}</p>
                <p>Total Due: ${total.toFixed(2)}</p>
              </div>
              <div className="actions">
                <button className="btn" onClick={() => window.print()}>PRINT</button>
                <button className="btn outline" onClick={goToHome}>Back to Flights</button>
              </div>
            </div>
          </div>
        );

      default: // home
        return (
          <div className="home">
            <div className="search-card">
              <div className="search-top">
                <div className="filter-label">Filtered By</div>
                <input 
                  className="search-input" 
                  placeholder="Enter Your Name" 
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
                <select 
                  value={filterBy} 
                  onChange={e => setFilterBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="name">Name</option>
                  <option value="flight">Flight</option>
                  <option value="departure">Departure</option>
                </select>
              </div>
              <div className="table-headers">
                <div>Airline</div>
                <div>Flight</div>
                <div>Departure</div>
                <div>Duration</div>
                <div>Price</div>
              </div>
              <div className="list">
                {filteredPassengers.map(p => (
                  <div 
                    key={p.id} 
                    className="flight-row" 
                    onClick={() => setSelectedPassenger(p)}
                  >
                    <div className="airline">Entrates</div>
                    <div className="flight">{p.flight}</div>
                    <div className="departure">{p.departure}</div>
                    <div className="duration">{p.duration}</div>
                    <div className="price">{p.price}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {selectedPassenger && (
              <div className="selected-card">
                <div className="selected-left">
                  <h3>{selectedPassenger.name}</h3>
                  <p>Booking: {selectedPassenger.flight} — {selectedPassenger.departure}</p>
                  <p>From: {selectedPassenger.from} → To: {selectedPassenger.to}</p>
                  <p>Price: {selectedPassenger.price}</p>
                  <button 
                    className="btn" 
                    onClick={() => goToSeatBooking(selectedPassenger)}
                  >
                    Select Seat & Book
                  </button>
                </div>
                <div className="selected-right">
                  <div className="confirmation-box">
                    <div className="check">✔</div>
                    <h4>Booking Confirmed!</h4>
                    <p>confirmation code: <strong>a5m323</strong></p>
                    <div className="small-info">Ticket 1 | Member 1 | Confirm 1</div>
                    <button className="print-btn" onClick={() => window.print()}>
                      PRINT
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="app-root">
      <style>{`
        :root{
          --bg: #f1f6fb;
          --card: #ffffff;
          --accent: #4aa3ff;
          --muted: #9aa7b2;
        }
        *{box-sizing:border-box;font-family:Inter, system-ui, Arial, sans-serif}
        body{margin:0;background:linear-gradient(180deg,#f6fbff 0%,#eef6ff 100%);}
        
        /* Navbar Styles */
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

        /* Main Section Styles */
        .main-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 1000px;
          padding: 60px 0;
          margin: 0 auto;
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

        .main-image {
          width: 100%;
          max-width: 450px;
          border-radius: 10px;
          object-fit: cover;
          display: block;
        }

        /* Bottom Bar Styles */
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
          margin: 20px auto;
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
          border: none;
        }

        .item:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .item.active {
          color: #ffffff;
          font-weight: 600;
          background-color: #002AFF;
        }

        /* Flight Booking Styles */
        .container{padding:20px;max-width:980px;margin:20px auto;width:100%}
        .search-card{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 6px 18px rgba(13,38,76,0.08)}
        .search-top{display:flex;gap:12px;align-items:center;margin-bottom:12px}
        .filter-label{background:#eef6ff;padding:6px 10px;border-radius:8px;color:#4a91ff}
        .search-input{flex:1;padding:10px;border-radius:8px;border:1px solid #e6eefc}
        .filter-select{padding:10px;border-radius:8px;border:1px solid #e6eefc}
        .table-headers{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;padding:8px 12px;color:var(--muted);font-weight:600}
        .list{padding:8px 0}
        .flight-row{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;padding:12px;border-radius:8px;margin-bottom:10px;background:linear-gradient(90deg, rgba(255,255,255,0.6), rgba(243,247,255,0.6));cursor:pointer;border:1px solid #e9f2ff}
        .flight-row:hover{transform:translateY(-2px)}
        .selected-card{display:flex;gap:16px;margin-top:18px}
        .selected-left{flex:1;padding:12px}
        .selected-right{width:320px}
        .confirmation-box{background:linear-gradient(180deg,#fff 0%,#f8fffb 100%);padding:14px;border-radius:10px;box-shadow:0 6px 20px rgba(12,84,45,0.05);text-align:center}
        .check{background:#e9fff1;color:#0a9a4b;border-radius:8px;width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:8px}
        .print-btn{background:#16a34a;color:#fff;border:none;padding:10px 16px;border-radius:8px;margin-top:10px;cursor:pointer}
        .btn{background:var(--accent);color:#fff;border:none;padding:8px 14px;border-radius:8px;cursor:pointer}
        .btn.outline{background:transparent;border:1px solid var(--accent);color:var(--accent)}
        .btn.back{margin-bottom:20px;}
        .hotel-list{display:flex;flex-wrap:wrap;gap:18px}
        .hotel-card{width:240px;border-radius:12px;overflow:hidden;background:var(--card);box-shadow:0 8px 22px rgba(6,23,62,0.06)}
        .hotel-img{height:150px;background-size:cover;background-position:center}
        .hotel-body{padding:10px}
        .price{color:#4b5563;font-weight:600}
        .detail-img{height:300px;background-size:cover;background-position:center;border-radius:12px;margin-bottom:20px;}
        .seat-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;padding:12px;background:rgba(255,255,255,0.6);border-radius:8px}
        .seat{padding:10px;border-radius:6px;border:1px dashed #d6e6ff;text-align:center;cursor:pointer}
        .seat.selected{background:var(--accent);color:#fff;border:1px solid #2b95ff}
        .price-box{margin-top:12px;display:flex;flex-direction:column;gap:8px}
        .confirm-box{max-width:500px;margin:30px auto;padding:18px;background:var(--card);border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.06);text-align:center}
        .ticket-details{background:#f8fbff;padding:12px;border-radius:8px;margin-top:12px}

        /* Footer Styles */
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

        /* Responsive Styles */
        @media(max-width:1040px){
          .main-container, .button-bar, .footer-container{width:95%}
        }
        @media(max-width:768px){
          .main-container{flex-direction:column;gap:40px;width:90%;padding:40px 20px}
          .flight-row{grid-template-columns:1fr 1fr}
          .hotel-list{justify-content:center;width:100%}
          .button-bar{width:95%;flex-wrap:wrap}
          .item{flex:1 0 calc(50% - 10px);min-width:150px;padding:12px 0}
          .footer-container{flex-direction:column;text-align:center;padding:30px;width:95%}
          .left-section,.right-section{width:100%}
          .left-section p{width:100%}
          .flight-image{width:150px;margin:20px auto}
          .form-box{width:90%;margin-top:20px}
        }
        @media(max-width:480px){
          .main-container{width:95%;padding:30px 15px}
          .heading{font-size:28px}
          .description{font-size:16px}
          .main-image{max-width:300px}
          .button-bar{width:95%;flex-direction:column;gap:8px}
          .item{width:100%;padding:12px 0}
          .footer-container{padding:20px}
          .left-section h2{font-size:22px}
          .flight-image{width:120px}
          .form-box{padding:18px}
          .qr-area svg{font-size:60px}
        }
        @media print{
          body *{visibility:hidden}
          .confirm-box, .confirm-box *{visibility:visible}
          .confirm-box{position:absolute;left:0;top:0;width:100%}
        }













        
      `}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </style>
    
      <Navbar />
      

      {/* Main Section */}
      <div className="main-container">
        <div className="left">
          <h1 className="heading">Where Do You <br /> Want To Go</h1>
          <p className="description">
            Let's get you there safely and quickly, with a smooth experience that makes every journey feel effortless.
          </p>
        </div>
        <div className="right">
         <img src={MapVector} alt="Main Image" className="main-image" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="button-bar">
        <button className={`item ${activeSection === 'airport' ? 'active' : ''}`} onClick={() => setActiveSection('airport')}>Airport Map</button>
        <button className={`item ${activeSection === 'ticket' ? 'active' : ''}`} onClick={() => setActiveSection('ticket')}>Ticket Booking</button>
        <button className={`item ${activeSection === 'hotel' ? 'active' : ''}`} onClick={goToHotels}>Hotel Reservation</button>
        <button className={`item ${activeSection === 'flight' ? 'active' : ''}`} onClick={goToHome}>Flight Reservation</button>
      </div>

      {/* Main Content Area */}
      <div className="container">
        {activeSection === 'flight' && renderFlightView()}
        {activeSection === 'hotel' && renderFlightView()}
        {activeSection === 'airport' && (
          <div style={{textAlign: 'center', padding: '50px'}}>
            <h2>Airport Map Section</h2>
            <p>This is the airport map section. Add your airport map content here.</p>
          </div>
        )}
        {activeSection === 'ticket' && (
          <div style={{textAlign: 'center', padding: '50px'}}>
            <h2>Ticket Booking Section</h2>
            <p>This is the ticket booking section. Add your ticket booking content here.</p>
          </div>
        )}
      </div>

      {/* Footer */}
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
            <h3 style={{ color: "black", fontWeight: "900" }}>Book Your Flight Now</h3>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Enter Your Name" />
              </Form.Item>
              <Form.Item name="contact" rules={[{ required: true }]}>
                <Input placeholder="Enter Your Contact" />
              </Form.Item>
              <Button type="primary" htmlType="submit" className="book-btn">Book</Button>
              <div className="qr-area">
                <QrcodeOutlined />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;