import React from 'react';

const TableBody = (props) => {
    
    return (
    
        <tr>
            <td>{props.name.last}</td>
            <td>{props.name.first}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            {/* <td>{props.picture.thumbnail}</td> */}
            <td><img src={props.picture.thumbnail} alt={'profile pic'} /></td>
        </tr>

    )
}

export default TableBody;