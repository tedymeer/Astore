import axios from 'axios'
class Auth {
    constructor(props) {
        
        this.state={
            adminusername:'hello',
            adminpassword:'ddddd',
            adminlevel:'special',
            authenticated:false
        }
    }
  
    login(cb) {
        let url = process.env.REACT_APP_API_URL + "/admins/login";
    //   this.state.authenticated = true;

    //     console.log(this.state.adminusername)
    //     console.log(this.state.adminpassword)
    //     console.log(this.state.authenticated)
    axios.post(url, {username:this.state.adminusername,password:this.state.adminpassword}, 
    {withCredentials: true}).then(
        (res)=>{      
          console.log(res)
          if(res.status === 200){
            this.state.authenticated=true;
          }
        });
      cb();
    }
  
    logout(cb) {
      localStorage.clear();
      this.state.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.state.authenticated;
    }
  }
  
  export default new Auth();
  