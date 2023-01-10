import React from 'react'
import Nav from '../Components/Nav'
import { useSelector } from 'react-redux'
const Cart = () => {
    const items = useSelector((state) => state.cart)
    return (
        <div>
            <Nav />
            {
                items.map(item => (
                    <div key={item.id} className='productCard'>
                        <div className='productImg'>
                            <img src={item.image} alt="" />

                        </div>
                        <div className='productDesc'>
                            <div>
                                <h2>
                                    {item.title}

                                </h2>
                                <span>
                                    {item.rating['rate']} ⭐

                                </span>
                                <br />
                                <span>
                                    ({item.rating['count']} ratings)
                                </span>
                                <p>
                                    {item.description}
                                </p>

                            </div>
                            <div className='productPrice'>{
                                item.price
                            }</div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart
