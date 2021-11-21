import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const AddExpense = () => {
const history = useHistory()

    const [category, setCategory] = useState([]);
    const [catvalue,setcatvalue]=useState("select");
    const [expense,setExpense]=useState("");
    const [date,setDate]=useState("");
    
    useEffect(async() => {
        var token = localStorage.getItem('token')
        let config = {
            headers: { Authorization: `${token}` }
        }
        let cat = await axios.get("http://localhost:6969/getCategory",config)
        
        for(var i=0; i<cat.data.details.length;i++){
            
            setCategory(currentArray => [...currentArray, cat.data.details[i].category])
        }
    },[]) 
    const clearState = () => {
        setcatvalue('select')
        setDate('')
        setExpense('')
      };
    
    const addExpense =async()=>{
        //console.log(date)
        var token = localStorage.getItem('token')
        let config = {
            headers: { Authorization: `${token}` }
        }
        let res = await axios.post("http://localhost:6969/addExpense",{catvalue,expense,date},config)
        console.log(res)
        clearState()
        alert(res.data.message)
    }
    
    const navigateTo = () => history.push('/Menu')
    
    return (
        <>
        { localStorage.getItem('token') == null?history.push('/Login'):(
        <div className="auth-wrapper" id="mystyle">
        
        <div className="auth-inner">

<form>
                <h3>Add Expense</h3>

                <div className="form-group">
                    <label>Category</label>
                    <select className="drop"
            onChange={e=>setcatvalue(e.target.value)} value={catvalue} required
            ><option value='select'>Select Category</option>
            {category.map(( value, index) => <option value={value} >{value}</option>)}
            </select>
                </div>

                <div className="form-group">
                    <label>Expense</label>
                    <input type="text" className="form-control" placeholder="Enter Expense" name="expense" onChange={e=>setExpense(e.target.value)} value={expense} required/>
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input type="date" className="form-control" placeholder="Enter Date" name="date" onChange={e=>setDate(e.target.value)} value={date} required/>
                </div>
                
                <button type="button" className="btn btn-primary btn-block" onClick={addExpense} id="btn">Add</button>
                <button type="button" className="btn btn-primary btn-block" onClick={navigateTo} id="mybtn">Menu</button>
                
            </form>
            </div>
            </div>)}
        </>
    )
}
export default AddExpense