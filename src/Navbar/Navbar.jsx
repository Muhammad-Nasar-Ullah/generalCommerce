import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import cart from '../assets/cart.png'
import user from '../assets/user.png'

const Navbar = ({ addedProducts }) => {
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
            <NavSearch />

            <div>
                <ul className='flex justify-center itmes-center gap-5'>
                    <li className='bg-white rounded-full p-4 relative'>
                        <Link to='/cart'>
                            <img className='relative w-5 h-5' src={cart} alt="cart" />

                            {addedProducts.length > 0 && (
                                <span className="absolute top-3 right-2 w-5 h-5 flex items-center justify-center text-xs bg-red-600 text-white rounded-full px-1.5 -translate-y-1/2 translate-x-1/2">
                                    {addedProducts.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li className='bg-white rounded-full p-4'><Link to='/user'><img className='w-5 h-5' src={user} alt="user" /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar