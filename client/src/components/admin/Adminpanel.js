import React from 'react'
import {useState} from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'
import AdminProduct from './AdminProduct'
import AdminCustomer from './AdminCustomer'
import AdminOrder from './AdminOrder'
import './adminpanel.css'
import ManageAdmins from './ManageAdmins'

function Adminpanel() {
    const [sidebarstatus, setSideBarStatus] = useState(null)
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
        else if(arg==='mngadmins'){
            setRenderComp('mngadmins')
        }
    }
    function sidebar(status){
        setSideBarStatus(status)
    }
    return (
        <div>
            <AdminNavbar sidebar={sidebar}/>
           

          <div className="flexwrapadmin">
           
           <AdminSidebar renderAdminPart={renderAdminPart} status={sidebarstatus}/>
         {rendercomp==='dash' && <AdminDashboard/>}
         {rendercomp==='order' && <AdminOrder/>}
         {rendercomp==='product' && <AdminProduct/>}
         {rendercomp==='customer' && <AdminCustomer/>}


         {rendercomp==='mngadmins' && <ManageAdmins/>}
           </div>
           

        </div>
    )
}

export default Adminpanel
