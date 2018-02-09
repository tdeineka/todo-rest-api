var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/todo");

let todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}
,    { versionKey: false }
);

let Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;