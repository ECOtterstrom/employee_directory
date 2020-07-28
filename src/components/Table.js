import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
// import API from ./utils/API;

const Table = (props) => {
    
    return (
        <table>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {props.users.map(user => <TableBody {...user} />)}
            </tbody>
        </table>
    )
}

export default Table;   