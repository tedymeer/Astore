import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Adminpanel from './components/admin/Adminpanel';
import {Switch, Route } from "react-router-dom";
import PublicHomePage from './components/public/PublicHomepage';
import PageNotFound from './components/PageNotFound';
import Adminlogin from './components/admin/AdminLogin';

import { useState } from 'react';

function App() {
  
  const [adminIsLoggedIn,setAdminIsLoggedIn]= useState(false)

  function adminLogin(status)
  {
    setAdminIsLoggedIn(status)
    console.log(status)
  }

  function adminLogout()
  {
    localStorage.clear();
    setAdminIsLoggedIn(false)
    console.log(false)
  }
  
  return (

    <div className="App">
      <Switch>

        {!adminIsLoggedIn &&
          <Route exact path="/adminkij2772">
          <Adminlogin loginfunction={adminLogin} />
          </Route>
        }   


        {adminIsLoggedIn &&
          <Route exact path="/adminkij2772">
          <Adminpanel logoutfunction={adminLogout}/>
          </Route>
        }   



          <Route exact path="/" component={PublicHomePage} />
          <Route component={PageNotFound} />
    
     </Switch>
    </div>
  );
}

export default App;
