import React,{useState} from 'react'
import './managead.css'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import {Button} from 'react-bootstrap'
import ViewAdmins from './ViewAdmins'
import AddAdmin from './AddAdmin'
import RemoveAdmin from './RemoveAdmin'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
function ManageAdmins() {
    const [subsection, setSubSection] = useState('view')
    return (
        <div className="manage-ad-wrap">
          <div className="prod-nav">
                <Button variant="primary" onClick={()=>{setSubSection('view')}}>
                
                    View Admins
                </Button>
                <Button variant="success" onClick={()=>{setSubSection('add')}}>
                
                    Add New Admin <AddIcon/>
                
                </Button>
             
             <Button variant="danger" onClick={()=>{setSubSection('remove')}}>
                
                  Remove Admin <DeleteIcon/>
              
              </Button>
            
            </div>
            <div className="prod-sub-comp">
                
                {subsection==='view' && <ViewAdmins/>}
                {subsection==='add' && <AddAdmin/>}
                {subsection==='remove' && <RemoveAdmin/>}
            </div>
        </div>
    )
}

export default ManageAdmins
