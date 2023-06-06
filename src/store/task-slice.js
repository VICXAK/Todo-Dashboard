import { createSlice } from "@reduxjs/toolkit";

const initialTasks = {
  tasks: [],
  status: ["todo", "progress", "done"],
};

const taskSlice = createSlice({
  name: "taskList",
  initialState: initialTasks,

  reducers: {
    moveTaskTo(state, action) {
      const { id, status } = action.payload;

      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      );
    },

    removeTask(state, action) {
      const { id } = action.payload;

      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    createTask(state, action) {
      const newTask = action.payload;

      state.tasks = [...state.tasks, newTask];
    },

    updateTasks(state, action) {
      console.log(action.payload);
      state.tasks = action.payload;
    },
  },
});

export const { moveTaskTo, removeTask, createTask, updateTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
