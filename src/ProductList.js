import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h5>
          {this.props.info.title} - {this.props.currentCategory}
        </h5>

        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
