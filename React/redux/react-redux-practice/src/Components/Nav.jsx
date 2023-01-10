import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = () => {
    const items = useSelector((state) => state.cart)
    // console.log(items);
    const [cartItems, setCartItems] = useState([])
    return (
        <header >
            <nav>
                <Link to='/'>Home</Link>
                {/* <Link to='/cart'>Cart {cartItems.length}</Link> */}
                <Link to='/cart'>Cart {items.length}</Link>
            </nav>
        </header>
    )
}

export default Nav
