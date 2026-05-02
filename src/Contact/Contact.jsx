import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { renderToStaticMarkup } from 'react-dom/server'
import EmailTemplate from './EmailTemplate'

import facebook_logo from '../assets/facebook.png';
import instagram_logo from '../assets/instagram.png';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e) => {
        let input = e.target.value;

        // If starting to type and doesn't have +, add it
        if (input && !input.startsWith('+')) {
            input = '+' + input;
        }

        // Extract only digits to re-format
        const digits = input.replace(/[^\d]/g, '');

        let formatted = '';
        if (input.startsWith('+') || digits.length > 0) {
            formatted = '+';

            // Pattern: +92 340 047-6825
            if (digits.length > 0) {
                // Country Code (up to 2 digits)
                formatted += digits.substring(0, 2);

                if (digits.length > 2) {
                    // Space + Network Code (up to 3 digits)
                    formatted += ' ' + digits.substring(2, 5);
                }
                if (digits.length > 5) {
                    // Space + First Part (up to 3 digits)
                    formatted += ' ' + digits.substring(5, 8);
                }
                if (digits.length > 8) {
                    // Hyphen + Last Part (up to 4 digits)
                    formatted += '-' + digits.substring(8, 12);
                }
            }
        }

        setPhone(formatted);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(form.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('user_phone');
        const title = formData.get('title');
        const message = formData.get('html_content');

        // Render the React component to a static HTML string
        const emailHtml = renderToStaticMarkup(
            <EmailTemplate
                name={name}
                email={email}
                phone={phone}
                title={title}
                message={message}
            />
        );

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            title: title,
            html: {
                content: emailHtml // Matches {{{html.content}}} in EmailJS
            }
        };

        emailjs.send(
            'service_8pign3d',
            'template_wk1avfd',
            templateParams,
            'lbuIy5BK3wAd19u3M'
        )
            .then((result) => {
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                form.current.reset();
                setPhone('');
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-10 mt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8">Contact Us</h1>
            <div className="flex sm:flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-14">
                {/* Contact Information */}
                <div className="space-y-6 sm:space-y-8">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                            We'd love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Email Us</p>
                                <a href="mailto:nasarbutt20@gmail.com" className="text-base sm:text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors">
                                    nasarbutt20@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.689l1.598 4.793a1 1 0 01-.948 1.359L9 11l-.832 2.496a1 1 0 01-.948.689L3 15V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Call Us</p>
                                <a href="tel:+923400476825" className="text-base sm:text-lg font-medium text-gray-900 hover:text-amber-600 transition-colors">
                                    +92 (340) 047-6825
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="p-3 bg-white rounded-lg shadow-sm">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Visit Us</p>
                                <p className="text-base sm:text-lg font-medium text-gray-900">
                                    123 General Commerce St<br />
                                    Suite 456, Cityville, ST 12345
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/1CriRyvwVs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 hover:bg-amber-50 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-sm border border-gray-100">
                                <img src={facebook_logo} alt="facebook" className="w-6 h-6 text-amber-600" />
                            </a>
                            <a href="https://www.instagram.com/itx.nasarbutt?igsh=MWVoeWFtbWE5bTM2aA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 hover:bg-amber-50 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-sm border border-gray-100">
                                <img src={instagram_logo} alt="instagram" className="w-6 h-6 text-amber-600" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="user_phone"
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                placeholder="+00 000 000-0000"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="title"
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                placeholder="How can we help you?"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="html_content"
                                rows="4"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-base sm:text-lg rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl transform ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>

                        {status.message && (
                            <div className={`mt-4 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact
