import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Products.css'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([])



    useEffect(() => {
        axios('https://dummyjson.com/products')
        .then(response => setData(response.data.products))
        .catch(error => console.log(error))
    }, [])

    console.log(data);
  return (
    <section className='products'>
        <div className='container'>
            <div className='products__wrapper'>
                {
                    data.map((product, index) => (
                        <Link target='blank' to={`/products/${product.id}`} className='products__card' key={index}>
                            <div className='products__card--top'>
                                <img width={190} height={100} src={product.thumbnail} alt="" />
                            </div>
                            <div className='products__card--bottom'>
                                <div className='products__card--bottom--price-and-description'>
                                    <h3>{product.title}</h3>
                                    <strong>{product.price}$</strong>
                                </div>
                                <p>{product.description}</p>
                                <div className='rating'>
                                    <FaStar className='star'/> 
                                    <strong>{product.rating}</strong>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Products

//https://dummyjson.com/products