import React, { useState } from "react";

//create your first component
const ToDoList = () => {

	const [task, setTask] = useState([]);

	const [taskList, setTaskList] = useState([]);

	const AddTask = (e) => {
		if(e.key === 'Enter') {
			setTaskList([{
				todo: e.target.value,
				done: false,
			}, ...taskList]);
		}
	}

	return (
		<>
			<h1>Todos:</h1>
			<input type="text" placeholder="What needs to be done?" onKeyUp={ AddTask }></input>
			{
				taskList.map((action, index) => {
					return <li key={index}>{action.todo}</li>
				})
			}
		</>
	);
};

export default ToDoList;
