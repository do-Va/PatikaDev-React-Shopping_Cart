import React, { useState } from 'react';

import Navbar from './components/Navbar';
import ShoppingCarts from './components/ShoppingCarts';
import './sass/App.scss';

import { products } from './data/constants';

function App() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div className="App">
      <Navbar totalCount={totalCount} />
      <ShoppingCarts
        products={products}
        setTotalCount={setTotalCount}
        totalCount={totalCount}
      />
    </div>
  );
}

export default App;
