import React, { Component } from 'react';
import TableRow from './TableRow';


class Table extends Component{
    render(){
        const { data, columnNames } = this.props; // array
        return (
            <table>
                {
                    data.map( datarRow =>
                         <TableRow  row={datarRow} columnNames={columnNames} />
                        )
                }        
            </table>
        )
    }
}
export default Table;