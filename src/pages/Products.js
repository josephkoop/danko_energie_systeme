import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Products = () => {

  const productData = [
    {
      title: "Bushhogs",
      imgSrc: "/photos/bushhog.jpg",
      altText: "Bushhog",
      route: "/products/bushhogs",
    },
    {
      title: "Drilling Machines",
      imgSrc: "/photos/driller.jpeg",
      altText: "Drilling Machine",
      route: "/products/drillers",
    },
    {
      title: "Semi Trailers",
      imgSrc: "/photos/semi.jpeg",
      altText: "Semi Trailer",
      route: "/products/semis",
    },
  ];

  return (
    <section className="main-section all">
      <h1>Products</h1>
      <section className="market-display">
        {productData.map((product, index) => (
          <Link key={index} to={product.route}>
            <div className="market">
              <h2>{product.title}</h2>
              <img
                className="productImages"
                src={product.imgSrc}
                alt={product.altText}
              />
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Products;