import React from 'react';

const cardStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const ulStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    listStyleType: 'none'
}

export const Card = (props) => {
    return (
        <div style={cardStyles}>
            <ul style={ulStyles}>
                <li>{props.student.firstName}</li>
                <li>{props.student.lastName}</li>
                <li>{props.student.studentID}</li>
                <li>{props.student.major}</li>
            </ul>
        </div>
    );
}