import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
const AllProducts = () => {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            let res = await fetch('https://fakestoreapi.com/products')
            let response = await res.json();
            setProducts(response)
        }
        fetchProducts()
    }, [])
    const addToCart = (product) => {
        dispatch(add(product))
    }

    return (
        <div>
            {
                products.map(product => (
                    <div key={product.id} className='productCard'>
                        <div className='productImg'>
                            <img src={product.image} alt="" />

                        </div>
                        <div className='productDesc'>
                            <div>
                                <h2>
                                    {product.title}

                                </h2>
                                <span>
                                    {product.rating['rate']} ⭐

                                </span>
                                <br />
                                <span>
                                    ({product.rating['count']} ratings)
                                </span>
                                <p>
                                    {product.description}
                                </p>

                            </div>
                            <div className='productPrice'>{
                                product.price
                            }</div>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts
