import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const AddExpense = () => {
const history = useHistory()

    const [category, setCategory] = useState([]);
    const [catvalue,setcatvalue]=useState("");
    const [expense,setExpense]=useState("");
    
    useEffect(async() => {
        let cat = await axios.get("http://localhost:6969/getCategory")
        
        for(var i=0; i<cat.data.details.length;i++){
            
            setCategory(currentArray => [...currentArray, cat.data.details[i].category])
        }
        console.log('hello')
    },[]) 
    
    const addExpense =async()=>{
        
        let res = await axios.post("http://localhost:6969/addExpense",{catvalue,expense})
        console.log(res)

    }
    
    const navigateTo = () => history.push('/Menu')
    
    return (
        <>
        
        <div className="auth-wrapper" id="mystyle">
        
        <div className="auth-inner">

<form>
                <h3>Add Expense</h3>

                <div className="form-group">
                    <label>Category</label>
                    <select className="drop"
            onChange={e=>setcatvalue(e.target.value)}
            ><option >Select Category</option>
            {category.map(( value, index) => <option value={value} >{value}</option>)}
            </select>
                </div>

                <div className="form-group">
                    <label>Expense</label>
                    <input type="text" className="form-control" placeholder="Enter Expense" name="expense" onChange={e=>setExpense(e.target.value)} />
                </div>

                
                <button type="submit" className="btn btn-primary btn-block" onClick={addExpense} id="btn">Add</button>
                <button type="button" className="btn btn-primary btn-block" onClick={navigateTo} id="mybtn">Menu</button>
                
            </form>
            </div>
            </div>
        </>
    )
}
export default AddExpense