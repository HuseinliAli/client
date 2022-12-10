import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {
  state = { currentCategory: "" };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    let categoryInfo = { title: "Categories" };
    let productInfo = { title: "Products" };
    return (
      <div>
        <Container>
          <Row>
            <Navbar />
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
