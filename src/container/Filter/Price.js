import React, { useState } from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  setPriceValue,
} from "../../redux/product/product.action";
const Price = (props) => {
  const { products, priceValue, setPriceValue, fetchData } = props;
  const [startPrice, setStartPrice] = useState("");
  const [endPrice, setEndPrice] = useState("");
  const price = {};
  products
    .map((item) => {
      return item["price_range"];
    })
    .forEach((item) => {
      price[item] = (price[item] || 0) + 1;
    });
  const listPrice = [];

  for (const key in price) {
    listPrice.push(key.replace("- ", "").replace("> ", "").split(" ", 2));
  }
  for (let i = 0; i < listPrice.length - 1; i++) {
    if (+listPrice[i][1] > +listPrice[i + 1][0]) {
      let temp = listPrice[i];
      listPrice[i] = listPrice[i + 1];
      listPrice[i + 1] = temp;
    }
  }
  const handlePriceClick = (...price) => {
    if (price[0] === priceValue[0] && price[1] === priceValue[1]) {
      setPriceValue("");
      fetchData();
      setStartPrice("");
      setEndPrice("");
    } else {
      setStartPrice(price[0]);
      setEndPrice(price[1]);
      setPriceValue(price);
      fetchData();
    }
  };
  return (
    <div className="ais-root ais-price-ranges">
      <div className="ais-price-ranges--header ais-header">
        <div className="facet-title">Prices</div>
      </div>
      <div className="ais-body ais-price-ranges--body">
        <div>
          <div className="ais-price-ranges--list nav nav-list">
            {listPrice.map((item, index) => {
              if (!item[1]) {
                return (
                  <div
                    key={index}
                    className={
                      priceValue[0] === item[0]
                        ? "ais-price-ranges--item ais-price-ranges--item__active active"
                        : "ais-price-ranges--item"
                    }
                  >
                    <a
                      className="ais-price-ranges--link"
                      onClick={() => {
                        handlePriceClick(...item);
                      }}
                      href="#"
                    >
                      <div>
                        {">"} ${item[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className={
                      priceValue[0] === item[0]
                        ? "ais-price-ranges--item ais-price-ranges--item__active active"
                        : "ais-price-ranges--item"
                    }
                  >
                    <a
                      className="ais-price-ranges--link"
                      onClick={() => {
                        handlePriceClick(...item);
                      }}
                      href="#"
                    >
                      <div>
                        ${item[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")} -{" "}
                        {item[1].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </a>
                  </div>
                );
              }
            })}
          </div>
          <form
            className="ais-price-ranges--form"
            onSubmit={(event) => {
              handlePriceClick(startPrice, endPrice);
              event.preventDefault();
            }}
          >
            <label className="ais-price-ranges--label">
              <span className="ais-price-ranges--currency">$</span>
              <input
                type="number"
                className="ais-price-ranges--input"
                value={startPrice}
                onChange={(value) => {
                  setStartPrice(value.target.value);
                }}
              />
            </label>
            <span className="ais-price-ranges--separator"> to </span>
            <label className="ais-price-ranges--label">
              <span className="ais-price-ranges--currency">$ </span>
              <input
                type="number"
                className="ais-price-ranges--input"
                value={endPrice}
                onChange={(value) => {
                  setEndPrice(value.target.value);
                }}
              />
            </label>
            <button className="ais-price-ranges--button" type="submit">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setPriceValue: (priceValue) => dispatch(setPriceValue(priceValue)),
  fetchData: () => dispatch(productsFetchData()),
});
const mapStateToProps = (state) => ({
  products: state.products.products,
  priceValue: state.priceValue,
});
export default connect(mapStateToProps, mapDispatchToProps)(Price);
