import React, {Component} from 'react';
import Table from '../Table/Table';
import data from '../Data';

const dataKeys = [
    'book',
    'readStatus',
    'percent',
];

class BooksTable extends Component{
    render(){
        return <Table data={data} columnNames={dataKeys} />;
    }
}
export default BooksTable;

