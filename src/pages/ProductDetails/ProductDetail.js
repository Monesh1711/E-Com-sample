import React, { useState, useEffect } from "react";
import * as Actions from "../../redux";
import { useLocation } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const ProductDetail = ({ product, getProductById }) => {
  console.log("detail called", product);
  const location = useLocation();
  const param = location.state.params;

  useEffect(() => {
    getProductById(param);
  }, []);

  return (
    <div>
      <div className="pt-5 container-fluid">
        {product ? (
          <Row>
            <Col xs={12} md={6}>
              <div className="p-5">
                <img src={product.image} alt="" className="img-fluid p-img" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div>
                <div className="pt-4">
                  <h4>{product.title}</h4>
                </div>
                <div className="py-4">
                  <h3 className="text-success">
                    Price : <b>$ {product.price}</b>
                  </h3>
                </div>
                <div>
                  <h4 className="">Description</h4>
                  <p>{product.description}</p>
                </div>
                <div className="pt-4">
                  <Button color="primary">BUY NOW</Button>
                  <Button color="success ml-2">ADD TO CART</Button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getProductById: Actions.getProductById,
    },
    dispatch
  );
}

function mapStateToProps({ products }) {
  // console.log("app", calendarApp);
  return {
    product: products.product,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
