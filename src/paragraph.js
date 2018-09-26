import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.css';
const Paragraph = ({text}) => {
    return(
    <p>{text}</p>
    );
}

Paragraph.protoType = {
    text: PropTypes.string,
}
export default Paragraph;