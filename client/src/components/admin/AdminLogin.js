import React from 'react'
import { useState } from 'react';
import './adminlogin.css'

function AdminLogin(props) {

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
    //umair bhai yahan pe adminlogin ka route bna dein 'adminlogin/' k naam se
    fetch('https://127.0.0.1:8000/endpoint/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginform)
      })
      .then(resp => resp.json())
      .then(res =>  props.loginfunction(res));

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
