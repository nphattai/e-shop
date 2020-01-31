import React from "react";
import PropTypes from "prop-types";
import "./cart-dropdown.styles.scss";
import CustomButton from "../../custom-button/custom-button.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
