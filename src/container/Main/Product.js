import React from "react";
const Product = (props) => {
  const { product } = props;
  const amountRating = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; ++i) {
      if (i <= rating) {
        stars.push(<span className="ais-star-rating--star" key={i}></span>);
      } else {
        stars.push(
          <span className="ais-star-rating--star__empty" key={i}></span>
        );
      }
    }
    return stars;
  };
  return (
    <article className="hit">
      <div className="product-picture-wrapper">
        <div className="product-picture">
          <img src={product.image} alt="product" />
        </div>
      </div>
      <div className="product-desc-wrapper">
        <div className="product-name">{product.name}</div>
        <div className="product-type">{product.type}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">{amountRating(product.rating)}</div>
      </div>
    </article>
  );
};
export default Product;
