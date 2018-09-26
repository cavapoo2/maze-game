import React from 'react';
import PropTypes from 'prop-types';
//import './TextArea.css';
const TextArea = ({text,rows,cols}) => {
    return(
    <textarea rows={rows} cols={cols}>{text}</textarea>
    );
}

TextArea.protoType = {
    text: PropTypes.string,
    rows:PropTypes.string,
    cols:PropTypes.string,
}
export default TextArea;