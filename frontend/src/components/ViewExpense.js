import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ViewExpense = () => {
  const history = useHistory();

  const [catvalue, setcatvalue] = useState("");
  const [category, setCategory] = useState([]);
  let [data, setData] = useState([]);
  let [alldata, setAllData] = useState([]);

  function handleChange(e) {
    setcatvalue(e.target.value);
    let filterdata = alldata.map(item => {
      if (item.category === e.target.value) return item;
    });

    filterdata = filterdata.filter(notUndefined => notUndefined !== undefined);
    setData(filterdata);
    //console.log(filterdata)
  }

  //hooks calls after rendering select state
  useEffect(async () => {
    var dataa = [];
    var token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `${token}` }
    };
    let cat = await axios.get("http://localhost:6969/getCategory", config);
    if (cat.data.details == "") {
      alert("not authorised");
    } else {
      for (var i = 0; i < cat.data.details.length; i++) {
        setCategory(currentArray => [
          ...currentArray,
          cat.data.details[i].category
        ]);
      }
    }

    let res = await axios.get("http://localhost:6969/getExpense", config);
    if (res.data.details == "") alert("not authorised");
    else {
      for (var j = 0; j < res.data.details.length; j++) {
        dataa.push({
          id: j + 1,
          expense: res.data.details[j].expense,
          category: res.data.details[j].catvalue,
          date: new Date(res.data.details[j].date).toLocaleDateString()
        });
      }
    }

    setData(dataa);
    setAllData(dataa);
  }, []);

  const navigateTo = () => history.push("/Menu");
  return (
    <>
      {localStorage.getItem("token") == null ? (
        history.push("/Login")
      ) : (
        <div className="auth-wrapper" id="mystyle">
          <div className="app container p-5">
            <h1 className="text-center mb-5">View Expense</h1>
            <div class="mb-3">
              <label class="form-label">Category Filter</label>
              <select
                id="state"
                onChange={e => handleChange(e)}
                class="form-select mb-5"
              >
                <option>Select Category</option>
                {category.map((value, index) => (
                  <option value={value}>{value}</option>
                ))}
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
                {// calling state variable data to filter data inside table
                data.map(function({ id, expense, category, date }) {
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
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={navigateTo}
              id="mybtn"
            >
              Menu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ViewExpense;
