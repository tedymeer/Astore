import React, { useState } from 'react'
import axios from 'axios'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './viewproducts.css'
import DeleteIcon from '@material-ui/icons/Delete';
import './viewadmins.css'
import RemoveAdmin from './RemoveAdmin'
function ViewAdmins() {
    const[Admins,setAdmins]=useState(null)


function RemoveAdmin(adminusername){

    axios.delete('http://localhost:8000/removeadmin', {
        withCredentials:true,
        // headers: {
        //   Authorization: authorizationToken
        // },
        data: {
          adminusername: adminusername
        }
      }).then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

}



//GET request to display all Admins
let url = process.env.REACT_APP_API_URL + "/viewadmins";
    axios.get(url, 
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
          <Th>ADMIN'S USERNAME</Th>
          <Th>ADMIN'S FULL NAME</Th>
          <Th>REMOVE ADMIN</Th>
        </Tr>
      </Thead>
      <Tbody>
      {
            // Admins.map((cval,cindex)=>{
            //     return(
            //     <Tr>
            //     <Td>{cval.username}</Td>
            //     <Td>{cval.fullname}</Td>
            //     <Td ><DeleteIcon className="del" onClick={()=>{RemoveAdmin(cval.username)}}/></Td>
            //     </Tr>
            //     )
            // })
        }
                {/* <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               <Td><DeleteIcon className="del"/></Td>
               </Tr>
               <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               <Td><DeleteIcon className="del"/></Td>
               </Tr>
              
               <Tr>
               <Td>tedy</Td>
               <Td>Meer</Td>
               <Td><DeleteIcon className="del"/></Td>
               </Tr> */}
              
      </Tbody>
    </Table>
    </div>
    )
}

export default ViewAdmins
