import React from 'react';

const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
};

export const Header = () => {
    return (
        <div style={headerStyles}>
            <h1>This is my Header</h1>
        </div>
    );
};