import axios from 'axios'
class Auth {
    constructor(props) {
        
        this.state={
            adminusername:'',
            adminpassword:'',
            authenticated:false
        }
    }
  
    login(cb) {
    //   this.state.authenticated = true;

    //     console.log(this.state.adminusername)
    //     console.log(this.state.adminpassword)
    //     console.log(this.state.authenticated)
    axios.post('localhost:8000/login', {username:this.state.adminusername,password:this.state.adminpassword}, 
    {withCredentials: true}).then(
        (res)=>{
          console.log(res.data)
          this.state.authenticated=res.status;
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
  