import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  tasks: [],
  status: ["todo", "progress", "done"],
  isTaskChanged: false,
};

const taskSlice = createSlice({
  name: "taskList",
  initialState: initialTasks,

  reducers: {
    moveTaskTo(state, action) {
      state.isTaskChanged = true;
      const { id, status } = action.payload;

      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      );
    },

    removeTask(state, action) {
      state.isTaskChanged = true;
      const { id } = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    createTask(state, action) {
      state.isTaskChanged = true;
      const newTask = action.payload;

      state.tasks = [...state.tasks, newTask];
    },

    updateTasks(state, action) {
      state.tasks = action.payload;
    },
  },
});

export const sendTaskData = (taskData) => {
  return async (dispatch) => {
    const sendHttpRequest = async () => {
      const response = await fetch(
        "https://todo-4337c-default-rtdb.firebaseio.com/todo.json",
        {
          method: "PUT",
          body: JSON.stringify(taskData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }
    };

    try {
      await sendHttpRequest();
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const getTaskData = () => {
  return async (dispatch) => {
    const getDataHttpRequest = async () => {
      const response = await fetch(
        "https://todo-4337c-default-rtdb.firebaseio.com/todo.json"
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }
      const data = await response.json();
      return data;
    };

    try {
      const taskData = await getDataHttpRequest();

      dispatch(updateTasks(taskData || []));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const { moveTaskTo, removeTask, createTask, updateTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
