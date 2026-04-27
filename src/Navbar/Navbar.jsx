import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import cart from '../assets/cart.png'
import user from '../assets/user.png'
import Cart from './Cart'

const Navbar = ({ addedProducts, setAddedProducts, showCart, setShowCart, search, setSearch }) => {
    return (
        <nav className='flex items-center justify-between h-20 bg-gray-200 my-2 py-2 px-10 rounded-xl'>
            <div className='flex justify-center items-center gap-10'>
                <NavMenu />
                <Link to="/">
                    <div className='flex justify-center items-end'>
                        <p className='text-4xl font-bold text-amber-600'>E</p>
                        <p className='text-2xl font-bold text-gray-950'>COMMERCE</p>
                    </div>
                </Link>
            </div>
            <NavSearch search={search} setSearch={setSearch} />

            <div>
                <ul className='flex justify-center itmes-center gap-5'>
                    <li className='bg-white rounded-full p-4 relative cursor-pointer' >
                        <Cart cartIcon={cart} addedProducts={addedProducts} setAddedProducts={setAddedProducts} showCart={showCart} setShowCart={setShowCart} />
                    </li>
                    <li className='bg-white rounded-full p-4'><Link to='/user'><img className='w-5 h-5' src={user} alt="user" /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar