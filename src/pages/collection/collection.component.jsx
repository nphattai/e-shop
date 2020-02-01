import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const Collection = ({ match, collection }) => {
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {collection.items.map(item => (
          <CollectionItem
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

Collection.propTypes = {};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    collection: state.shop.collections.find(
      collection => collection.routeName === props.match.params.collectionId
    )
  };
};

export default connect(mapStateToProps)(Collection);
