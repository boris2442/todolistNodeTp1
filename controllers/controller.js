// // const express = require('express');
// const Todo = require("../models/Todo");
// const getIndex = (req, res) => {
//   res.render("index");
// };

// const postIndex = (req, res) => {
//   // console.log(req.body.title);
//   Todo.find({}, (err, todos) => {
//     if (err) console.log(err);
//     res.render("index", {
//       todos: todos,
//     });
//   });
//   const newTodo = new Todo({
//     title: req.body.title,
//     completed: false,
//   });
//   newTodo.save().then(() => console.log("todo added"));

//   res.redirect("/");
// };

// module.exports = {
//   getIndex: getIndex,
//   postIndex: postIndex,
// };










// const Todo = require("../models/Todo");

// const getIndex = (req, res) => {
//   Todo.find({}, (err, todos) => {
//     if (err) console.log(err);
//     res.render("index", {
//       todos: todos,
//     });
//   });
// };

// const postIndex = (req, res) => {
//   const newTodo = new Todo({
//     title: req.body.title,
//     completed: false,
//   });

//   newTodo.save()
//     .then(() => {
//       console.log("todo added");
//       res.redirect("/");
//     })
//     .catch(err => console.log(err));
// };

// module.exports = {
//   getIndex: getIndex,
//   postIndex: postIndex,
// };



const Todo = require("../models/Todo");

const getIndex = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.render("index", {
      todos: todos,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur du serveur");
  }
};

const postIndex = async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    completed: false,
  });

  try {
    await newTodo.save();
    console.log("todo added");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Erreur du serveur");
  }
};

module.exports = {
  getIndex: getIndex,
  postIndex: postIndex,
};