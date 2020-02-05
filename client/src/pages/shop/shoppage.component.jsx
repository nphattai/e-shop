import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container.component";
import CollectionContainer from "../collection/collection.container.component";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    // Use Thunk Middleware
    // fetchCollectionsStartAsync();

    // Use Saga Middleware
    fetchCollectionsStart();
    return () => console.log("Unmounting...");
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        // render={props => (
        //   <CollectionOverviewWithSpinner isloading={isFetching} {...props} />
        // )}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        // render={props => (
        //   <CollectionWithSpinner isloading={isFetching} {...props} />
        // )}
        component={CollectionContainer}
      />
    </div>
  );
};

export default connect(null, {
  // fetchCollectionsStartAsync
  fetchCollectionsStart
})(ShopPage);
