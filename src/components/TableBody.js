import React from 'react';
//import '../styles/index.css'

const TableBody = (props) => {
    
    return (
        <tr>
            <th scope="row">{props.name.last}</th>
            <td>{props.name.first}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            {/* <td>{props.picture.thumbnail}</td> */}
            <td><img src={props.picture.thumbnail} alt={'profile pic'} /></td>
        </tr>
    )
}

export default TableBody;