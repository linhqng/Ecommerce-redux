import React, { useState, useEffect } from "react";
import { getData } from "../../services/base_service";
import { connect } from "react-redux";
import {
  productsFetchData,
  setBrandValue,
} from "../../redux/product/product.action";
const Brand = (props) => {
  const { products, setBrandValue, brandValue, fetchData } = props;
  const [brandSearchValue, setBrandSearchValue] = useState([]);

  useEffect(() => {
    setBrandSearchValue(products);
  }, [products]);

  const brand = {};
  brandSearchValue.forEach((item) => {
    brand[item] = (brand[item] || 0) + 1;
  });
  const sortBrand = [];
  for (let item in brand) {
    sortBrand.push([item, brand[item]]);
  }
  sortBrand.sort((a, b) => {
    return b[1] - a[1];
  });
  const handleBrandChange = (value) => {
    const listChecked = [...brandValue];
    let index = listChecked.indexOf(value);
    if (index === -1) {
      listChecked.push(value);
    } else {
      listChecked.splice(index, 1);
    }
    setBrandValue(listChecked);
    fetchData();
  };
  const handleBrandSearch = (value) => {
    getData(value ? `products?brand_like=${value}` : `products`)
      .then((res) => {
        setBrandSearchValue(
          res.data.map((item) => {
            return item["brand"];
          })
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <div data-reactroot="">
      <div className="ais-root ais-refinement-list">
        <div className="ais-refinement-list--header ais-header">
          <div className="facet-title">Brand</div>
        </div>
        <div className="ais-body ais-refinement-list--body">
          <div className="ais-refinement-list--list">
            <form noValidate="" className="searchbox sbx-sffv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  id="sbx-icon-search-12"
                  viewBox="0 0 40 41"
                >
                  <path
                    d="M30.967 27.727l-.03-.03c-.778-.777-2.038-.777-2.815 0l-1.21 1.21c-.78.78-.778 2.04 0 2.817l.03.03 4.025-4.027zm1.083 1.084L39.24 36c.778.778.78 2.037 0 2.816l-1.21 1.21c-.777.778-2.038.78-2.816 0l-7.19-7.19 4.026-4.025zM15.724 31.45c8.684 0 15.724-7.04 15.724-15.724C31.448 7.04 24.408 0 15.724 0 7.04 0 0 7.04 0 15.724c0 8.684 7.04 15.724 15.724 15.724zm0-3.93c6.513 0 11.793-5.28 11.793-11.794 0-6.513-5.28-11.793-11.793-11.793C9.21 3.93 3.93 9.21 3.93 15.725c0 6.513 5.28 11.793 11.794 11.793z"
                    fillRule="evenodd"
                  ></path>
                </symbol>
                <symbol
                  xmlns="http://www.w3.org/2000/svg"
                  id="sbx-icon-clear-2"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z"
                    fillRule="evenodd"
                  ></path>
                </symbol>
              </svg>
              <div role="search" className="sbx-sffv__wrapper">
                <input
                  type="search"
                  name="search"
                  placeholder="Search for other..."
                  autoComplete="off"
                  required=""
                  className="sbx-sffv__input"
                  onChange={(value) => {
                    handleBrandSearch(value.target.value);
                  }}
                />
                <button
                  type="submit"
                  title="Submit your search query."
                  className="sbx-sffv__submit"
                >
                  <svg role="img" aria-label="Search">
                    <use href="#sbx-icon-search-12" />
                  </svg>
                </button>
                <button
                  type="reset"
                  title="Clear the search query."
                  className="sbx-sffv__reset"
                >
                  <svg role="img" aria-label="Reset">
                    <use href="#sbx-icon-clear-2" />
                  </svg>
                </button>
              </div>
            </form>
            {sortBrand.slice(0, 5).map((item, index) => (
              <div key={index} className="ais-refinement-list--item">
                <div>
                  <a href="#" className="facet-item">
                    <input
                      id={item[1]}
                      type="checkbox"
                      className="ais-refinement-list--checkbox"
                      value={item[0]}
                      onChange={(value) => {
                        handleBrandChange(value.target.value);
                      }}
                      checked={
                        brandValue.indexOf(item[0]) === -1 ? false : true
                      }
                    />
                    <label htmlFor={item[1]}>{item[0]}</label>
                    <span className="facet-count">({item[1]})</span>
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
  setBrandValue: (brandValue) => dispatch(setBrandValue(brandValue)),
  fetchData: () => dispatch(productsFetchData()),
});
const mapStateToProps = (state) => ({
  products: state.products.products.map((item) => {
    return item["brand"];
  }),
  brandValue: state.brandValue,
});
export default connect(mapStateToProps, mapDispatchToProps)(Brand);
