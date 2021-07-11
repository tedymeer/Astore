import React from 'react'
import './adminlogin.css'

function AdminLogin(props) {
  function HandleSubmit(e){
    e.preventDefault();
    //umair bhai yahan pe adminlogin ka route bna dein 'adminlogin/' k naam se
    fetch('https://127.0.0.1:8000/endpoint/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(e.target)
      })
      .then(resp => resp.json())
      .then(res =>  props.loginfunction(res));
  }
    return (
      <div className="adminloginwrap">
        <div className="adminloginform">
          <p className="formheading">Admin login</p>
          <form method="post" onSubmit={HandleSubmit}>
            <label className="removedefaultstylelabel" for="adminusername">Username</label>
            <input id="adminusername" className="inputfield" name="adminusername" type="text" required/>
            <label className="removedefaultstylelabel" for="adminpassword">Password</label>
            <input className="inputfield" password="adminpassword" type="password" required/>
            
            
            <input className="inputfield" type="submit" value="Login"/>
          </form>
        </div>
      </div>
    )
}

export default AdminLogin
