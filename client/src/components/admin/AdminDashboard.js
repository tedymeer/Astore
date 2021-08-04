import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './dashboard.css'
import NumberWidget from './NumberWidget'
import MoneyWidget from './MoneyWidget'
import LinechartWidget from './LinechartWidget'
function AdminDashboard() {
    return (
        <div className="dashwrap">
            <Container >
            <Row>
                <Col className="num-wig">
               <NumberWidget title="New orders" number={2562}/>
                </Col>
                <Col className="mon-wig">
               <MoneyWidget title="Sales this month" number={55000}/>
                </Col>
            </Row>
            <Row>
                <Col className="chart-wrap">
                <LinechartWidget/>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default AdminDashboard
