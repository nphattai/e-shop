import React from "react";
import "./with-spinner.styles.scss";

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isloading, ...otherProps }) => {
    return isloading ? (
      <div className='spinner-over-lay'>
        <div className='spinner-container'></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
