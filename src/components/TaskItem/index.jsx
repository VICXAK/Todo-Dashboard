import { useDispatch } from "react-redux";
import { moveTaskTo, removeTask } from "../../store/task-slice";

import styles from "./TaskItem.module.scss";

const TaskItem = (props) => {
  const dispatchFn = useDispatch();

  const onDoneTaskHandler = () => {
    dispatchFn(moveTaskTo({ id: props.id, status: "done" }));
  };

  const onProgressTaskHandler = () => {
    dispatchFn(moveTaskTo({ id: props.id, status: "progress" }));
  };

  const onTodoTaskHandler = () => {
    dispatchFn(moveTaskTo({ id: props.id, status: "todo" }));
  };

  const onRemoveTaskHandler = () => {
    dispatchFn(removeTask({ id: props.id }));
  };

  if (props.status === "done") {
    return (
      <li className={styles["card-item"]}>
        <div className={styles["card-item__wrap"]}>
          <span className={styles["card-item__title"]}>{props.children}</span>
          <div
            onClick={onRemoveTaskHandler}
            className={styles["card-item__close"]}
          >
            <svg
              data-name="Capa 1"
              id="Capa_1"
              viewBox="0 0 20 19.84"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
            </svg>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={styles["card-item"]}>
      <div className={styles["card-item__wrap"]}>
        <div onClick={onDoneTaskHandler} className={styles["card-item__done"]}>
          <svg
            data-name="Livello 1"
            id="Livello_1"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
            <path d="M87.9,42.36,50.42,79.22,40.17,68.43a3,3,0,0,0-4.35,4.13l12.35,13a3,3,0,0,0,2.12.93h.05a3,3,0,0,0,2.1-.86l39.65-39a3,3,0,1,0-4.21-4.28Z" />
          </svg>
        </div>
        <span className={styles["card-item__title"]}>{props.children}</span>
        <div
          onClick={onRemoveTaskHandler}
          className={styles["card-item__close"]}
        >
          <svg
            data-name="Capa 1"
            id="Capa_1"
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
          </svg>
        </div>
      </div>

      {props.status === "progress" ? (
        <div onClick={onTodoTaskHandler} className={styles["card-item__back"]}>
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M474.89,300.41a121.43,121.43,0,0,1-121.3,121.3H247.08V392.13H353.59a91.72,91.72,0,1,0,0-183.44H87.53L151,272.2l-20.92,20.92L30.89,193.9l99.22-99.22L151,115.6l-63.5,63.51H353.59A121.43,121.43,0,0,1,474.89,300.41Z" />
          </svg>
        </div>
      ) : (
        <div
          onClick={onProgressTaskHandler}
          className={styles["card-item__move"]}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
              fill="currentColor"
              fillRule="evenodd"
            />
            <path d="M16 12L10 16.3301V7.66987L16 12Z" fill="currentColor" />
          </svg>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
