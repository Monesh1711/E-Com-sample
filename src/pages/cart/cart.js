import React, { useState, useEffect } from "react";
import axios from "axios";

import baseURL from "../../utils/api";

const Cart = () => {
  const [userData, getUserCartData] = useState([]);

  const getUserCart = async () => {
    try {
      let response = await axios.get(`${baseURL}carts/user/2`);
      if (response.status === 200) {
        getUserCartData(response.data[0]);
      } else {
        alert("Something Went Wrong");
      }
    } catch (error) {
      // setError(error)
    }
  };

  useEffect(() => getUserCart(), []);

  return (
    <div>
      <div>{userData.id}</div>
      <div>
        <span>Date : </span> <span>{userData.date}</span>
      </div>
      <div>
        {/* {userData.products.map((product) => (
          <div> < span > {product.productId}</span>
            < span > {product.quantity}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Cart;
