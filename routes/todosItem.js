const express=require('express');
const router=express();

const Todo=require('../model/todos')

router.get('/items',async(req,res)=>{

    const todos=await Todo.find({})
    res.json(todos)
    

})

router.post('/items',async(req,res)=>{
  //  const todos=req.body.todos
const newItem=new Todo({
        todos:req.body.todos
    })
   const data= await newItem.save()
   res.json(data)
 
})


router.delete('/items/:id',async(req,res)=>{
    const data=await Todo.findByIdAndDelete(req.params.id)
    res.json(data)

})


module.exports=router