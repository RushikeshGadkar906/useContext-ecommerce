import React from "react";
import { NavLink } from "react-router-dom";
const Products = (product) => {
  const { id, name, image, price, category } = product;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
          <figure>
          <img src={image} className="card-img-top" alt="" />
          <figcaption>{category}</figcaption>
          </figure>
      
        <div className="card-body d-flex justify-content-between" >
          <p>{name}</p>
          <p>&#x20B9;{price}</p>
         
        </div>
      </div>
    </NavLink>
  );
};

export default Products;
