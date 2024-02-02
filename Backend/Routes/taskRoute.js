const express = require('express');
const { createTask, readAllTask, readSingleTask, updateTask, deleteTask } = require('../Controllers/taskController');
const router = express.Router();

router.route('/task/createTask').post(createTask);
router.route('/task/readAllTasks').get(readAllTask);
router.route('/task/readSingleTask/:id').get(readSingleTask);
router.route('/task/updateTask/:id').put(updateTask);
router.route('/task/deleteTask/:id').delete(deleteTask);

module.exports = router;