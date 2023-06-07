import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { sendTaskData, getTaskData } from "./store/task-slice";

import Card from "./components/Card";

import "./App.scss";

let initialRunning = true;

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  const tasks = useSelector((state) => state.tasks);
  const isTaskChanged = useSelector((state) => state.isTaskChanged);

  useEffect(() => {
    dispatch(getTaskData());
  }, [dispatch]);

  useEffect(() => {
    if (initialRunning) {
      initialRunning = false;
      return;
    }

    if (isTaskChanged) {
      dispatch(sendTaskData(tasks));
    }
  }, [dispatch, tasks, isTaskChanged]);

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
