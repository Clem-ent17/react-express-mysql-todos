const router = require('express').Router();
var db = require('../../models');

router.get('/todos', (req, res) => {
  db.Todo.findAll({  })
    .then((todos) => {
      //console.log(todos);
      res.send(todos);
    });
});

router.post('/todos', (req, res) => {
    console.log("req.body", req.body)
    db.Todo.create({
        name: req.body.name,
        completed: req.body.completed
    })
    .then((todo) => {
        console.log("todos", todo);
        res.send(todo);
      });
})

module.exports = router;