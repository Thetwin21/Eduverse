import React from "react";
import DragDrop from "../Dragdrop.jsx";
import { ImCancelCircle } from "react-icons/im";

const UploadProducts = ({ backTo }) => {
  const onSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <div className="upload_item">
      <div className="upload_item_header">
        <h3>Upload A Product </h3>
        <div className="icon">
          <ImCancelCircle onClick={backTo} />
        </div>
      </div>
      <form action="" onSubmit={onSubmitHandle}>
        <span className="product_name_container">
          <label htmlFor="product_name">Name Of Product</label>
          <input
            type="text"
            id="product"
            placeholder="e.g Panasonic Televison"
          />
        </span>
        <span className="brand_container">
          <label htmlFor="brand">Brand </label>
          <input type="text" id="brand" placeholder="e.g Panasonic" />
        </span>
        <div className="selection_container">
          <select name="" id="condition">
            <option value="new">Brand</option>
            <option value="used">Used</option>
          </select>
          <select name="" id="">
            <option value="white" selected >
              color
            </option>
            <option value="white">white</option>
            <option value="white">black</option>
            <option value="white">yellow</option>
            <option value="white">blue</option>
            <option value="white">green</option>
            <option value="white">lemon</option>
            <option value="white">orange</option>
          </select>
        </div>

        <span className="about_product_container">
          <label htmlFor="about_product">About The Product</label>
          <textarea
            name=""
            id="about_product"
            cols="30"
            rows="10"
            placeholder="Enter Description"
          ></textarea>
        </span>
        <DragDrop />
        <span className="amount_container">
          <label htmlFor="amount">Enter Amount </label>
          <input type="text" id="amount" placeholder="N 0.00" />
        </span>
        <div className="upload_product_btn">
          <button className="cancel" onClick={backTo}>
            Cancel
          </button>
          <button>Post</button>
        </div>
      </form>
    </div>
  );
};

export default UploadProducts;
