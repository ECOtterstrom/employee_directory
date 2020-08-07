import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
//import '../styles/index.css'

const Table = (props) => {

    return (
        <div className="Container">
            <div className="row">
                <table className='table'>
                    <thead>
                        <TableHead handleSort={props.handleSort} />
                    </thead>
                    <tbody>
                        {props.users.map((user) => <TableBody key={user._id} {...user} />)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Table;   