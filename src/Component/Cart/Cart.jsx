import React from 'react';
import './Cart.css'
const Cart = ({item}) => {
    const {name, img, price} = item
    return (
        <div className='modal-cart'>
            <img src={img} alt="" />
            <div className='modal-details'>
                <h2>{name} </h2>
                <p>Price: {price} </p>
            </div>
        </div>
    );
};

export default Cart;