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
      this.state.authenticated = true;

        console.log(this.state.adminusername)
        console.log(this.state.adminpassword)
        console.log(this.state.authenticated)
    // axios.post('/login',{withCredentials:true}).then(
    //     (res)=>{
    //       console.log('ok')
    //       // console.log(res.data)
    //     })
  
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
  