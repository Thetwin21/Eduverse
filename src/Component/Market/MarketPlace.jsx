import React, { useState } from "react";
import { useSelector } from "react-redux";
import { allMarketItems } from "../../features/marketPlace/marketSlice";
import Navbar from "../NavComponent/Navbar";
import MarketItems from "./MarketItems";
import SearchItems from "./SearchProducts";
import SingleProducts from "./SingleProducts";
import UploadItems from "./UploadProducts";

const MarketPlace = () => {
  const marketItems = useSelector(allMarketItems);

  const [uploadItem, setUploadItem] = useState(false);
  const [itemId, setItemId] = useState("");

  //  upload a products
  const handleClick = () => {
    setUploadItem(true);
  };
  // go back to previous page
  const backTo = () => {
    setUploadItem(false);
  };
  return (
    <section className="market_place">
      <Navbar />
      {itemId !== "" ? (
        <SingleProducts
          marketItems={marketItems}
          itemId={itemId - 1}
          setItemId={setItemId}
          handleClick={handleClick}
        />
      ) : (
        <div className="market_content">
          <h3>Market Place</h3>
          <SearchItems handleClick={handleClick} />
          <MarketItems setItemId={setItemId} marketItems={marketItems} />
        </div>
      )}
      <div
        className="upload_item_container"
        style={{ display: uploadItem ? "flex" : "none" }}
      >
        <UploadItems backTo={backTo} />
      </div>
    </section>
  );
};

export default MarketPlace;
