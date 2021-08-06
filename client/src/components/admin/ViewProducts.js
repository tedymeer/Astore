import React, { useState } from 'react'
import axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './viewproducts.css'
function ViewProducts() {
    const[products,setProducts]=useState(null)

//GET request to display all products
    axios.get('http://localhost:3001/product/list', 
    {withCredentials: true}).then(
        (res)=>{
        //   console.log(res.data)
        setProducts(res.data)
        });


    return (
        <div className="table-wrap">
            <div className="p-head">Products list</div>
        <Table>
      <Thead>
        <Tr>
          <Th>PID</Th>
          <Th>NAME</Th>
          <Th>QTY</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            // products.map((cval,cindex)=>{
            //     return(
            //     <Tr>
            //     <Td>{cval.pid}</Td>
            //     <Td>{cval.name}</Td>
            //     <Td>{cval.qty}</Td>
            //     </Tr>
            //     )
            // })
        }
      </Tbody>
    </Table>
    </div>
    )
}

export default ViewProducts
