const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const todos=require('./routes/todosItem');

//mongo connection
mongoose.connect("mongodb+srv://rusty:rusty_123@cluster0-pwuck.mongodb.net/test?retryWrites=true&w=majority",()=>{
    console.log("COnnected to database");
})

//bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//routess
app.use('/',todos)

app.listen(5000,()=>{
    console.log(`Server has started `)
})