import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodosType } from "./types/todos";

function App() {
  const [todos, setTodos] = useState<TodosType[]>();

  const fetchedData = async () => {
    const { data } = await axios.get(`http://localhost:4001/todos`);
    setTodos(data);
  };

  useEffect(() => {
    fetchedData();
  }, []);
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
