import React from 'react'
import {useState} from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import "./Product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0)

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="img" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia similique provident nam nisi vero maiores culpa debitis eveniet. Earum quos voluptatem magnam quia voluptas nam debitis at saepe similique?</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1)) }> - </button>
          {quantity}
          <button onClick={() => setQuantity((next) => next + 1) }> + </button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className='links'>
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-Shirt, women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
