const getEdit=(req, res)=>{
    res.render('edit', {title: 'Edit Post', post: req.post});
}


module.exports={
    getEdit: getEdit,
}