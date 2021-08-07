import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './adminlogin.css';
import auth from '../../auth';
import { useHistory } from "react-router-dom";
axios.defaults.withCredentials=true

function AdminLogin(props) {
  let history = useHistory();
  const [loginform,setLoginForm]= useState({
    adminusername:'',
    adminpassword:''
  })
  function inputHandler(e){
    setLoginForm((oldVals)=>{
      return{...oldVals,[e.target.name]:e.target.value}
    })
  }
  function HandleSubmit(e){
    e.preventDefault();

      auth.state.adminusername=  loginform.adminusername;
      auth.state.adminpassword= loginform.adminpassword;

      auth.login(() => {
        history.push("/adminkij2772");
      });

      setLoginForm({
        adminusername:'',
        adminpassword:''})  
  }
    return (
      <div className="adminloginwrap">
        <div className="adminloginform">
          <p className="formheading">Admin login</p>
          <form method="post" onSubmit={HandleSubmit}>
            <label className="removedefaultstylelabel" htmlFor="adminusername">Username</label>
            <input id="adminusername" className="inputfield" name="adminusername" value={loginform.adminusername} type="text" onChange={inputHandler} required/>
            <label className="removedefaultstylelabel" htmlFor="adminpassword">Password</label>
            <input className="inputfield" name="adminpassword" value={loginform.adminpassword} type="password" onChange={inputHandler} required/>
            
            
        <input className="inputfield" type="submit" value="Login"/>
          </form>
        </div>
      </div>
    )
}
export default AdminLogin