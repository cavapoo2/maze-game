import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
const Button = ({text,handler}) => {
    return(
    <button className="Button1" onClick={handler}>{text}</button>
    );
}

Button.protoType = {
    text: PropTypes.string,
    handdler:PropTypes.func,
}
export default Button;