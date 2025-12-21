import React, { useState } from "react";
import "../Styles/OverSeasSection.css";

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
  { id: 10, title: 'Lahore Heritage Trip', days: '2 days', price: '₨22,750', img: 'https://images.unsplash.com/photo-1758714144057-aae0194dfde5?w=500&auto=format&fit=crop&q=60' }
];

export default function OverSeasSection() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter packages based on search term
  const filteredPackages = packages.filter(pkg =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const packagesToShow = searchTerm ? filteredPackages : packages.slice(0, 5);

  return (
    <div className="overseas-wrapper">
      {/* Heading */}
      {/* <div className="heading-filter-wrapper">
        <h1 className="h1">
          Overseas Packages <br />
          With 20% off
        </h1>
      </div> */}

      {/* Search Input */}
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Packages Grid */}
      <div className="card-grid">
        {packagesToShow.map(pkg => (
          <div key={pkg.id} className="card">
            <div className="card-img-wrapper">
              <img src={pkg.img} alt={pkg.title} className="card-img" />
            </div>
            <div className="card-content">
              <h3>{pkg.title}</h3>
              <p className="sub">{pkg.days}</p>
              <p className="price">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
