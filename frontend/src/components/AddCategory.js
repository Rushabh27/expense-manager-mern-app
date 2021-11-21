import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const AddCategory = () => {
const history = useHistory()

    const [category, setCategory] = useState("");

    const addExpense =()=>{
        let user={
            category:category
        }
        axios.post("http://localhost:6969/addCategory",user)
        .then(res=>{alert(res.data.message)
        
    })
    }

    const navigateTo = () => history.push('/Menu')
    return (
        <>
        
        <div className="auth-wrapper" id="mystyle">
        
        <div className="auth-inner">
        <form>
                <h3>Add Category</h3>

                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" placeholder="Enter Category" name="category" onChange={e=>setCategory(e.target.value)} />
                </div>
                
                <button type="button" className="btn btn-primary btn-block" onClick={addExpense} id="btn">Add</button>
                <button type="button" className="btn btn-primary btn-block" onClick={navigateTo} id="mybtn">Menu</button>
                
            </form>
            </div>
            </div>
        </>
    )
}
export default AddCategory