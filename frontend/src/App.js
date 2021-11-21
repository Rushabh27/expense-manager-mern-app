import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import addExpense from "./components/AddExpense"
import addCategory from "./components/AddCategory"
import viewExpense from "./components/ViewExpense"
import Menu from "./components/Menu"
function App() {
  return (<Router>
    <div className="App">
      
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Login' component={Login} />
            <Route path="/Register" component={Register} />
            <Route path='/AddExpense' component={addExpense} />
            <Route path='/AddCategory' component={addCategory} />
            <Route path="/ViewExpense" component={viewExpense} />
            <Route path="/Menu" component={Menu} />
          </Switch>
        
    </div></Router>
  );
}

export default App;