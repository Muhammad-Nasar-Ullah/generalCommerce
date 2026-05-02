import React from 'react';

const EmailTemplate = ({ name, email, phone, title, message }) => {
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
                        New Inquiry
                    </h1>
                    <p style={{ 
                        margin: '10px 0 0', 
                        fontSize: '16px', 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: '500'
                    }}>
                        General Commerce Customer Support
                    </p>
                </div>

                {/* Content */}
                <div style={{ padding: '40px 30px' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', borderBottom: `2px solid ${bgColor}`, paddingBottom: '10px' }}>
                            Message Details
                        </h2>
                        
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top', width: '100px' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <a href={`mailto:${email}`} style={{ fontSize: '16px', fontWeight: '600', color: primaryColor, textDecoration: 'none' }}>{email}</a>
                                    </td>
                                </tr>
                                {phone && (
                                    <tr>
                                        <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                            <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</span>
                                        </td>
                                        <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                            <a href={`tel:${phone}`} style={{ fontSize: '16px', fontWeight: '600', color: textColor, textDecoration: 'none' }}>{phone}</a>
                                        </td>
                                    </tr>
                                )}
                                <tr>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subject</span>
                                    </td>
                                    <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                                        <span style={{ fontSize: '16px', fontWeight: '600', color: textColor }}>{title}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <span style={{ fontSize: '12px', fontWeight: '700', color: lightText, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '12px' }}>
                            Message Content
                        </span>
                        <div style={{ 
                            backgroundColor: '#f3f4f6', 
                            padding: '24px', 
                            borderRadius: '12px', 
                            fontSize: '16px', 
                            lineHeight: '1.6', 
                            color: '#374151',
                            whiteSpace: 'pre-wrap', // Preserves newlines from textarea
                            borderLeft: `4px solid ${primaryColor}`
                        }}>
                            {message}
                        </div>
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
                        This message was sent via the General Commerce contact form.
                    </p>
                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                        &copy; {new Date().getFullYear()} General Commerce. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailTemplate;
