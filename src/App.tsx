import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodosType } from "./types/todos";

function App() {
  const [todos, setTodos] = useState<TodosType[]>([
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
  ]);
  return (
    <Container>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} isDone={false} />
      <TodoList todos={todos} setTodos={setTodos} isDone={true} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
