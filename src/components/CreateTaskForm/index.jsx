import { useState } from "react";
import { createTask } from "../../store/task-slice";
import { useDispatch } from "react-redux";

import styles from "./CreateTaskForm.module.scss";

const CreateTaskForm = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatchFn = useDispatch();

  const onShowFormHandler = () => {
    setIsFormVisible(true);
  };

  const onAddTaskHandler = (e) => {
    e.preventDefault();

    dispatchFn(
      createTask({
        id: Math.random(),
        status: props.status,
        title: inputValue,
      })
    );

    setInputValue("");
    setIsFormVisible(false);
  };

  return (
    <div className={styles["add-task"]}>
      {isFormVisible && (
        <form onSubmit={onAddTaskHandler}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            id="name"
          />
        </form>
      )}

      <button
        onClick={onShowFormHandler}
        className={styles["add-task__btn"]}
        type="button"
      >
        <span>Add task </span>
        <svg
          className={styles["add-task__icon"]}
          data-name="Livello 1"
          id="Livello_1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path d="M90,61H67V38a3,3,0,0,0-6,0V61H38a3,3,0,0,0,0,6H61V90a3,3,0,0,0,6,0V67H90a3,3,0,0,0,0-6Z" />
        </svg>
      </button>
    </div>
  );
};

export default CreateTaskForm;
