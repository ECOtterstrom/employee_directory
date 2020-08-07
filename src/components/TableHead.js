import React from "react";

const TableHead = (props) => {
    return (
            <tr>
                <th scope="col" onClick={() => props.handleSort()}>Last Name</th>
                {/* <th scope="col">Last Name</th> */}
                <th scope="col">First Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Picture</th>
            </tr>
    )    
}

export default TableHead;