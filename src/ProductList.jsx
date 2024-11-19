import React, { useState } from "react";
import "./ProductList.css";
import CartItem from './CartItem';
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice"; // Import addItem action

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({}); // State to track added items

    const dispatch = useDispatch(); // Initialize dispatch

    const plantsArray = [
        // Your existing plantsArray with plant objects...
    ];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch the action to add the item to the cart
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Mark the product as added to the cart
        }));
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{ textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '1100px' }}>
                    <div> <a href="#" onClick={handlePlantsClick} style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}>Plants</a></div>
                    <div> <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '30px', textDecoration: 'none' }}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68"><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1><div>{category.category}</div></h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <p>{plant.description}</p>
                                        <p>Cost: {plant.cost}</p>
                                        <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
