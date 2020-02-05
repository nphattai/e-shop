import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const Collection = ({ collection }) => {
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map(item => (
          <CollectionItem
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    collection: state.shop.collections.find(
      collection => collection.routeName === props.match.params.collectionId
    )
  };
};

export default connect(mapStateToProps)(Collection);
