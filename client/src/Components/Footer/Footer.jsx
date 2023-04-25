import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categoried</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima maiores blanditiis, fugit reiciendis, voluptatibus aspernatur accusamus eaque doloribus quos exercitationem laudantium soluta enim autem asperiores temporibus dolor amet eveniet.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima maiores blanditiis, fugit reiciendis, voluptatibus aspernatur accusamus eaque doloribus quos exercitationem laudantium soluta enim autem asperiores temporibus dolor amet eveniet.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Chauhan Store</span>
          <span className="copyright">&copy; CopyRights 2023. All Rights Reserved.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer