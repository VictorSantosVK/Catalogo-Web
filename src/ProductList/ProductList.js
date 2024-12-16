import React from "react";
import ProductItem from "../ProductItem/ProductItem";

function ProductList({ products }) {
  return (
    <div className="product-list row mt-4">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
