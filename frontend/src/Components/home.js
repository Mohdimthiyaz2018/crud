import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../Actions/getTaskAction";
import Loader from "./Layouts/loader";
import { submitTask } from "../Actions/submitAction";
import { toast } from 'react-toastify';

export default function Home() {
  const [taskDes, setTaskDes] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const dispatch = useDispatch();
  const { loading, data, err } = useSelector((state) => state.getTaskState);
  const { load, dat, error } = useSelector((state) => state.submitTaskState);
  useEffect(() => {
    if(dat)
    {
      toast.success(dat,{
        position: 'bottom-center'
      })
    }
    dispatch(getTask);
  }, [dat]);

  const sub = (e) => {
    e.preventDefault();
    const obj = {
      title: taskTitle,
      brief: taskDes,
      scheduledTime: taskTime
    }
    dispatch(submitTask(obj))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <h1>Task Management</h1>
          <ul className="task-list">
            {data &&
              data.map((data) => { return (
                <li className="task-item">
                <input type="checkbox" id="task1" />
                <label for="task1">{data.title}</label>
                <button>Edit</button>
                <button>Delete</button>
              </li>
              )
               
              })}
          </ul>
          <form onSubmit={sub} className="add-task-form"  >
            <input
              type="text"
              id="newTaskInput" value={taskTitle}
              onInput={e => setTaskTitle(e.target.value)}
              placeholder="Enter task title"
            />
            <input
              type="text"
              id="newTaskInput" value={taskDes}
              onInput={e => setTaskDes(e.target.value)}
              placeholder="Enter task description"
            />
            <input
              type="text"
              id="newTaskInput" value={taskTime}
              onInput={e => setTaskTime(e.target.value)}
              placeholder="Enter task description"
            />
            <button type="submit" id="addTaskButton">
              Add Task
            </button>
          </form>
        </div>
      )}
    </>
  );
}
