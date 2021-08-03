import React from "react";
import "./Task.css";

const Task = ({ task, handleTaskClick }) => {
    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
            onClick={() => handleTaskClick(task.id)}
        >
            <div>
				{task.title}
			</div>
        </div>
    );
};

export default Task;
