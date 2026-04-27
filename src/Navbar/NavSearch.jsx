import React from 'react'
import searchIcon from '../assets/search.png'

const NavSearch = ({ search, setSearch }) => {

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='flex justify-between bg-white items-center rounded-full'>
            <input type="text" className='bg-white w-[400px] focus:border-none outline-none rounded-l-full py-2 px-4 ' placeholder='search...' value={search} onChange={handleSearch} />
            <button className='w-10 h-10 rounded-r-full p-2'>
                <img className='scale-150' src={searchIcon} alt="search" />
            </button>
        </div>
    )
}

export default NavSearch