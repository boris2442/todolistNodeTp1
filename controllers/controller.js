// const express = require('express');
const Todo=require('../models/Todo')
const getIndex=(req, res)=>{

        res.render('index');

}

const postIndex=(req, res)=>{
    
        // console.log(req.body.title);
        const newTodo=new Todo(({
            title:req.body.title,
            completed:false
        }))
        res.redirect('/');
        // res.send("formulaire soumis avec success")

}


module.exports={
    getIndex:getIndex,
    postIndex:postIndex,
 
}