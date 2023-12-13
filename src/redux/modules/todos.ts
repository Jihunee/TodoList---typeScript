import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "리액트 공부하기",
    content: "리액트강의 복습하기",
    isDone: false,
  },
  {
    id: 2,
    title: "타입스크립트 공부하기",
    content: "타입스크립트강의 듣기",
    isDone: true,
  },
  {
    id: 3,
    title: "코드 복습하기",
    content: "프로젝트 코딩 리마인드",
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, switchTodo } = todosSlice.actions;
