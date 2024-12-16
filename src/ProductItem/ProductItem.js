import React from "react";

function ProductItem({ product }) {
  const { title, image, price, category } = product;
  return (
    <div className="card h-100 shadow-sm border-1 rounded">
      <img
        src={image}
        alt={title}
        className="card-img-top p-2"
        style={{ height: "220px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-truncate text-primary">{title}</h5>
          <p className="card-text text-muted mb-2">{category}</p>
          <p className="card-text fw-bold text-success fs-5">
            R$ {price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
