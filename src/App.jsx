import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Main from './components/ProductDetails/main';
// import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Main />} />
        {/* <Route path="/checkout" element={<Checkout/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
