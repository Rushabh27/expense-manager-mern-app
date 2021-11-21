import React from "react";
import { useHistory } from "react-router-dom";
const Menu = () => {
  const history = useHistory();

  const uname = localStorage.getItem("username");

  const calladdexpense = () => history.push("/AddExpense");
  const calladdcategory = () => history.push("/AddCategory");
  const callviewexpense = () => history.push("/ViewExpense");
  return (
    <>
      <div className="auth-wrapper" id="mystyle">
        <div className="auth-inner" id="innerstyle">
          <h2>Hello {uname}, </h2>
          <h4>Welcome to Expense Manager</h4>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={calladdexpense}
          >
            Add Expense
          </button>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={calladdcategory}
            id="menubtn"
          >
            Add Category
          </button>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={callviewexpense}
          >
            View Expense
          </button>
        </div>
      </div>
    </>
  );
};
export default Menu;
