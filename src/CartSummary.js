import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
export default class CartSummary extends Component {
  renderCartSummary() {
    return (
      <UncontrolledDropdown nav right>
        <DropdownToggle nav caret>
          Cart <Badge color="dark"> {this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={(oroduct) =>
                  this.props.removeFromCart(cartItem.product)
                }
              >
                X
              </Badge>
              {cartItem.product.productName}{" "}
              <Badge color="dark">{cartItem.quantity}</Badge>
              {}
            </DropdownItem>
          ))}

          <divider />
          <DropdownItem>
            <Link to="/cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart() {
    return (
      <div>
        {" "}
        <DropdownToggle nav caret>
          Cart <Badge color="dark"> {this.props.cart.length}</Badge>
        </DropdownToggle>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderCartSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
