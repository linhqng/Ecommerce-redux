import React from "react";
import Product from "./Product";

const Products = (props) => {
  const { listProducts } = props;
  return (
    <main id="hits">
      {listProducts.map((product) => (
        <Product product={product} key={product.objectID} />
      ))}
    </main>
  );
};
export default Products;
