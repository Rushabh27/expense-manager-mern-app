const express = require("express");
// const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./schemas/userschema')
const Expense = require('./schemas/expenseschema')
const Category = require('./schemas/categoryschema')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/Expense",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}

//routes routes
app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    console.log(req.body) 
    // const user = await User.findOne({email:email})
    // console.log(user)
    User.findOne({email:email},(err,user)=>{
        console.log(user)
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send({message:''})
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
})
app.post("/addExpense",(req,res)=>{
        const {catvalue,expense,date} =req.body;
        console.log('data',catvalue,expense,date) 
            const user = new Expense({catvalue,expense,date})
                user.save(err=>{
                    if(err){
                        res.send({message:''})
                    }else{
                        res.send({message:"sucessfull"})
                    }
        })
})
app.post("/addCategory",(req,res)=>{
    console.log(req.body) 
    const {category} =req.body;
        const user = new Category({category})
            user.save(err=>{
                if(err){
                    res.send({message:''})
                }else{
                    res.send({message:"sucessfull"})
                }
    })
})
app.get("/getExpense", function (req, res) {   
    console.log('called')
    Expense.find({}, function (err, allDetails) {
        console.log(allDetails)
        if (err) {
            console.log(err);
        } else {
            res.send({ details: allDetails })
        }
    })
}) 
app.get("/getCategory", function (req, res) {   
    console.log('called cat')
    Category.find({}, function (err, allDetails) {
        console.log(allDetails)
        if (err) {
            console.log(err);
        } else {
            res.send({ details: allDetails })
        }
    })
})
app.listen(6969,()=>{
    console.log("started")
})