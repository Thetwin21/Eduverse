import React from "react";
import { HiLocationMarker } from 'react-icons/hi'

const MarketItems = ({ marketItems, setItemId }) => {
  return (
    <div className="items_for_sale">
      {marketItems &&
        marketItems.map((item) => {
          const { id, itemName, desc, location, price, itemURL } = item;
          return (
            <div className="item" key={id} onClick={() => setItemId(id)}>
              <div className="img">
                <img src={itemURL} alt={itemName} />
              </div>
              <div className="details">
                <p className="item_name">{itemName.substring(0,22) + '...'}</p>
                <p className="item_desc">{desc}</p>
                <div className="location_et_price">
                  <span className="location"><HiLocationMarker /> {location}</span>
                  <span className="item_price">
                    <h5>{price}</h5>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MarketItems;
