import React, { Component } from 'react';
import TableRow from './tableRow';
class Grid extends Component {
    render() {
        let { data, func } = this.props;
        let k = 0;
        let d = data.map((row, i) => {
            return (
                <TableRow key={k++} data={row} func={func} row={i} />
            );
        });
        return (
            <div>{d}</div>
        );
    }
}
export default Grid; 