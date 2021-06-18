import React from 'react';
import '../sass/components/ShoppingCarts.scss';
import ShoppingCart from './ShoppingCart';

const ShoppingCarts = ({ products, setTotalCount, totalCount }) => {
  return (
    <div className="shopping-container">
      {products.map(product => {
        return (
          <ShoppingCart
            key={product.id}
            {...product}
            setTotalCount={setTotalCount}
            totalCount={totalCount}
          />
        );
      })}
    </div>
  );
};

export default ShoppingCarts;
