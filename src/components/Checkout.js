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
    </div>
  );
}

export default Checkout;
