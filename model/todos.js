const mongoose=require('mongoose');

const Schema=mongoose.Schema

const TodosSchema=new Schema({
    todos:{
        type:String
    }
})

module.exports=mongoose.model('todos',TodosSchema)