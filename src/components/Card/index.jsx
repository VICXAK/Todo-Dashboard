import { useSelector } from "react-redux";

import TaskItem from "../TaskItem";
import CreateTaskForm from "../CreateTaskForm";
import styles from "./Card.module.scss";

const Card = (props) => {
  const tasks = useSelector((state) => state.tasks);

  let filteredTasks =
    tasks === null ? [] : tasks.filter((task) => task.status === props.status);

  return (
    <div className={styles.card}>
      <h1>{props.status}</h1>
      <ul className={styles["card-list"]}>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            status={props.status}
            id={task.id}
            tasks={tasks}
          >
            {task.title}
          </TaskItem>
        ))}
        <CreateTaskForm status={props.status} />
      </ul>
    </div>
  );
};

export default Card;
