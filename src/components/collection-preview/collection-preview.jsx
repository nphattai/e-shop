import React from "react";
import PropTypes from "prop-types";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, routeName, match }) => {
  console.log({ history, match });
  return (
    <div className='collection-preview'>
      <h1
        className='title'
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
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

export default withRouter(CollectionPreview);
