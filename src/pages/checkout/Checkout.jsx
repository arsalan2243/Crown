import React from "react"
import "./checkout.scss"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
  selecCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors"
import CheckoutItem from "../../components/checkoutItem/CheckoutItem"
const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page ">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selecCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps, {})(Checkout)
