import * as Actions from "../../redux";
// import { getProducts, getProductsByCategory } from "../../redux";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { bindActionCreators } from "redux";

// function ProductsList(props) {
const ProductsList = ({
  getProducts,
  getProductsByCategory,
  productList,
  addToCart,
}) => {
  const history = useHistory();

  const category = [
    "electronics",
    "jewelery",
    "men clothing",
    "women clothing",
  ];

  const productDetails = (data) => {
    history.push("/detail", { params: data });
  };

  const addItem = (productId) => {
    let obj = {
      userId: 1,
      date: new Date(),
      products: [{ productId, quantity: 1 }],
    };
    addToCart(obj);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <Navbar color="light" light expand="md" className="navbar-component">
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu>
                {category.map((item, i) => (
                  //   <DropdownItem key={i} onClick={() => getCatogory(item)}>
                  <DropdownItem
                    key={i}
                    onClick={() => getProductsByCategory(item)}
                  >
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
      <div className="products container-fluid">
        <Row sm={12}>
          {productList.length ? (
            productList.map((product) => (
              <Col key={product.id} xs={12} md={6} xl={3} className="pt-5 pb-5">
                <div>
                  <div className="text-center">
                    <img
                      src={product.image}
                      alt="product-pic"
                      className="product-img img-fluid"
                      style={{ cursor: "pointer" }}
                      onClick={() => productDetails(product.id)}
                    />
                  </div>
                  <div className="text-center pt-4 pb-2">
                    <div className="text-success text-center product-title">
                      <b>{product.title}</b>
                    </div>
                  </div>
                  <div className="text-center font-weight-700 pb-3">
                    $ {product.price}
                  </div>
                  <div className="text-center pb-3">
                    <Button color="primary">BUY NOW</Button>
                    <Button
                      color="success ml-2"
                      onClick={() => addItem(product.id)}
                    >
                      ADD TO CART
                    </Button>
                  </div>
                  <div className="product-description text-center">
                    {product.description}
                  </div>
                  <div className="text-center pb-3">
                    <Button
                      color="link"
                      onClick={() => productDetails(product.id)}
                    >
                      More Details
                    </Button>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </Row>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     productList: state.products.productList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProducts: () => dispatch(getProducts()),
//     getProductsByCategory: () => dispatch(getProductsByCategory()),
//   };
// };
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getProducts: Actions.getProducts,
      getProductsByCategory: Actions.getProductsByCategory,
      addToCart: Actions.addToCart,
    },
    dispatch
  );
}

function mapStateToProps({ products }) {
  // console.log("app", calendarApp);
  return {
    productList: products.productList,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
