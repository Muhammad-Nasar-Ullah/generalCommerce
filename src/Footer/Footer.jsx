import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8 px-10 mt-20 rounded-t-[50px] border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 max-w-[1400px] mx-auto">
                {/* Brand Column */}
                <div className="col-span-1">
                    <Link to="/">
                        <div className='flex items-end mb-6'>
                            <p className='text-4xl font-bold text-amber-600'>E</p>
                            <p className='text-2xl font-bold text-white'>COMMERCE</p>
                        </div>
                    </Link>
                    <p className="text-gray-500 leading-relaxed">
                        Redefining the online shopping experience with quality products and unparalleled service. We bring the best brands directly to you.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-amber-500 mb-6">Quick Links</h3>
                    <ul className="space-y-4">
                        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/liked" className="text-gray-400 hover:text-white transition-colors">Wishlist</Link></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-bold text-amber-500 mb-6">Support</h3>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold text-amber-500 mb-6">Get in Touch</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-center gap-3">
                            <span>📧</span> nasarbutt20@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <span>📞</span> +92 340 047-6825
                        </li>
                        <li className="flex items-center gap-3">
                            <span>📍</span> 123 Commerce St, Digital City
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm max-w-[1400px] mx-auto">
                <p>&copy; 2026 E-COMMERCE. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer