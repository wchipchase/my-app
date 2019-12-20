import React from 'react';

function Products(props) {
  return(
    <div className = "products">
      <p>Id: {props.item.id}</p>
      <p>Name: {props.item.name}</p>
      <p>Price: {props.item.price}</p>
      <p>Description: {props.item.description}</p>
    </div>
  )
}

export default Products;