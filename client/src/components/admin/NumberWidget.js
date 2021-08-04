import React from 'react'
import './numberwidget.css'
function NumberWidget(props) {
    return (
        <div className="num-wig-wrap">
        <div className="box-heading">
        {props.title}
        </div>
        <div className="box-numbers">
            {props.number}
        </div>    
        </div>
    )
}

export default NumberWidget
