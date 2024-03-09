import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { FaStar } from "react-icons/fa6";

const ProductInfo = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
    .then(response => setProduct(response.data))
    .catch(error => console.log(error))
  }, [])

  console.log(product);
  return (
    <div>
      {
        product &&
        <div className="single-product-wrapper">
          <h2 className="category">{product.category}</h2>
          <div className="single-product">
          <div className="single-product-img">
            <img width={600} height={400} src={product.thumbnail} alt="" />
          </div>
          <div className="single-product-info">
              <h1>Model: {product.title}</h1>
              <h2>Brand: {product.brand}</h2>
              <div className="single-product-info-prices">
              <div className="single-product-info-price">
                  <strong className="str">{product.price}$</strong>
              </div>
              <div className="single-product-rating">
                <strong className="str">{product.rating}</strong>
                <FaStar className='single-product-star'/> 
              </div>
              </div>
          </div>
         </div>
         <div className="single-product-description">
            <h2>{product.description}</h2>
         </div>
        </div>
      }
    </div>
  )
}

export default ProductInfo