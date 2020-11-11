import React from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  setRatingValue,
} from "../../redux/product/product.action";
const Rating = (props) => {
  const { products, ratingValue, setRatingValue, fetchData } = props;
  const rating = {};
  products
    .map((item) => {
      return item["rating"];
    })
    .forEach((item) => {
      rating[item] = (rating[item] || 0) + 1;
    });
  const sortRating = [];
  for (let item in rating) {
    sortRating.push([item, rating[item]]);
  }
  sortRating.sort((a, b) => {
    return b[0] - a[0];
  });
  const handleRatingClick = (rating) => {
    if (rating === ratingValue) {
      setRatingValue("");
      fetchData();
    } else {
      setRatingValue(rating);
      fetchData();
    }
  };

  const listStar = (rating) => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <span className="ais-star-rating--star" key={Math.random() + i} />
      );
    }
    for (let i = 1; i <= 6 - rating; i++) {
      stars.push(
        <span
          className="ais-star-rating--star__empty"
          key={Math.random() + 6 - i}
        />
      );
    }
    return stars;
  };

  return (
    <div data-reactroot="">
      <div className="ais-root ais-star-rating">
        <div className="ais-star-rating--header ais-header">
          <div className="facet-title">Ratings</div>
        </div>
        <div className="ais-body ais-star-rating--body">
          <div className="ais-star-rating--list">
            {sortRating.map((item, index) => (
              <div
                key={index}
                className={
                  ratingValue === item[0]
                    ? "ais-star-rating--item ais-star-rating--item__active"
                    : "ais-star-rating--item"
                }
              >
                <div>
                  <a
                    className="ais-star-rating--link"
                    onClick={() => {
                      handleRatingClick(item[0]);
                    }}
                    href="#"
                  >
                    {listStar(item[0])}
                    &amp; Up
                    <span className="ais-star-rating--count"> {item[1]}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setRatingValue: (ratingValue) => dispatch(setRatingValue(ratingValue)),
  fetchData: () => dispatch(productsFetchData()),
});
const mapStateToProps = (state) => ({
  products: state.products.products,
  ratingValue: state.ratingValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
