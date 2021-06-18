import React, { useState } from 'react';
import '../sass/components/ShoppingCart.scss';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ShoppingCart = ({
  image,
  title,
  subtitle,
  description,
  setTotalCount,
  totalCount,
}) => {
  const [count, setCount] = useState(0);

  const handleCountIncrease = () => {
    setCount(count + 1);
    setTotalCount(totalCount + 1);
  };

  const handleCountDecrease = () => {
    setCount(count - 1);
    setTotalCount(totalCount - 1);
  };

  return (
    <div className="cart-container">
      <img className="cart-image" src={image} alt="" />
      <div className="cart-titles">
        <p className="cart-title">{title}</p>
        <p className="cart-subtitle">{subtitle}</p>
        <p className="cart-desc">{description}</p>
      </div>
      <div className="btn-container">
        <button className="btn btn-minus" onClick={handleCountDecrease}>
          <FaMinus />
        </button>
        <div className="count-container">
          <p className="count">{count}</p>
        </div>
        <button className="btn btn-plus" onClick={handleCountIncrease}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
