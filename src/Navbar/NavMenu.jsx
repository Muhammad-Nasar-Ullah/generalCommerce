import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Trigger button */}
            <button className="inline-flex w-full justify-start items-center gap-x-1.5 rounded-md px-3 py-2 text-md font-semibold text-white hover:bg-white/20">
                Menu
                <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute left-0 z-10 mt-0 w-40 origin-top-left divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 shadow-lg">
                    <div className="py-1">
                        <Link
                            to="/"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Products
                        </Link>
                    </div>
                    <div className="py-1">
                        <Link
                            to="/about"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavMenu