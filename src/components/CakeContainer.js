import { buyCake } from "../redux";
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
import axios from "axios";

import NavbarComponent from "./Navbar.js";
import baseURL from "../utils/api";

function CakeContainer(props) {
  const history = useHistory();
  const [productData, getProduct] = useState([]);
  const [error, setError] = useState([]);

  const category = [
    "electronics",
    "jewelery",
    "men clothing",
    "women clothing",
  ];

  const getProductsList = async () => {
    try {
      let response = await axios.get(`${baseURL}/products`);
      if (response.status === 200) {
        getProduct(response.data);
      } else {
        alert("SOME THING WENT WRONG");
      }
    } catch (error) {
      // setError(error);
    }
  };

  const getCatogory = async (item) => {
    try {
      let response = await axios.get(`${baseURL}/products/category/${item}`);
      if (response.status === 200) {
        getProduct(response.data);
      } else {
        alert("SOME THING WENT WRONG");
      }
    } catch (error) {
      setError(error);
    }
  };

  const productDetails = (e, data) => {
    history.push("/detail", { params: data });
  };

  useEffect(() => {
    // getProductsList()
    // getProducts();
    props.buyCake();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div>
        <Navbar color="light" light expand="md" className="navbar-component">
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Category
              </DropdownToggle>
              <DropdownMenu>
                {category.map((item, i) => (
                  <DropdownItem key={i} onClick={() => getCatogory(item)}>
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
      <div className="products container-fluid">
        {error}
        <Row sm={12}>
          {props.numOfCakes.length ? (
            props.numOfCakes.map((product) => (
              <Col key={product.id} xs={12} md={6} xl={3} className="pt-5 pb-5">
                <div>
                  <div className="text-center">
                    <img
                      src={product.image}
                      alt="product-pic"
                      className="product-img img-fluid"
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
                    <Button color="success ml-2">ADD TO CART</Button>
                  </div>
                  <div className="product-description text-center">
                    {product.description}
                  </div>
                  <div className="text-center pb-3">
                    <Button
                      color="link"
                      onClick={(e) => productDetails(e, product.id)}
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
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
