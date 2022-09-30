import React from "react";
import { HiLocationMarker } from 'react-icons/hi'

const Products = ({product}) => {
  return (
    <div className="product_container">
    
      <div className="product_img_container">
        <div className="sample_img">
          <img src={product.itemURL} alt="" />
        </div>
        <div className="sample_imgs">
          <div className="img_box">
            <img src={product.itemURL} alt="" />
          </div>
          <div className="img_box">
            <img src={product.itemURL} alt="" />
          </div>
          <div className="img_box">
            <img src={product.itemURL} alt="" />
          </div>
        </div>
      </div>
      <div className="single_product_details">
        <span className="name_et_price">
          <h3>{product.itemName}</h3>
          <h3>{product.price}</h3>
        </span>
          <p className="location"><HiLocationMarker />{product.location}</p>
        <div className="product_desc_">
          <p className="desc">{product.desc}</p>
          <button className="read_more">Read More</button>
        </div>
        <table className="table_container">
          <tr>
            <th>Type</th>
            <th>Brand</th>
          </tr>
          <tr>
            <td>{product.type}</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <th>color</th>
            <th>condition</th>
          </tr>
          <tr>
            <td>{product.color}</td>
            <td>{product.condition ? "used" : "brand new"}</td>
            </tr>
          </table>
      </div>
    </div>
  );
};

export default Products;
