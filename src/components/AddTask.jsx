import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const Addtask = ({ handleTaskAddition }) => {
    const [inputData, setInputeData] = useState("");
    const handleImputChange = (e) => {
        console.log(e.target.value);
        setInputeData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputeData("");
    };
    return (
        <div className="add-task-container">
            <input
                onChange={handleImputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};

export default Addtask;
