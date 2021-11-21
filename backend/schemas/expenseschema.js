const mongoose = require('mongoose')

const addExpense = new mongoose.Schema({
    catvalue: String,
    expense: Number
})

module.exports =  Expense = new mongoose.model("addExpense", addExpense)
