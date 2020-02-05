import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Collection from "./collection.component";

const mapStateToProps = state => ({
  isloading: state.shop.isFetching
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
