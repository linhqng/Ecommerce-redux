import React from "react";
import Categories from "./Categories";
import Type from "./Type";
import Brand from "./Brand";
import Rating from "./Rating";
import Price from "./Price";
import { connect } from "react-redux";
import {
  productsFetchData,
  clearAllFiltersAction,
} from "../../redux/product/product.action";
const Filter = (props) => {
  const {
    typeValue,
    brandValue,
    ratingValue,
    priceValue,
    categoryLevel0,
    categoryLevel1,
    categoryLevel2,
    fetchData,
    clearAllFiltersAction,
  } = props;
  const clearAllFilters = () => {
    clearAllFiltersAction();
    fetchData();
  };
  return (
    <aside>
      <div id="clear-all">
        {typeValue.length > 0 ||
        ratingValue ||
        brandValue.length > 0 ||
        priceValue.length > 0 ||
        categoryLevel0 ||
        categoryLevel1 ||
        categoryLevel2 ? (
          <div data-reactroot="">
            <div className="ais-root ais-clear-all btn btn-block btn-default">
              <div className="ais-body ais-clear-all--body">
                <a
                  className="ais-clear-all--link"
                  href="#"
                  onClick={() => {
                    clearAllFilters();
                  }}
                >
                  <div>
                    <i className="fa fa-eraser"></i> Clear all filters
                  </div>
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <section className="facet-wrapper">
        <div className="facet-category-title" className="facet">
          Show results for
        </div>
        <div id="categories">
          <Categories />
        </div>
      </section>

      <section className="facet-wrapper">
        <div className="facet-category-title">Refine by</div>
        <div id="types" className="facet">
          <Type />
        </div>
        <div id="brands" className="facet">
          <Brand />
        </div>
        <div id="rating" className="facet">
          <Rating />
        </div>
        <div id="prices" className="facet">
          <Price />
        </div>
      </section>

      <div className="thank-you">
        Data courtesy of <a href="https://developer.bestbuy.com/">Best Buy</a>
      </div>
    </aside>
  );
};
const mapStateToProps = (state) => ({
  typeValue: state.typeValue,
  brandValue: state.brandValue,
  ratingValue: state.ratingValue,
  priceValue: state.priceValue,
  categoryLevel0: state.category0Value,
  categoryLevel1: state.category1Value,
  categoryLevel2: state.category2Value,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(productsFetchData()),
  clearAllFiltersAction: () => dispatch(clearAllFiltersAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
