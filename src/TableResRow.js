import React from 'react';
import './TableRes.css';

const TableResRow = ({ data, ready }) => {
    let k = 0;
    let td = data.map((v) => {

        return (v === 'P') ? <td key={k++} className="TableResP">{v}</td> : ((v === 'S') ? <td key={k++} className="TableResS">{v}</td> : ((v ==='E') ? <td key={k++} className="TableResE">{v}</td> : ((v ==='X') ? <td key={k++} className="TableResX">{v}</td> : <td key={k++}>N</td>)))
    });
    return (
        ready ? <table className="ResTableMain"><tbody><tr>{td}</tr></tbody></table> : <div></div>
    );
}
export default TableResRow;
