import React from "react";
//import Button from './Button';

const TableHead = (props) => {
    return (
            <tr>
                <td onClick={() => props.handleSort()}>Last Name</td>
                {/* <td>Last Name</td> */}
                <td>First Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Picture</td>
            </tr>
    )    
}

export default TableHead;