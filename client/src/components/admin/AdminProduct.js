import React from 'react'
import { useState } from 'react'
import AddProduct from './AddProduct'
import ViewProducts from './ViewProducts'
import {Row,Col, Container} from 'react-bootstrap'
import TextWidget from './TextWidget'
import './products.css'
function AdminProduct() {
    const [subsection, setSubSection] = useState('view')
    return (
        <div className="prodwrap">
            {/* Product */}
            <div className="prod-nav">
            <Container >
            <Row>
                <Col className="text-wig" style={{backgroundColor:'#007FFF'}}>
               <TextWidget producticon={true} title="View Products" onClick={()=>{setSubSection('view')}}/>
                </Col>
                <Col className="text-wig" style={{backgroundColor:'#20A464'}}>
               <TextWidget addicon={true} title="Add Product" onClick={()=>{setSubSection('add')}}/>
                </Col>
            </Row>
            
            </Container>
                {/* <Button variant="primary" onClick={()=>{setSubSection('view')}}>
                
                    View products
                </Button>
                <Button variant="success" onClick={()=>{setSubSection('add')}}>
                
                    Add product +
                
                </Button>
         */}

                {/* <Button variant="warning" onClick={()=>{setSubSection('update')}}>
                    Update product
                </Button>
                <Button variant="danger" onClick={()=>{setSubSection('remove')}}>
                    Remove product                    
                </Button> */}

            </div>
            <div className="prod-sub-comp">
                
                {subsection==='view' && <ViewProducts/>}
                {subsection==='add' && <AddProduct/>}
                
            </div>
        </div>
    )
}

export default AdminProduct