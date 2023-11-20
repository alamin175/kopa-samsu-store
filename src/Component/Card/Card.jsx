import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import './Card.css'
const Card = ({gun, handleAddToCart, cart}) => {
    // console.log(gun)
    const {id, name, action, img, bullet, category, price, capacity} = gun
    return (
        <div className='card'>
          <img src={img} alt="" />
          <h1>{name} </h1>  
          <p>Action:{action} </p>
          <p>Bullet: {bullet} </p>
          <p>Capacity: {capacity} </p>
          <p>Category: {category} </p>
          <div className='cart-pricing'>
          <button onClick={()=> handleAddToCart(gun)}>
          <FaCartPlus></FaCartPlus>
          </button>
          <h1>$ {price} </h1>
          </div>
        </div>
    );
};

export default Card;