import React from "react";
import "../css/Subtotal.css";
import { useStateValue } from "../components/StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${0}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"E"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
