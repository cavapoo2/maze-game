import React, { Component } from 'react';
import './TableRow.css';
class TableRow extends Component {
    render() {
        let {data,func,row} = this.props;
        let k=0;
        let td = data.map((v,col) => {
                return (
                <td key={k++}><input type="text" value={v} onChange={(e) => func(row,col,e)} /></td>
                );
        
        });

        return (
            <div>
            <table>
                <tbody>
                    <tr>
                        {td}
                    </tr>
                </tbody>
            </table>
            </div>
        );

    }
}
export default TableRow;