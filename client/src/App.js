import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Adminpanel from './components/admin/Adminpanel';
import {Switch, Route } from "react-router-dom";
import PublicHomePage from './components/public/PublicHomepage';
import PageNotFound from './components/PageNotFound';
import Adminlogin from './components/admin/AdminLogin';

import { useState } from 'react';

function App() {
  
  const [adminIsLoggedIn,setAdminIsLoggedIn]= useState(true)

  function adminLoginFunction(value)
  {
    setAdminIsLoggedIn(value)
  }
  
  return (

    <div className="App">
      <Switch>
         
         {!adminIsLoggedIn && 
         <Route exact path="/adminkij2772" 
                render={(props) => (
                <Adminlogin {...props} loginfunction={adminLoginFunction} />
         )}
         />
         }


         {adminIsLoggedIn && <Route exact path="/adminkij2772" component={Adminpanel} />}
       
           



          <Route exact path="/" component={PublicHomePage} />
          <Route component={PageNotFound} />
    
     </Switch>
    </div>
  );
}

export default App;
