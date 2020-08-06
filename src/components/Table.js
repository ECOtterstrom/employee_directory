import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = (props) => {
    return (
        <table>
            <thead>
                <TableHead handleSort={props.handleSort} />
            </thead>
            <tbody>
                {props.users.map((user) => <TableBody key={user._id} {...user} />)}
            </tbody>
        </table>
    )
}

export default Table;   