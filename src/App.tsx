import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <Header />
      <Form />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
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
