import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductDetails from './components/ProductDetails';
import CompareProducts from './components/CompareProducts';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ProductDetails />} />
            <Route path="/compare" element={<CompareProducts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
