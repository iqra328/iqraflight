import React, { useState } from "react";
import "../Styles/Hotel.css";

const Hotel = () => {
  const [search, setSearch] = useState("");

  const hotels = [
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
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hotel-section">
      <div className="hotel-top">
        <h3>DezyFlight ✈</h3>
        <input
          type="text"
          placeholder="Search Hotels Here"
          className="hotel-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="h2">Find Your Perfect Stay</h2>

      <div className="hotel-grid">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.img} alt={hotel.name} />
              <p>{hotel.name}</p>
            </div>
          ))
        ) : (
          <h3 className="no-hotel">No Hotels Found</h3>
        )}
      </div>
    </div>
  );
};

export default Hotel;
