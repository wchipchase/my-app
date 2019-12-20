import React from 'react';

function Products(props) {
  return(
    <div className = "products">
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
    </div>
  )
}

export default Products;