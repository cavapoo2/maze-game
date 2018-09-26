import React, { Component } from 'react';
//import './TableRow.css';
import TableRow from './tableRow';
class Grid extends Component {
    render() {
        let {data,func} = this.props;
        let k=0;
        let d = data.map((row,i) => {
            return (
                 <TableRow key={k++} data={row} func={func} row={i}/>
            );
        });
        return (
            <div>{d}</div>
        );
        /*
        for(let i=0; i < data.length; i++) {
            return <TableRow data={data[i]} func={func}/>
        }*/    

/*

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
*/
    }
}
export default Grid; 