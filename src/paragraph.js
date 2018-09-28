import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';
const Paragraph = ({text,name}) => {
    return(
    <p className={name}>{text}</p>
    );
}

Paragraph.protoType = {
    text: PropTypes.string,
}
export default Paragraph;