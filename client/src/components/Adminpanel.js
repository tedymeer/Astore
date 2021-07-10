import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import AdminDashboard from './AdminDashboard'
import AdminProduct from './AdminProduct'
import AdminCustomer from './AdminCustomer'
import AdminOrder from './AdminOrder'
import './admin.css'

function Adminpanel() {
    var renderComponent=null;
    function renderAdminPart(arg){

        if(arg==='dash'){
            renderComponent=<AdminDashboard/>
            console.log(renderComponent);

        }
        else if(arg==='order'){
            renderComponent=<AdminOrder/>
            console.log(arg);
        }
        else if(arg==='product'){
            renderComponent=<AdminProduct/>
            console.log(arg);
        }
        else if(arg==='customer'){
            renderComponent=<AdminCustomer/>
            console.log(arg);
        }
    }
    return (
        <div>
            <AdminNavbar/>
          
          <div className="flexwrapadmin">
           
           <AdminSidebar renderAdminPart={renderAdminPart}/>
         
           
           </div>
           {renderComponent}
        </div>
    )
}

export default Adminpanel
