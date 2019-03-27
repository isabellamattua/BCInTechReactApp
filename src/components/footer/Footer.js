import React from 'react';

const footerStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
};

export const Footer = () => {
    return (
        <div style={footerStyles}>
            <h1>This is my Footer</h1>
        </div>
    );
};