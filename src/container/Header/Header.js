import React from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  setSearchValue,
} from "../../redux/product/product.action";
import logo from "../../logo-is.png";
const Header = (props) => {
  const { fetchData, setSearchValue } = props;
  return (
    <header className="content-wrapper">
      <a
        href="https://community.algolia.com/instantsearch.js/"
        className="is-logo"
      >
        <img src={logo} width="40" alt="Logo" />
      </a>
      <a href="./" className="logo">
        amazing
      </a>
      <div className="input-group">
        <div className="ais-search-box">
          <input
            type="text"
            className="form-control ais-search-box--input"
            id="q"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            placeholder="Search a product"
            role="textbox"
            spellCheck="false"
            onChange={(value) => {
              setSearchValue(value.target.value);
              fetchData();
            }}
          />
        </div>
        <span className="input-group-btn">
          <button className="btn btn-default">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </header>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
  fetchData: () => dispatch(productsFetchData()),
});
export default connect(null, mapDispatchToProps)(Header);
