import React from "react";
import PropTypes from "prop-types";
import "./collection-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview";
import { connect } from "react-redux";

const CollectionOverview = ({ collections, history, match }) => {
  console.log(collections);
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

CollectionOverview.propTypes = {};

const mapStateToProps = state => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionOverview);
