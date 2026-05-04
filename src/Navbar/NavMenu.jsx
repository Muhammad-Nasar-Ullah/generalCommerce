import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import NavSearch from './NavSearch'


const NavMenu = ({ search, setSearch }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Trigger button */}
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-md sm:text-xl lg:text-2xl font-semibold text-white hover:bg-white/20 cursor-pointer"
            >
                Menu
                <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-270' : 'rotate-90'}`}
                />
            </button>

            {/* Dark Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Slide-in Drawer */}
            <div className={`fixed top-0 left-0 h-full w-80 bg-gray-800 z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <h2 className="text-2xl font-bold text-white">Menu</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-white text-2xl font-bold leading-none cursor-pointer transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Drawer Body */}
                <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-6">
                    {/* Search inside drawer for smaller screens */}
                    <div className='lg:hidden h-5 md:h-5 lg:h-0'>
                        <NavSearch search={search} setSearch={setSearch} />
                    </div>

                    <nav className="flex flex-col divide-y divide-white/10">
                        <div className="py-2">
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-lg text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/products"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-lg text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
                            >
                                Products
                            </Link>
                        </div>
                        <div className="py-2">
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-lg text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-lg text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavMenu