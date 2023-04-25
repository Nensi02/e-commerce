import React from 'react'
import "./FeaturedProducts.scss";
import {Card} from "../Card/Card";

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long sleeve Graphic T-shirt",
            isNew: true,
            oldprice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Coat",
            isNew: true,
            oldprice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldprice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Hat",
            oldprice: 19,
            price: 12,
        }
    ]
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque hic tempora non, beatae omnis consectetur nostrum ducimus exercitationem corporis aliquam labore eius vitae voluptatibus, sit illum ab pariatur saepe.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts