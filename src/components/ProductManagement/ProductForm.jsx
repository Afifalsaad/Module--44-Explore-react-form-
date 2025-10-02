import React, { useState } from "react";

const ProductForm = ({ handleProducts }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    // Validation
    if (name.length === 0) {
      setError("Please choose a product");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price");
      return;
    } else if (price <= 0) {
      setError("Price can not be negative");
      return;
    }

    const newProduct = {
      name,
      price,
      quantity,
    };

    handleProducts(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
