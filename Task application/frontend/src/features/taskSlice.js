import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetch", async (token) => {
  const res = await fetch("http://localhost:5000/api/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (_, action) => action.payload);
  },
});

export default taskSlice.reducer;
