import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';
import Navbar from '../../components/Navbar/Navbar';
import offersimg from './images/offers.jpg';
import offer1 from './images/offer1.webp';
import offer2 from './images/offer2.webp';
import offer3 from './images/offer3.webp';
import offer4 from './images/offer4.webp';
import offer5 from './images/offer5.webp';
import offer6 from './images/offer6.webp';
import offer7 from './images/offer7.webp';
import Footer from '../../components/Footer/Footer'

const offers = [
  {
    title: "Upto 50% Off on Living Room Furniture",
    description: "Upgrade your living room with stylish furniture at unbeatable prices.",
    imageUrl: offer4,
    originalPrice: "₹75,000",
    offerPrice: "₹37,500",
  },
  {
    title: "20% Off on Bedroom Essentials",
    description: "Sleep in style with our exclusive bedroom furniture and accessories.",
    imageUrl: offer2,
    originalPrice: "₹60,000",
    offerPrice: "₹48,000",
  },
  {
    title: "Buy 1 Get 1 Free on Decor Items",
    description: "Enhance your home decor with our BOGO offer on select items.",
    imageUrl: offer3,
    originalPrice: "₹15,000",
    offerPrice: "₹7,500", 
  },
  {
    title: "30% Off on Modular Kitchen Sets",
    description: "Revamp your kitchen with our modular kitchen sets at discounted rates.",
    imageUrl: offer4,
    originalPrice: "₹1,20,000",
    offerPrice: "₹84,000",
  },
  {
    title: "35% Off on Dining Room Furniture",
    description: "Dine in elegance with our luxurious dining sets.",
    imageUrl: offer5,
    originalPrice: "₹90,000",
    offerPrice: "₹58,500",
  },
  {
    title: "40% Off on Office Furniture",
    description: "Create a productive space with our ergonomic office furniture.",
    imageUrl: offer6,
    originalPrice: "₹45,000",
    offerPrice: "₹27,000",
  },
  {
    title: "Exclusive Sitting Collection - 25% Off",
    description: "Comfort meets style in our exclusive sitting collection.",
    imageUrl: offer7,
    originalPrice: "₹37,500",
    offerPrice: "₹28,125",
  },
  {
    title: "Special Offer on Elegant Clocks - 20% Off",
    description: "Add a touch of sophistication to your home with our elegant clocks.",
    imageUrl: offer1,
    originalPrice: "₹12,000",
    offerPrice: "₹9,600",
  }
];

const Offers = () => {
  return (
    <div className="offers-container">
      <img src={offersimg} alt="Offers" style={{ height: '500px', margin: 'auto', width: '100%' }} />
      <Navbar />
      <h2 className="offers-title">Exclusive Offers</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <Link to="/login" key={index} className="offer-card">
            <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <div className="offer-prices">
                <p className="original-price">Original Price: <span>{offer.originalPrice}</span></p>
                <p className="offer-price">Offer Price: <span>{offer.offerPrice}</span></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Offers;
