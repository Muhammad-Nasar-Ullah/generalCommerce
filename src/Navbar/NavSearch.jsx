import React from 'react'
import search from '../assets/search.png'

const NavSearch = () => {
    return (
        <div className='flex justify-between bg-white items-center rounded-full'>
            <input type="text" className='bg-white w-[300px] focus:border-none outline-none rounded-l-full py-3 px-4 ' placeholder='search...' />
            <button className='w-10 h-10 rounded-r-full p-2'>
                <img className='scale-150' src={search} alt="search" />
            </button>
        </div>
    )
}

export default NavSearch