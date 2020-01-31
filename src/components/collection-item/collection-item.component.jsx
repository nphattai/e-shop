import React from "react";
import PropTypes from "prop-types";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}$</span>
      </div>
      <CustomButton
        onClick={() =>
          addItem({
            id,
            name,
            price,
            imageUrl
          })
        }
        inverted={true}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {};

export default connect(null, { addItem })(CollectionItem);
