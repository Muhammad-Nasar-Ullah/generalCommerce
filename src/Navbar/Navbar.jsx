import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import cart from '../assets/cart.png'
import user from '../assets/user.png'
import Cart from './Cart'
import filledHeart from '../assets/filledHeart.png'

const Navbar = ({ products, addedProducts, setAddedProducts, likedProducts, showCart, setShowCart, search, setSearch }) => {
    return (
        <nav className='flex items-center fixed top-0 z-40 w-full h-[85px] justify-between bg-gray-800 gap-5 sm:gap-3 py-2 px-2 sm:px-10 lg:px-20 rounded-b-xl '>
            <div className='flex justify-center items-center gap-1'>
                <NavMenu search={search} setSearch={setSearch} />
                <Link to="/">
                    <div className='flex justify-center items-end'>
                        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-600'>E</p>
                        <p className='text-2xl sm:text-2xl lg:text-3xl font-bold text-white'>COMMERCE</p>
                    </div>
                </Link>
            </div>

            <div className='md:hidden hidden lg:flex'>
                <NavSearch search={search} setSearch={setSearch} />
            </div>

            <div>
                <ul className='flex justify-center itmes-center bg-white rounded-full py-2 px-5  gap-5'>
                    <Link to='/liked'><li className='relative cursor-pointer text-xl flex items-center justify-center'><img src={filledHeart} alt="liked" className='w-6 h-6' />
                        {likedProducts.length > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                                {likedProducts.length}
                            </span>
                        )}
                    </li></Link>
                    <li className='relative flex items-center justify-center cursor-pointer' >
                        <Cart cartIcon={cart} products={products} addedProducts={addedProducts} setAddedProducts={setAddedProducts} showCart={showCart} setShowCart={setShowCart} />
                    </li>
                    <li className='cursor-pointer flex items-center justify-center'><Link to='/user'><img className='w-5 h-5' src={user} alt="user" /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar