import {useEffect, useState} from "react"
import './/ProductPage.scss'
import ProductCard from '../ProductCard'

const ProductPage = () => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/products")
            .then(response => response.json())
            .then(data => {
                setProductData(data)
            })
    }, [])

    // console.log(productData)
    let products = productData.map((product, index) => {
        return <ProductCard
                    key = {index}
                    title = {product.title}
                    price = {product.price}
                    image = {product.image}
                />
    })

    return (
        <main>
            <div className="products__grid">
                {products}
            </div>
        </main>
    )
}

export default ProductPage
