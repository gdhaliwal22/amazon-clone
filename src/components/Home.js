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
      <div className="home__row">
        <Product
          id="1"
          title="Nintendo Switch Console [Neon Blue/Red]"
          price={448.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_UL480_SR480,480_.jpg"
        />
        <Product
          id="2"
          title="Ghost of Tsushima - PlayStation 4"
          price={69.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71kpwRGYwqL._AC_UL480_SR381,480_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="The Last of Us Part 2 - PlayStation 4"
          price={68.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71T0ogpJS1L._AC_UL405_SR321,405_.jpg"
        />
        <Product
          id="4"
          title="Kindle Paperwhite – Now Waterproof with twice the Storage (8GB)"
          price={199.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_UL480_SR480,480_.jpg"
        />
        <Product
          id="5"
          title="Echo Dot (3rd Gen) – Smart speaker with Alexa - Charcoal Fabric"
          price={79.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61MdyHSbxHL._AC_UL480_SR480,480_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title='LG 38WN95C 38" UWQHD+ Curved Nano IPS Monitor'
          price={(2, 299.0)}
          rating={6}
          image="https://images-fe.ssl-images-amazon.com/images/I/71iRe--kVtL._AC_SY400_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
