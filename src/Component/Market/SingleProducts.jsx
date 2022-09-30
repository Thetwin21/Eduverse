import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import CardProfile from "../CardProfile";
import Products from "./Products";
import SearchProducts from "./SearchProducts";

const SingleProducts = ({ itemId, setItemId, marketItems,handleClick }) => {
  const backTo = () => {
    setItemId("");
  };

  return (
    <div className="single_product_container">
      <SearchProducts handleClick={handleClick}/>
      <div className="btn_container">
        <button onClick={backTo}>
          <IoIosArrowBack /> back{" "}
        </button>
      </div>
      {itemId !== "" && marketItems[itemId] && (
        <div className="single_product">
          <Products product={marketItems[itemId]} />
          <div className="payment_section">
            <h4>About Seller</h4>
            <CardProfile />
            <button className="purchase_btn">
              Buy Now {marketItems[itemId].price}
            </button>
            <button className="make_offer">Make An Offer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProducts;
