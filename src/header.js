import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
const Header2 = ({text}) => {
    return(
    <h2>{text}</h2>
    );
}

Header2.protoType = {
    text: PropTypes.string,
}
export default Header2;