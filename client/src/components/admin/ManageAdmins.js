import React,{useState} from 'react'
import './managead.css'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import {Row,Col, Container} from 'react-bootstrap'
import ViewAdmins from './ViewAdmins'
import AddAdmin from './AddAdmin'
import TextWidget from './TextWidget'
// import DeleteIcon from '@material-ui/icons/Delete';
function ManageAdmins() {
    const [subsection, setSubSection] = useState('view')
    return (
        <div className="manage-ad-wrap">
              <Container >
            <Row>
                <Col className="text-wig" style={{backgroundColor:'#007FFF'}}>
               <TextWidget personicon={true} title="View admins" onClick={()=>{setSubSection('view')}}/>
                </Col>
                <Col className="text-wig" style={{backgroundColor:'#20A464'}}>
               <TextWidget addicon={true} title="Add admins" onClick={()=>{setSubSection('add')}}/>
                </Col>
            </Row>
            
            </Container>
            <div className="prod-sub-comp">
                
                {subsection==='view' && <ViewAdmins/>}
                {subsection==='add' && <AddAdmin/>}
                {/* {subsection==='remove' && <RemoveAdmin/>} */}
            </div>
        </div>
    )
}

export default ManageAdmins
