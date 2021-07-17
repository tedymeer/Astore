import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProtectedRoute } from "./ProtectedRoute";
import Adminpanel from './components/admin/Adminpanel';
import {Switch, Route } from "react-router-dom";
import PublicHomePage from './components/public/PublicHomepage';
import PageNotFound from './components/PageNotFound';
import Adminlogin from './components/admin/AdminLogin';



function App() {
 
  return (

    <div className="App">
      <Switch>

          <ProtectedRoute exact path="/adminkij2772" component={Adminpanel} />
          <Route exact path="/adminlogin">
              <Adminlogin  />
          </Route>
          <Route exact path="/" component={PublicHomePage} />
          <Route component={PageNotFound} />
    
     </Switch>
    </div>
  );
}

export default App;
