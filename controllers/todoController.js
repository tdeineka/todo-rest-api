var Todo = require('../models/todoModel');

exports.list = (req, res) => {
    Todo.find({}, (err, todo) => {
        if (err) res.send(err);
        res.json(todo);
    });
};
exports.get = (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) res.send(err);
        res.json(todo);
    });
};
exports.add = (req, res) => {
    var newTodo = new Todo(req.body);
    newTodo.save((err, todo) => {
        if (err) res.send(err);
        res.json({ message: "Todo task was added", todo });
    });
};
exports.update = (req, res) => {
    Todo.findOneAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
        if (err) res.send(err);
        res.json({ message: "Todo task was updated", todo });
    });
};
exports.remove = (req, res) => {
    Todo.remove({ _id: req.params.id }, (err, todo) => {
        if (err) res.send(err);
        res.json({ message: "Todo task was deleted", todo });
    });
};