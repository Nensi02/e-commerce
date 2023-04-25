import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
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
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum laboriosam cupiditate ad adipisci accusamus assumenda fugit nam? Facere quod dolore amet doloribus, praesentium iure eos ut perferendis, dolores at nesciunt?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sapiente ullam. Beatae repellat amet incidunt provident eum modi porro, voluptatibus quibusdam, accusamus deleniti dicta sit tempora autem, earum eaque a.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">
            Chauhan Store
          </div>
          <div className="copyright">
            &copy; CopyRight 2023. All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default Footer