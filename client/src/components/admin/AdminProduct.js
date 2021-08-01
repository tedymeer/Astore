import React from 'react'
import { useState } from 'react'
import AddProduct from './AddProduct'
import ViewProducts from './ViewProducts'
import UpdateProducts from './UpdateProducts'
import RemoveProduct from './RemoveProduct'
import {Button} from 'react-bootstrap'
import './products.css'
function AdminProduct() {
    const [subsection, setSubSection] = useState('view')
    return (
        <div className="prodwrap">
            {/* Product */}
            <div className="prod-nav">
                <Button variant="primary" onClick={()=>{setSubSection('view')}}>
                
                    View products
                </Button>
                <Button variant="success" onClick={()=>{setSubSection('add')}}>
                
                    Add product
                
                </Button>
                <Button variant="warning" onClick={()=>{setSubSection('update')}}>
                    Update product
                </Button>
                <Button variant="danger" onClick={()=>{setSubSection('remove')}}>
                    Remove product                    
                </Button>

            </div>
            <div className="prod-sub-comp">
                
                {subsection==='view' && <ViewProducts/>}
                {subsection==='add' && <AddProduct/>}
                {subsection==='update' && <UpdateProducts/>}
                {subsection==='remove' && <RemoveProduct/>}
                
            </div>
        </div>
    )
}

export default AdminProduct
