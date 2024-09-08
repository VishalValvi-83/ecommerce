import React from 'react';
import './Products.css';
import Header from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Productimg from './images/products.webp';
import vase1 from './images/vase1.webp'
import lamp2 from './images/lamp2.webp'
import wallart1 from './images/wallart1.webp'
import rug1 from './images/rug1.webp'
import candle1 from './images/candle1.webp'
import pillow1 from './images/pillow1.webp'
import clock1 from './images/clock1.webp'
import table1 from './images/table1.webp'
import mirror1 from './images/mirror1.webp'
import lamp1 from './images/lamp1.webp'
import bed1 from './images/bed1.webp'
import shelf1 from './images/shelf1.webp'
import pendant1 from './images/pendant1.webp'
import sofa1 from './images/sofa1.webp'
import vase2 from './images/vase2.webp'
import desk1 from './images/desk1.webp'
import clock2 from './images/clock2.webp'
import rug2 from './images/rug2.webp'
import artwork1 from './images/artwork1.webp'
import lamp3 from './images/lamp3.webp'

// Sample product data (replace with your actual data or API calls)
const products = [
    {
        id: 1,
        name: 'Elegant Vase',
        price: '₹45.00',
        image: vase1,
        rating: 4.5,
        label: 'Best Seller'
    },
    {
        id: 2,
        name: 'Decorative Lamp',
        price: '₹60.00',
        image: lamp2,
        rating: 4.0,
        label: 'New Arrival'
    },
    {
        id: 3,
        name: 'Wall Art',
        price: '₹120.00',
        image: wallart1,
        rating: 5.0,
        label: 'Limited Edition'
    },
    {
        id: 4,
        name: 'Modern Rug',
        price: '₹85.00',
        image: rug1,
        rating: 4.3,
        label: 'Featured'
    },
    {
        id: 5,
        name: 'Elegant Candle Holder',
        price: '₹30.00',
        image: candle1,
        rating: 4.7,
        label: 'Popular'
    },
    {
        id: 6,
        name: 'Vintage Clock',
        price: '₹75.00',
        image: clock1,
        rating: 4.1,
        label: 'New Arrival'
    },
    {
        id: 7,
        name: 'Decorative Throw Pillow',
        price: '₹25.00',
        image: pillow1,
        rating: 4.6,
        label: 'Best Seller'
    },
    {
        id: 8,
        name: 'Stylish Coffee Table',
        price: '₹150.00',
        image: table1,
        rating: 4.8,
        label: 'Limited Edition'
    },
    {
        id: 9,
        name: 'Chic Wall Mirror',
        price: '₹95.00',
        image: mirror1,
        rating: 4.4,
        label: 'Featured'
    },
    {
        id: 10,
        name: 'Artistic Table Lamp',
        price: '₹50.00',
        image: lamp1,
        rating: 4.2,
        label: 'New Arrival'
    },
    {
        id: 11,
        name: 'Luxury Bedding Set',
        price: '₹200.00',
        image: bed1,
        rating: 4.9,
        label: 'Popular'
    },
    {
        id: 12,
        name: 'Rustic Wall Shelf',
        price: '₹40.00',
        image: shelf1,
        rating: 4.6,
        label: 'Best Seller'
    },
    {
        id: 13,
        name: 'Elegant Pendant Light',
        price: '₹70.00',
        image: pendant1,
        rating: 4.3,
        label: 'Featured'
    },
    {
        id: 14,
        name: 'Sophisticated Sofa',
        price: '₹600.00',
        image: sofa1,
        rating: 4.8,
        label: 'Limited Edition'
    },
    {
        id: 15,
        name: 'Handcrafted Vase',
        price: '₹55.00',
        image: vase2,
        rating: 4.7,
        label: 'New Arrival'
    },
    {
        id: 16,
        name: 'Minimalist Desk',
        price: '₹130.00',
        image: desk1,
        rating: 4.4,
        label: 'Best Seller'
    },
    {
        id: 17,
        name: 'Elegant Wall Clock',
        price: '₹85.00',
        image: clock2,
        rating: 4.5,
        label: 'Featured'
    },
    {
        id: 18,
        name: 'Luxurious Area Rug',
        price: '₹160.00',
        image: rug2,
        rating: 4.6,
        label: 'Popular'
    },
    {
        id: 19,
        name: 'Modern Artwork',
        price: '₹90.00',
        image: artwork1,
        rating: 4.2,
        label: 'Limited Edition'
    },
    {
        id: 20,
        name: 'Elegant Floor Lamp',
        price: '₹75.00',
        image: lamp3,
        rating: 4.5,
        label: 'New Arrival'
    }
];


function Products() {
    return (
        <div className="products-page">
            <section className="hero-section" style={{ backgroundImage: `url(${Productimg})` }}>
            </section>
            <main className="products-container">
            <Header />
                <h1 className="products-title">Our Products</h1>
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                                {product.label && <span className="product-label">{product.label}</span>}
                            </div>
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-rating">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i} className={i < Math.floor(product.rating) ? 'filled-star' : 'empty-star'}>
                                        &#9733;
                                    </span>
                                ))}
                                <span className="rating-value">({product.rating})</span>
                            </div>
                            <p className="product-price">Price: <span>{product.price}</span></p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Products;
