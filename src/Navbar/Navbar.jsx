import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'
import NavSearch from './NavSearch'
import cart from '../assets/cart.png'
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between h-20 bg-gray-200 py-2 px-10 rounded-xl'>
            <div className='flex justify-center items-center gap-10'>
                <NavMenu />
                <Link to="/">
                    <div className='flex justify-center items-end'>
                        <p className='text-4xl font-bold text-orange-400'>E</p>
                        <p className='text-2xl font-bold text-gray-950'>COMMERCE</p>
                    </div>
                </Link>
            </div>
            <NavSearch />

            <div>
                <ul className='flex justify-center itmes-center gap-10'>
                    <li><Link to='/cart'><img className='w-7 h-7' src={cart} alt="cart" /></Link></li>
                    <li><Link to='/user'><img className='w-7 h-7' src={user} alt="user" /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar