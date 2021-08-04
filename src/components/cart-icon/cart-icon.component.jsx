import React from "react";
import "./cart-icon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({itemCount,dispatch}) => {
  // console.log(props)
  return(
  <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
  );
};

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});


export default connect(mapStateToProps)(CartIcon);
