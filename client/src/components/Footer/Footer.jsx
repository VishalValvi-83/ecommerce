import React from 'react';
import './Footer.css'; // Importing CSS for styling
import stripe from './images/stripe.png'
import skrill from './images/skrill.png'
import visa from './images/visa.png'
import paypal from './images/paypal.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section contact">
  <h3>Contact Us</h3>
  <p style={{textDecoration:'none'}}>
    Phone: <a href="tel:+919970059488">9970059488</a>
  </p>
  <p  style={{textDecoration:'none'}}>
    Email: <a href="mailto:support@homedecor.com">vasundharashivankar17@gmail.com</a>
  </p>
  <p  style={{textDecoration:'none'}}>
    Address: <a href="https://www.google.com/maps/search/?api=1&query=123+Home+Decor+St,+Suite+456,+New+York,+NY+10001" target="_blank" rel="noopener noreferrer">
      123 Home Decor St, Bhandara, Nagpur
    </a>
  </p>
</div>

        
        <div className="footer-section social-media" style={{
          marginLeft:"20px"
        }}>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Visa" className='social-icons'/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Visa" className='social-icons'/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Visa" className='social-icons'/>
            </a>
          </div>
        </div>
        
        <div className="footer-section payment-options" style={{
          marginLeft:"20px"
        }}>
          <h4>We Accept</h4>
          <div className="payment-icons">
            <img src={visa} alt="Visa" />
            <img src={paypal} alt="Paypal" />
            <img src={stripe} alt="Stripe" />
            <img src={skrill} alt="Skrill" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CasaBloom Home Decor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
