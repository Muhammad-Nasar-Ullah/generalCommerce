import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { renderToStaticMarkup } from 'react-dom/server';
import { useNavigate } from 'react-router-dom';
import CheckoutEmailTemplate from './CheckoutEmailTemplate';

const Checkout = ({ addedProducts, setAddedProducts }) => {
    const navigate = useNavigate();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        postalCode: '',
        city: '',
        address: '',
        phone: '',
        addressCategory: 'Home'
    });

    const totalPrice = addedProducts.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0).toFixed(2);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        
        if (addedProducts.length === 0) {
            setStatus({ type: 'error', message: 'Your cart is empty!' });
            return;
        }

        setIsSending(true);
        setStatus({ type: '', message: '' });

        try {
            // Render email template to static HTML
            const emailHtml = renderToStaticMarkup(
                <CheckoutEmailTemplate 
                    firstName={formData.firstName}
                    lastName={formData.lastName}
                    email={formData.email}
                    postalCode={formData.postalCode}
                    city={formData.city}
                    address={formData.address}
                    phone={formData.phone}
                    addressCategory={formData.addressCategory}
                    cartItems={addedProducts}
                    totalAmount={totalPrice}
                />
            );

            const templateParams = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                title: `New Order from ${formData.firstName}`,
                html: {
                    content: emailHtml
                }
            };

            await emailjs.send(
                'service_8pign3d',
                'template_wk1avfd',
                templateParams,
                'lbuIy5BK3wAd19u3M'
            );

            setStatus({ type: 'success', message: 'Order placed successfully! Check your email for confirmation.' });
            setAddedProducts([]); // Clear cart
            
            // Redirect after a short delay
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (error) {
            console.error('Order error:', error);
            setStatus({ type: 'error', message: 'Failed to place order. Please try again later.' });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-10 mt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Checkout</h1>
            
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Checkout Form */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                    <form onSubmit={handlePlaceOrder} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    name="firstName"
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    name="lastName"
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="+92 300 0000000"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Region / City / District</label>
                                <input
                                    name="city"
                                    type="text"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="e.g. Lahore, Punjab"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                <input
                                    name="postalCode"
                                    type="text"
                                    required
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
                                    placeholder="12345"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                            <textarea
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleChange}
                                rows="3"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none resize-none"
                                placeholder="House #, Street, Area..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Address Category</label>
                            <div className="flex gap-4">
                                {['Home', 'Office'].map((category) => (
                                    <label key={category} className={`flex-1 flex items-center justify-center py-3 px-4 border-2 rounded-xl cursor-pointer transition-all ${formData.addressCategory === category ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                                        <input
                                            type="radio"
                                            name="addressCategory"
                                            value={category}
                                            checked={formData.addressCategory === category}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="font-semibold">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSending || addedProducts.length === 0}
                                className={`w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-lg rounded-xl transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl transform ${isSending || addedProducts.length === 0 ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                {isSending ? 'Processing Order...' : `Place Order - $${totalPrice}`}
                            </button>
                        </div>

                        {status.message && (
                            <div className={`mt-4 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-[400px] bg-gray-50 rounded-2xl p-6 sm:p-8 h-fit border border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
                        {addedProducts.map((product, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <img src={product.images[0]} alt={product.title} className="w-16 h-16 object-contain rounded-lg bg-white p-1 border border-gray-100" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-semibold text-gray-800 truncate">{product.title}</h3>
                                    <p className="text-xs text-gray-500">Qty: {product.quantity || 1}</p>
                                </div>
                                <span className="text-sm font-bold text-gray-900">${(product.price * (product.quantity || 1)).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${totalPrice}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                            <span>Total</span>
                            <span className="text-amber-600">${totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
