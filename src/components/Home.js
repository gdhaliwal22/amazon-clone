import React from "react";
import "../css/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-2759_SVOD_DiamondMultititleJuly/Amazon_GW_DesktopTallHero_RB-2759_SVOD_DiamondMultititleJuly_MovieNight_1500x600._CB407968705_.jpg"
      />
      {/* Product id, title, price, rating, image */}
      <Product
        id="12321341"
        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/61Mde-UfBOL._AC_UY218_.jpg"
      />
      {/* Product */}
    </div>
  );
}

export default Home;
