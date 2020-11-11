import React from "react";
import Category from "./Category";
import { connect } from "react-redux";

const Categories = (props) => {
  const { categoryLevel0, categoryLevel1, products } = props;
  const categories = products
    .map((item) => {
      return item["categories"];
    })
    .map((category) => {
      return category[0];
    })
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  let categoriesLevel1;
  if (categoryLevel0) {
    categoriesLevel1 = products
      .map((item) => {
        return item["categories"];
      })
      .map((category) => {
        return category[1];
      })
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
  }
  let categoriesLevel2;
  if (categoryLevel1) {
    categoriesLevel2 = products
      .map((item) => {
        return item["categories"];
      })
      .map((category) => {
        return category[2];
      })
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
  }
  return (
    <div data-reactroot="">
      <div className="ais-root ais-hierarchical-menu">
        <div className="ais-body ais-hierarchical-menu--body">
          <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
            {categories.map((category, index) => (
              <Category
                category={category}
                key={index}
                categoriesLevel1={categoriesLevel1}
                categoriesLevel2={categoriesLevel2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  categoryLevel0: state.category0Value,
  categoryLevel1: state.category1Value,
});

export default connect(mapStateToProps)(Categories);
