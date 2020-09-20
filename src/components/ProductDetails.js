import React from 'react';

function ProductDetails(props) {
  return (
    <React.Fragment>
      <h1>Product Details - {props.match.params.id}</h1>
    </React.Fragment>
  );
}

export default ProductDetails;
