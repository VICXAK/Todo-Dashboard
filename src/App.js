import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateTasks } from "./store/task-slice";

import Card from "./components/Card";

import "./App.scss";

let initialRunning = true;

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(
        "https://todo-4337c-default-rtdb.firebaseio.com/todo.json"
      );

      const data = await response.json();

      dispatch(updateTasks(data || []));
    };

    getTasks();
  }, [dispatch]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://todo-4337c-default-rtdb.firebaseio.com/todo.json",
        {
          method: "PUT",
          body: JSON.stringify(tasks),
          headers: { "Content-Type": "application/json" },
        }
      );
    };

    if (initialRunning) {
      initialRunning = false;
      return;
    }

    fetchTasks();
  }, [tasks]);

  return (
    <div className="container">
      <div className="row">
        {status.map((status) => (
          <Card key={status} status={status} />
        ))}
      </div>
    </div>
  );
}

export default App;
