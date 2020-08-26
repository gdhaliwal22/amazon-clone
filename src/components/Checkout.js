import React from "react";
import { useStateValue } from "../components/StateProvider";
import "../css/Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        src="https://m.media-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        className="checkout__ad"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
