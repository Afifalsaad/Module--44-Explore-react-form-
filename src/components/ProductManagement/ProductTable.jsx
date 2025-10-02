import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <table>
        <tr>
          <th>No.</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Action</th>
        </tr>
        <tbody>
          {products.map((product, index) => 
            <tr key={index}>
              <th>{index + 1}</th>
              <th>{product.name}</th>
              <th>{product.price}</th>
              <th>{product.quantity}</th>
              <th></th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
