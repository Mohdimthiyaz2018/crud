const catchAsyncError = require('../Middlewares/catchAsyncError');
const Task = require('../Models/taskModel');
const errorHandler = require('../Utils/errorHandler');

// crud/task/createTask
exports.createTask = catchAsyncError ( async (req,res, next) => {
    
    const t1 = await Task.create(req.body);
    res.status(200).json({
        success: true,
        message: "Task added successfully",
        t1
    });
});

// crud/task/readAllTasks
exports.readAllTask = catchAsyncError( async (req,res, next) => {
    const t1 = await Task.find();

    if(!t1)
    {
        return next(new errorHandler("No tasks found!",404));
    }
    res.status(200).json({
        success: true,
        message: "All tasks",
        t1
    });
} )

// crud/task/readSingleTask
exports.readSingleTask = catchAsyncError ( async (req,res, next) => {
    const id = req.params.id;
    const t1 = await Task.findById(id);

    res.status(200).json({
        suucess: true,
        message: "Task brief",
        t1
    })
} )

// crud/task/updateTask
exports.updateTask = catchAsyncError ( async (req,res, next) => {
    const id = req.params.id;
    const t1 = await Task.findById(id);
    if(!t1)
    {
        return next(new errorHandler("Can't find the task",404));
    }

    const t2 = await Task.findByIdAndUpdate(id,req.body,{
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        message: "Task updated Successfully",
        t2
    })
});

// crud/task/deleteTask
exports.deleteTask = catchAsyncError ( async (req,res, next) => {
    const id = req.params.id;
    const t1 = await Task.findById(id);
    if(!t1)
    {
        return next(new errorHandler("Can't find the task",404));
    }

    const title = t1.title;

    await Task.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: `'${title}' Task deleted Successfully`
    })
});

