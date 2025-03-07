// const express = require('express');

const getIndex=(req, res)=>{

        res.render('index');

}

const postIndex=(req, res)=>{
    
        console.log(req.body.title);
        res.redirect('/');
        // res.send("formulaire soumis avec success")

}


module.exports={
    getIndex:getIndex,
    postIndex:postIndex,
 
}