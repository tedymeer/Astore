import React from 'react'
import {useState} from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'
import AdminProduct from './AdminProduct'
import AdminCustomer from './AdminCustomer'
import AdminOrder from './AdminOrder'
import './adminpanel.css'

function Adminpanel(props) {

    const [rendercomp,setRenderComp]= useState('');

    function renderAdminPart(arg){

        if(arg==='dash'){
            setRenderComp('dash')
        }
        else if(arg==='order'){
            setRenderComp('order')
        }
        else if(arg==='product'){
            setRenderComp('product')
        }
        else if(arg==='customer'){
            setRenderComp('customer')
        }
    }
    return (
        <div>
            <AdminNavbar logoutfunction={props.logoutfunction}/>
          
          <div className="flexwrapadmin">
           
           <AdminSidebar renderAdminPart={renderAdminPart}/>
         {rendercomp==='dash' && <AdminDashboard/>}
         {rendercomp==='order' && <AdminOrder/>}
         {rendercomp==='product' && <AdminProduct/>}
         {rendercomp==='customer' && <AdminCustomer/>}
           </div>
           
        </div>
    )
}

export default Adminpanel
