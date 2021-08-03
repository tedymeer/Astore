import React, { useState } from 'react'
import axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './viewproducts.css'

import './viewadmins.css'
function ViewAdmins() {
    const[Admins,setAdmins]=useState(null)

//GET request to display all Admins
    axios.get('http://localhost:8000/viewadmins', 
    {withCredentials: true}).then(
        (res)=>{
        //   console.log(res.data)
        setAdmins(res.data)
        });


    return (
        <div className="table-wrap">
            <div className="p-head">Admins list</div>
        <Table>
      <Thead>
        <Tr>
          <Th>USERNAME</Th>
          <Th>FULL NAME</Th>
        </Tr>
      </Thead>
      <Tbody>
      {
            // Admins.map((cval,cindex)=>{
            //     return(
            //     <Tr>
            //     <Td>{cval.username}</Td>
            //     <Td>{cval.fullname}</Td>
            //     </Tr>
            //     )
            // })
        }
                <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               </Tr>
               <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               </Tr>
               <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               </Tr>
               <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               </Tr>
      </Tbody>
    </Table>
    </div>
    )
}

export default ViewAdmins
