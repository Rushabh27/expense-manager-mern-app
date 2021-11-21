const mongoose = require('mongoose')

const addCategory = new mongoose.Schema({
    category: String,
})

module.exports = Category = new mongoose.model("addCategory", addCategory)
