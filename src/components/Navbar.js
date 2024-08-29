import React from 'react';
import { Layout } from 'antd';
// import logos from 'src/assets/images/cubes.png';

const { Header } = Layout;

const Navbar = () => (
  <Header className="navbar">
      <div className="logo">
        <img
        src="/images/cubes.png"
        alt="Logo"
        style={{ height: '40px' }}
        /><span style={{color:'white'}}>Product Pulse</span>
    </div>

  </Header>
);

export default Navbar;
