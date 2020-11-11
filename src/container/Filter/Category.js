import React from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  setCategoryLevel0,
  setCategoryLevel1,
  setCategoryLevel2,
} from "../../redux/product/product.action";
const Category = (props) => {
  const {
    category,
    handleLevel0Click,
    categoryLevel0,
    handleLevel1Click,
    categoryLevel1,
    handleLevel2Click,
    categoryLevel2,
    fetchData,
    categoriesLevel1,
    categoriesLevel2,
  } = props;
  const level0OnClick = (category) => {
    if (category === categoryLevel0) {
      handleLevel0Click("");
      fetchData();
    } else {
      handleLevel0Click(category);
      fetchData();
    }
  };

  console.log(categoryLevel0);
  const level1OnClick = (category) => {
    if (category === categoryLevel1) {
      handleLevel1Click("");
      fetchData();
    } else {
      handleLevel1Click(category);
      fetchData();
    }
  };
  const level2OnClick = (category) => {
    if (category === categoryLevel2) {
      handleLevel2Click("");
      fetchData();
    } else {
      handleLevel2Click(category);
      fetchData();
    }
  };

  return (
    <div
      className={
        category === categoryLevel0
          ? "ais-hierarchical-menu--item ais-hierarchical-menu--item__active"
          : "ais-hierarchical-menu--item"
      }
    >
      <div>
        <a
          href="#"
          onClick={() => {
            level0OnClick(category);
          }}
          className={
            category === categoryLevel0 ? "facet-item active" : "facet-item"
          }
        >
          <span className="facet-name">
            <i className="fa fa-angle-right"></i> {category}
          </span>
        </a>
      </div>
      <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl1">
        {categoriesLevel1
          ? categoriesLevel1.map((categoryLvl1) => (
              <div
                className={
                  categoryLevel1 === categoryLvl1
                    ? "ais-hierarchical-menu--item ais-hierarchical-menu--item__active"
                    : "ais-hierarchical-menu--item"
                }
              >
                <div>
                  <a
                    href="#"
                    className={
                      categoryLevel1 === categoryLvl1
                        ? "facet-item active"
                        : "facet-item"
                    }
                    onClick={() => {
                      level1OnClick(categoryLvl1);
                    }}
                  >
                    <span className="facet-name">
                      <i className="fa fa-angle-right"></i> {categoryLvl1}
                    </span>
                  </a>
                </div>
                <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl2">
                  {categoriesLevel2
                    ? categoriesLevel2.map((categoryLvl2) => (
                        <div
                          className={
                            categoryLevel2 === categoryLvl2
                              ? "ais-hierarchical-menu--item ais-hierarchical-menu--item__active"
                              : "ais-hierarchical-menu--item"
                          }
                        >
                          <div>
                            <a
                              href="#"
                              className={
                                categoryLevel2 === categoryLvl2
                                  ? "facet-item active"
                                  : "facet-item"
                              }
                              onClick={() => {
                                level2OnClick(categoryLvl2);
                              }}
                            >
                              <span className="facet-name">
                                <i className="fa fa-angle-right"></i>{" "}
                                {categoryLvl2}
                                Fans
                              </span>
                            </a>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  handleLevel0Click: (categoryLevel0) =>
    dispatch(setCategoryLevel0(categoryLevel0)),
  fetchData: () => dispatch(productsFetchData()),
  handleLevel1Click: (categoryLevel1) =>
    dispatch(setCategoryLevel1(categoryLevel1)),
  fetchData: () => dispatch(productsFetchData()),
  handleLevel2Click: (categoryLevel2) =>
    dispatch(setCategoryLevel2(categoryLevel2)),
  fetchData: () => dispatch(productsFetchData()),
});
const mapStateToProps = (state) => ({
  categoryLevel0: state.category0Value,
  categoryLevel1: state.category1Value,
  categoryLevel2: state.category2Value,
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
