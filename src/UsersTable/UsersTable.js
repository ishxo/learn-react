import React, { Component } from 'react';
import Table from '../Table/Table';
import { usersData } from '../Data';

const dataKeys = [
    'userName',
    'name',
    'organization',
];

class UsersTable extends Component{
    render(){
        return <Table data={usersData} columnNames={dataKeys} />;
    }
}
export default UsersTable;