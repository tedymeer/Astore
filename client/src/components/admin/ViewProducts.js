import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './viewproducts.css'
function ViewProducts() {
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
        <Tr>
          <Td>25D</Td>
          <Td>BLUE JEANS</Td>
          <Td>50</Td>
        </Tr>
        <Tr>
          <Td>25D</Td>
          <Td>BLUE JEANS</Td>
          <Td>50</Td>
        </Tr>
        <Tr>
          <Td>25D</Td>
          <Td>BLUE JEANS</Td>
          <Td>50</Td>
        </Tr>
        <Tr>
          <Td>25D</Td>
          <Td>BLUE JEANS</Td>
          <Td>50</Td>
        </Tr>
      </Tbody>
    </Table>
    </div>
    )
}

export default ViewProducts
