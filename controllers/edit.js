// const getEdit=(req, res)=>{
//     res.render('edit', {title: 'Edit Post', post: req.post});
// }


// module.exports={
//     getEdit: getEdit
// }


const Todo = require("../models/Todo");

const getEdit = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.render("edit", {
      todo: todo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur du serveur");
  }
};

const postEdit = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      completed: req.body.completed === 'on',
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur du serveur");
  }
};

module.exports = {
  getEdit,
  postEdit,
};