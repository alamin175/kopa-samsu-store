import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import './Navbar.css'
const Navbar = ({cart, openModal}) => {
    return (
        <div className='nav'>
            <h1>Kopa Samsu Store</h1>
            <div className='cart-icon'>
                <div onClick={openModal} className='cart'>
                    <FaCartPlus></FaCartPlus>
                </div>
                <p>{cart.length} </p>
            </div>
        </div>
    );
};

export default Navbar;<h1>Kopa Samsu Store</h1>