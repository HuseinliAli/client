import CategoryList from "./CategoryList";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
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
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
