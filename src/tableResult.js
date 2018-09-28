import React from 'react';
import PropTypes from 'prop-types';
import TableResRow from './TableResRow';
const TableResult = ({data,ready}) => {
	let k=0;
	let t = data.map((row) => {
		return (
			<TableResRow key={k++} data={row} ready={ready}/>
		)
	});
	return (
		<div>{t}</div>
	)
}


TableResult.protoType = {
    data: PropTypes.array,
    ready: PropTypes.bool,
}
export default TableResult;