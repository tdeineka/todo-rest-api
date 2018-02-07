const express = require('express'),
    router = express.Router();
var todo = require('../controllers/todoController');

/* GET home page. */
router.get('/', todo.list);
router.get('/:id', todo.get);
router.post('/', todo.add);
router.put('/:id', todo.update);
router.delete('/:id', todo.remove);

module.exports = router;