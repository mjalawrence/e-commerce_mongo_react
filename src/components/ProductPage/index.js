import {useEffect, useState} from "react"
import './/ProductPage.scss'
import ProductCard from '../ProductCard'

const ProductPage = ({activeCategoryFilter, activeCharacterFilter}) => {

    const [productData, setProductData] = useState([])

    useEffect(() => {
            console.log(activeCategoryFilter)
            console.log(activeCharacterFilter)

        if (Object.keys(activeCategoryFilter).length !== 0 && Object.keys(activeCharacterFilter).length !== 0)
        {
            fetch(`http://localhost:3001/products?${activeCategoryFilter.title}=${activeCategoryFilter.option}&${activeCharacterFilter.title}=${activeCharacterFilter.option}`)
                .then(response => response.json())
                .then(data => {
                    setProductData(data)
                })
        } else if (Object.keys(activeCategoryFilter).length === 0 && Object.keys(activeCharacterFilter).length !== 0) {
            fetch(`http://localhost:3001/products?${activeCharacterFilter.title}=${activeCharacterFilter.option}`)
                    .then(response => response.json())
                    .then(data => {
                        setProductData(data)
                    })
        } else if (Object.keys(activeCategoryFilter).length !== 0 && Object.keys(activeCharacterFilter).length === 0) {
            fetch(`http://localhost:3001/products?${activeCategoryFilter.title}=${activeCategoryFilter.option}`)
                .then(response => response.json())
                .then(data => {
                    setProductData(data)
                })
        } else {
            fetch(`http://localhost:3001/products`)

                .then(response => response.json())
                .then(data => {
                    setProductData(data)
                })
        }
    }, [activeCategoryFilter, activeCharacterFilter])

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
