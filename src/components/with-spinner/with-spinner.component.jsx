import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = (WrappedConponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <WrappedConponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
