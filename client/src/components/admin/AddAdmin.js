import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
function AddAdmin() {
    
    const[cpassword,setCPassword]=useState(false)
    const [form, setForm] = useState({

        adminfullname:null,
        adminusername:null,
        adminnewpassword:null,
        admincnewpassword:null

    })
    
    function HandleSubmit(e){

        e.preventDefault()



        if(form.adminnewpassword!==form.admincnewpassword){
            setCPassword(true)
        }
        else if(form.adminnewpassword===form.admincnewpassword){
            setCPassword(false)
            //make api call here
            let formData = new FormData();    //formdata object

            formData.append('adminfullname', form.adminfullname);   //append the values with key, value pair
            formData.append('adminusername', form.adminusername);
            formData.append('adminnewpassword', form.adminnewpassword);
            formData.append('admincnewpassword', form.admincnewpassword);
            
    const config = {     
        withCredentials:true,
        headers: { 'content-type': 'multipart/form-data' }
    }
    
    axios.post('http://localhost:8000/addadmin', formData, config)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        }
    }
    function handleChange(e){
       
        setForm((oldVals)=>{
            return{
                ...oldVals,
                [e.target.name]:e.target.value
            }
        })
    }
    
   

    return (
        
         <div className="add-prod-wrap">
            <div className="add-prod-heading">Add new admin</div>
            <form className="add-prod-form" onSubmit={HandleSubmit}>

                <div className="prod-id-field">
               <label htmlFor="adminfullname">Admin fullname</label><br/>
                <input id="adminfullname" type="text" name="adminfullname" className="field" onChange={handleChange} />
               </div>
               <div className="prod-id-field">
               <label htmlFor="adminusername">Admin username</label><br/>
                <input id="adminusername" type="text" name="adminusername" className="field" onChange={handleChange} />
               </div>
               <div className="prod-id-field">
               <label htmlFor="adminnewpassword">Enter new password</label><br/>
                <input id="adminnewpassword" type="text" name="adminnewpassword" className="field" onChange={handleChange} />
               </div>
               <div className="prod-id-field">
               <label htmlFor="admincnewpassword">Confirm password</label><br/>
                <input id="admincnewpassword" type="text" name="admincnewpassword" className="field" onChange={handleChange} />
               </div>
               {cpassword && <div>Password doesn't match</div>}
               
                <Button type="submit" variant="dark">Add + </Button>
                <Button variant="info" type="reset">Reset</Button>
            </form>
        </div>
    )
}

export default AddAdmin
