import React from "react"
import Product from './components/Products/Products';
import productData from './Data/vschoolProducts';
// import ContactCard from "./components/ContactCard/ContactCard";

function App() {
    const productComponent = productData.map(product => {
        return <Product key={product.id} id = {product.id} name = {product.name} price = {product.price} description = {product.description} />
    })
    return (

        <div>
            {productComponent}
        </div>
    )
}

export default App