import { useState } from 'react'
import searchIcon from '../assets/search.png'

const NavSearch = ({ search, setSearch }) => {

    const [query, setQuery] = useState('')

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleSearchClick()
        }
    })

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const handleSearchClick = () => {
        setSearch(query)
    }

    return (
        <div className='flex justify-between bg-white items-center rounded-full'>
            <input type="text" className='bg-white lg:w-[400px] sm:w-full md:w-full focus:border-none outline-none rounded-l-full py-2 px-4 ' placeholder='Search Products....' value={query} onChange={handleSearch} />
            <button onClick={handleSearchClick} className='w-10 h-10 rounded-r-full p-2 bg-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-300' style={{ cursor: 'pointer' }}>
                <img className='scale-200' src={searchIcon} alt="search" />
            </button>
        </div>
    )
}

export default NavSearch