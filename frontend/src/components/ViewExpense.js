import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom"
const ViewExpense = () => {
const history = useHistory()

    const [catvalue,setcatvalue]=useState('');
    const [category, setCategory] = useState([]);
    let [data, setData] = useState([]);
    const [select, setselect] = useState('');
    //custom data
     var dataa = []//[{ id: 1, name: 'Mike', city: 'philps', state: 'food' }, 
    // { id: 2, name: 'Steve', city: 'Square', state: 'Clothes' }, 
    // { id: 3, name: 'Jhon', city: 'market', state: 'New York' }, 
    // { id: 4, name: 'philps', city: 'booket', state: 'Texas' }, 
    // { id: 5, name: 'smith', city: 'brookfield', state: 'Florida' }, 
    // { id: 6, name: 'Broom', city: 'old street', state: 'Florida' }];
    //Select onchage function, getting option selected value and save inside state variable
    function handleChange (e){
      //set state variable with option value
      //setselect(e.target.value);
      console.log('ev',e.target.value)
      setcatvalue(e.target.value);
    
    };
    
   
    //hooks calls after rendering select state
    useEffect(async() => {
        let cat = await axios.get("http://localhost:6969/getCategory")
        
        for(var i=0; i<cat.data.details.length;i++){   
            setCategory(currentArray => [...currentArray, cat.data.details[i].category])
        }

        let res = await axios.get("http://localhost:6969/getExpense")
        console.log(res)
        
        for(var j=0; j<res.data.details.length;j++){     
            dataa.push({id:j+1,expense:res.data.details[j].expense,category:res.data.details[j].catvalue,date:new Date(res.data.details[j].date).toLocaleDateString()})
        }
      //Doing filteration on according to select state option
      data = dataa.filter(dataa => dataa.category !== catvalue);
      //set state variable data after filteration
      setData(dataa)
      }, [catvalue])
    
    const navigateTo = () => history.push('/ViewExpense')
    return (
        <>
        
        <div className="auth-wrapper" id="mystyle">
 
    <div className="app container p-5">
      <h1 className="text-center mb-5">View Expense</h1>
      <div class="mb-3">
         <label class="form-label">Category Filter</label>
           <select id="state"
             onChange={e=>handleChange(e)} class="form-select mb-5">
                <option >Select Category</option>
            {category.map(( value, index) => <option value={value} >{value}</option>)}
               
            </select>
      </div>
      <table class="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Expense</th>
            <th scope="col">Category</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        { // calling state variable data to filter data inside table
        data.map(function({id, expense, category, date}){
         
              return (
                <tr>
               
                <td>{id}</td>
                <td>{expense}</td>
                <td>{category}</td>
                <td>{date}</td>
              </tr>
                );
            })}
            
            </tbody>
            </table>
            <button type="button" className="btn btn-primary btn-block" onClick={navigateTo} id="mybtn">Menu</button>
       </div>
        {/* <div className="auth-inner">
            <h3>View Expense </h3>
            </div> */}
            </div>
        </>
    )
}
export default ViewExpense