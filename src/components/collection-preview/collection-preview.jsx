import React from "react";
import PropTypes from "prop-types";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter(({ id }) => id < 5)
          .map(({ id, name, imageUrl, price }) => (
            <CollectionItem
              key={id}
              id={id}
              name={name}
              imageUrl={imageUrl}
              price={price}
            />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {};

export default CollectionPreview;
