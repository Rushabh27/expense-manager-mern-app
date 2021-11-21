import React , {useState} from 'react'
import axios from "axios";
import {useHistory} from "react-router-dom"
const Register = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();
    const register = async()=>{
        console.log(name,email,password)
        
        if (name && email && password){
         
         let res = await axios.post("http://localhost:6969/Register",{name,email,password} )
         console.log(res)
         localStorage.setItem('username',name)
         history.push('/Login')
        }
        else{
            alert("invalid input")
        };
    }
    
  
    const navigateTo = () => history.push('/Login')

    return (
        <>
        <div className="auth-wrapper">
        <div className="auth-inner">
<form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input type="text" className="form-control" placeholder="Enter UserName" name="username"  onChange={e => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"  onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={e => setPassword(e.target.value)} />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={register}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="" onClick={navigateTo}>sign in?</a>
                </p>
            </form>
            </div>
            </div>
</>
    )
}
export default Register
