import React, { useState, useEffect } from "react";
import Products from "./Products";
import Pagination from "./Pagination";
import Sort from "./Sort";
import { connect } from "react-redux";
import { productsFetchData } from "../../redux/product/product.action";
const Main = (props) => {
  const { searchValue, products, fetchData } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  useEffect(() => {
    fetchData();
  }, []);
  const iLastProduct = currentPage * productsPerPage;
  const iFirstProduct = iLastProduct - productsPerPage;
  const currentProducts = products.slice(iFirstProduct, iLastProduct);
  return (
    <div className="results-wrapper">
      <section id="results-topbar">
        <div className="sort-by">
          <label>Sort by </label>
          <div id="sort-by-selector">
            <Sort />
          </div>
        </div>

        <div id="stats" className="text-muted">
          <div data-reactroot="">
            <div className="ais-root ais-stats">
              <div className="ais-body ais-stats--body">
                {products.length ? (
                  <div>
                    {products.length
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    results
                    <span className="ais-stats--time"> found in 4ms</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="hits">
        {products.length ? (
          <Products listProducts={currentProducts} />
        ) : (
          <div data-reactroot="" className="ais-hits ais-hits__empty">
            <div className="text-center">
              No results found matching <strong>{searchValue}</strong>.
            </div>
          </div>
        )}
      </main>
      <section id="pagination">
        {products.length ? (
          <Pagination
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            handlePageChange={setCurrentPage}
          />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchData: (filter) => dispatch(productsFetchData(filter)),
});

const mapStateToProps = (state) => ({
  products: state.products.products,
  searchValue: state.searchValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
