import React from 'react';
import './Home.css'
import bgimg from './images/bgimg.jpg';
import front from './images/front.jpg';
import quality from './images/quality.webp'
import gift from './images/gift.png'
import bazaar1 from './images/bazaar1.webp'
import bazaar2 from './images/bazaar2.webp'
import bazaar3 from './images/bazaar3.webp'
import bazaar4 from './images/bazaar4.webp'
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="overlay">
          <h1>Welcome to CasaBloom</h1>
          <p>
            Transform Your Space into a Sanctuary with Our Curated Home Decor Collection.
            Elevate Every Room with Unique, Timeless Pieces Crafted to Inspire and Delight.
          </p>
          <Link to="/shop" className="primary-button">
            Shop Now
          </Link>
        </div>
      </section>
      <Navbar/>
      {/* Product Cards */}
      <h1 style={{textAlign:'center',fontSize:'25px', marginTop:'40px', fontWeight:'bold'}}>GRAND BAZAAR</h1><br/>
      <section className="features-section">
        <div className="product-card">
        <Link to="/offers">
          <img src={bazaar1} alt="Community" className='card-img'/>
          </Link>
          <h3>Elegant clocks, timeless home upgrade!</h3>  
        </div>

        <div className="product-card">
        <Link to="/offers">
          <img src={bazaar2} alt="Quality Products" className='card-img'/>
          </Link>
          <h3>Nature's touch, home's best friend!</h3>
        </div>

        <div className="product-card">
        <Link to="/offers">
          <img src={bazaar3} alt="Exclusive Offers" className='card-img'/>
          </Link>
          <h3>Glamour reflected, perfect home decor!</h3>
        </div>

        <div className="product-card">
        <Link to="/offers">
          <img src={bazaar4} alt="Exclusive Offers" className='card-img'/>
          </Link>
          <h3>Express yourself with unique Art Prints!</h3>
        </div>
      </section>


      {/* Features Section */}
      <h1 style={{textAlign:'center',fontSize:'25px', marginTop:'40px', fontWeight:'bold'}}>FOLLOW TRENDS</h1><br/>
      <section className="features-section">
        <div className="feature-card">
          <img src={front} alt="Community" className='card-img'/>
          <h3>Join the Community</h3>
          <p>
            Become a part of our vibrant community and stay updated with the latest trends and offers.
          </p>
          <Link to="/community" className="secondary-button">
            Learn More
          </Link>
        </div>
        <div className="feature-card">
          <img src={quality} alt="Quality Products" className='card-img'/>
          <h3>Quality Products</h3>
          <p>
            Explore our wide range of high-quality home decor products that suit every style and budget.
          </p>
          <Link to="/products" className="secondary-button">
            Explore Products
          </Link>
        </div>
        <div className="feature-card">
          <img src={gift} alt="Exclusive Offers" className='card-img'/>
          <h3>Exclusive Offers</h3>
          <p>
            Sign up for our newsletter and get access to exclusive deals and discounts.
          </p>
          <Link to="/offers" className="secondary-button">
            View Offers
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive the latest updates and offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="primary-button">
            Subscribe
          </button>
        </form>
      </section>
      <Footer/>
    </div>
   
  );
}

export default Home;
