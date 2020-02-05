import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter, Link } from "react-router-dom";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, routeName, match }) => {
  return (
    <div className='collection-preview'>
      <Link to={`${match.url}/${routeName}`} target='_self'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>
      <div className='preview'>
        {items
          .filter(item => items.indexOf(item) < 4)
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

export default withRouter(CollectionPreview);
