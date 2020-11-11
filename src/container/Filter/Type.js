import React from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  setTypeValue,
} from "../../redux/product/product.action";
const Type = (props) => {
  const { products, setTypeValue, fetchData, typeValue } = props;
  const type = {};
  products
    .map((item) => {
      return item["type"];
    })
    .forEach((item) => {
      type[item] = (type[item] || 0) + 1;
    });
  const sortType = [];
  for (let item in type) {
    sortType.push([item, type[item]]);
  }
  sortType.sort((a, b) => {
    return b[1] - a[1];
  });
  const handleTypeChange = (value) => {
    const listChecked = [...typeValue];
    let index = listChecked.indexOf(value);
    if (index === -1) {
      listChecked.push(value);
    } else {
      listChecked.splice(index, 1);
    }
    setTypeValue(listChecked);
    fetchData();
  };

  return (
    <div data-reactroot="">
      <div className="ais-root ais-refinement-list">
        <div className="ais-refinement-list--header ais-header">
          <div className="facet-title">Type</div>
        </div>
        <div className="ais-body ais-refinement-list--body">
          <div className="ais-refinement-list--list">
            {sortType.slice(0, 5).map((item, index) => (
              <div key={index} className="ais-refinement-list--item">
                <div>
                  <a className="facet-item">
                    <input
                      id={index}
                      type="checkbox"
                      className="ais-refinement-list--checkbox"
                      value={item[0]}
                      onChange={(value) => {
                        handleTypeChange(value.target.value);
                      }}
                      checked={typeValue.indexOf(item[0]) === -1 ? false : true}
                    />
                    <label htmlFor={index}>{item[0]}</label>
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
  setTypeValue: (typeValue) => dispatch(setTypeValue(typeValue)),
  fetchData: () => dispatch(productsFetchData()),
});
const mapStateToProps = (state) => ({
  products: state.products.products,
  typeValue: state.typeValue,
});
export default connect(mapStateToProps, mapDispatchToProps)(Type);
