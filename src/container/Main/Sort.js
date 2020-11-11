import React from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  setSortValue,
} from "../../redux/product/product.action";
const Sort = (props) => {
  const { fetchData, setSortValue } = props;
  return (
    <select
      onChange={(value) => {
        setSortValue(value.target.value);
        fetchData();
      }}
      data-reactroot=""
      className="ais-sort-by-selector"
    >
      <option className="ais-sort-by-selector--item" value="">
        Featured
      </option>
      <option className="ais-sort-by-selector--item" value="asc">
        Price asc.
      </option>
      <option className="ais-sort-by-selector--item" value="desc">
        Price desc.
      </option>
    </select>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSortValue: (sortValue) => dispatch(setSortValue(sortValue)),
  fetchData: (filter) => dispatch(productsFetchData(filter)),
});
export default connect(null, mapDispatchToProps)(Sort);
