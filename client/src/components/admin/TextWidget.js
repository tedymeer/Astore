import React from 'react'
import './textwig.css'
import PersonIcon from '@material-ui/icons/Person';
import AddCircleIcon from '@material-ui/icons/AddCircle';
function TextWidget(props) {
    // if(props.theme==="1"){
    //     document.querySelector(".text-wig.col").style.backgroundColor="#007FFF"
    // }
    // else if(props.theme==="2"){
    //     document.querySelector(".text-wig.col").style.backgroundColor="#20A464"
    // }
    return (
        <div className="text-wig-wrap">
        <div className="box-heading-text">
        {props.title}
        </div>
        {
            props.personicon &&
            <div style={{textAlign:'center'}}>
            <PersonIcon className="p-a-icons" style={{height:'3rem',width:'3rem'}}/>
        </div>}
        {
            props.addicon &&
            <div style={{textAlign:'center'}}>
            <AddCircleIcon className="p-a-icons" style={{height:'3rem',width:'3rem'}}/>
        </div>
        }
        
        </div>
    )
}

export default TextWidget
