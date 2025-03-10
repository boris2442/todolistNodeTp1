// const getEdit=(req, res)=>{
//     res.render('edit', {title: 'Edit Post', post: req.post});
// }

// module.exports={
//     getEdit: getEdit
// }

const Todo = require("../models/Todo");

// const getEdit = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     res.render("edit", {
//       todo: todo,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Erreur du serveur");
//   }
// };

// const postEdit = async (req, res) => {
//   try {
//     await Todo.findByIdAndUpdate(req.params.id, {
//       title: req.body.title,
//       completed: req.body.completed === 'on',
//     });
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Erreur du serveur");
//   }
// };

const getEdit = (req, res) => {
  const { id } = req.params;
  Todo.findById((id, todo) => {
    if (err) console.log(todo);
    res.render("edit", {
      todo: todo,
    });
  });
};

const putEdit = (req, res) => {
  const { id } = req.params;
  const{title} = req.body
  Todo.findByIdAndUpdate(id, { title: title }, (err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
};

module.exports = {
  getEdit,

  putEdit: putEdit,
};
