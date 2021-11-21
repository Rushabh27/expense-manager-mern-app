import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const Login = () => {
const history = useHistory()
    

    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");

    const login =async()=>{
        
        let res = await axios.post("http://localhost:6969/Login",{email,password})
        //console.log(res)
        localStorage.setItem('token',res.data?res.data.token:null)
        history.push('/Menu')
        
    }    
    const navigateTo = () => history.push('/Register')
    return (
        <>
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={e=>setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={e=>setPassword(e.target.value)} />
                </div>

                
                <button type="button" className="btn btn-primary btn-block" onClick={login}>Submit</button>
                <p className="forgot-password text-right">
                     <a href="" onClick={navigateTo}>Don't Have An Account ?</a>
                </p>
            </form>
            </div>
            </div>
        </>
    )
}
export default Login