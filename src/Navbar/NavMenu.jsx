import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const NavMenu = () => {
    return (
        <>
            <Menu as="div" className="relative inline-block focus-border-none">
                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-lg font-semibold text-black hover:bg-white/20">
                    Menu
                    <ChevronDownIcon aria-hidden="true" className=" size-5 text-gray-400 transition" />
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute left-0 z-10 mt-2 w-40 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <Link
                                to="/"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/products"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Products
                            </Link>
                        </MenuItem>
                    </div>
                    <div className="py-1">
                        <MenuItem>
                            <Link
                                to="/about"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                About Us
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                to="/contact"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Contact
                            </Link>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu></>
    )
}

export default NavMenu