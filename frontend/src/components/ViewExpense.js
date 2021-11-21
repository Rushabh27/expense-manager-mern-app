import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const ViewExpense = () => {
const history = useHistory()

    const [category, setCategory] = useState("");
    

    useEffect(() => 
        
        axios.get("http://localhost:6969/getExpense")
        .then(res=>console.log(res))
    )

    const mystyle={
        backgroundColor:'white'
    }
    
    const navigateTo = () => history.push('/ViewExpense')
    return (
        <>
        
        <div className="auth-wrapper" style={mystyle}>
        
        <div className="auth-inner">
            <h3>View Expense </h3>
            </div>
            </div>
        </>
    )
}
export default ViewExpense