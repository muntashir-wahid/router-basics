import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productName } = useParams();
  return (
    <div>
      <h2>Details about {productName}</h2>
    </div>
  );
};

export default ProductDetails;
