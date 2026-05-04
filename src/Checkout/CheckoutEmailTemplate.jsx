import React from 'react';

const CheckoutEmailTemplate = ({ firstName, lastName, email, postalCode, city, address, phone, addressCategory, cartItems, totalAmount }) => {
    const primaryColor = '#f59e0b';
    const secondaryColor = '#ea580c';
    const textColor = '#1f2937';
    const lightText = '#6b7280';
    const bgColor = '#f9fafb';

    return (
        <div style={{
            fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            backgroundColor: bgColor,
            padding: '40px 20px',
            color: textColor
        }}>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
                {/* Header */}
                <div style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                    padding: '40px 30px',
                    textAlign: 'center'
                }}>
                    <h1 style={{ 
                        margin: 0, 
                        fontSize: '28px', 
                        fontWeight: '800', 
                        color: '#ffffff',
                        letterSpacing: '-0.025em'
                    }}>
                        Order Confirmation
                    </h1>
                    <p style={{ 
                        margin: '10px 0 0', 
                        fontSize: '16px', 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500'
                    }}>
                        Thank you for your purchase, {firstName}!
                    </p>
                </div>

                {/* Content */}
                <div style={{ padding: '40px 30px' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', borderBottom: `2px solid ${bgColor}`, paddingBottom: '10px' }}>
                            Shipping & Contact Details
                        </h2>
                        
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top', width: '140px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer Name</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{firstName} {lastName}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{email}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{phone}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>City / District</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{city}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Address</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{address} ({addressCategory})</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Postal Code</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{postalCode}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', borderBottom: `2px solid ${bgColor}`, paddingBottom: '10px' }}>
                            Order Summary
                        </h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'left', padding: '12px 8px', fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', borderBottom: `1px solid ${bgColor}` }}>Item</th>
                                    <th style={{ textAlign: 'center', padding: '12px 8px', fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', borderBottom: `1px solid ${bgColor}` }}>Qty</th>
                                    <th style={{ textAlign: 'right', padding: '12px 8px', fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', borderBottom: `1px solid ${bgColor}` }}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ padding: '12px 8px', borderBottom: `1px solid ${bgColor}` }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600', color: textColor }}>{item.title}</span>
                                        </td>
                                        <td style={{ padding: '12px 8px', textAlign: 'center', borderBottom: `1px solid ${bgColor}` }}>
                                            <span style={{ fontSize: '14px', color: textColor }}>{item.quantity || 1}</span>
                                        </td>
                                        <td style={{ padding: '12px 8px', textAlign: 'right', borderBottom: `1px solid ${bgColor}` }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600', color: textColor }}>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2" style={{ padding: '20px 8px 12px', textAlign: 'right' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '700', color: textColor }}>Total Amount</span>
                                    </td>
                                    <td style={{ padding: '20px 8px 12px', textAlign: 'right' }}>
                                        <span style={{ fontSize: '20px', fontWeight: '800', color: primaryColor }}>${totalAmount}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div style={{ 
                    padding: '30px', 
                    textAlign: 'center', 
                    borderTop: '1px solid #f3f4f6',
                    backgroundColor: '#fafafa'
                }}>
                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: lightText }}>
                        We're processing your order and will notify you when it ships.
                    </p>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                        &copy; {new Date().getFullYear()} General Commerce. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutEmailTemplate;
