import React from "react";
import "../css/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <p>{title}</p>

      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
}

export default Product;
