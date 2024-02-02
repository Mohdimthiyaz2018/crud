const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please enter the title"]
    },
    brief : {
        type: String,
        required: [true,"Please enter the tasks"]
    },
    scheduledTime: {
        type: String
    }
});

const taskModel = mongoose.model("task",taskSchema);
module.exports = taskModel;