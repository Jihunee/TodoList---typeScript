import styled from "styled-components";
import { TodosType } from "../types/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, removeTodo, switchTodo } from "../api/todosAPI";

function TodoList({ isDone }: { isDone: boolean }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const switchMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const { data, isLoading, isError } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  const onDeleteButtonClick = async (id: string) => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
    deleteMutation.mutate(id);
  };

  const onSwitchButtonClick = async (id: string) => {
    switchMutation.mutate(id);
  };

  return (
    <Warpper>
      <h1>{isDone ? "완료한 일 ✅" : "해야 할 일💥"}</h1>
      {data
        ?.filter((item: TodosType) => item.isDone === isDone)
        .map((item: TodosType) => {
          return (
            <Card key={item.id}>
              <h2>제목 : {item.title}</h2>
              <h2>내용 : {item.content}</h2>
              <h2>완료여부: {item.isDone.toString()}</h2>
              <Buttons>
                <button onClick={() => onSwitchButtonClick(item.id)}>
                  {isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => onDeleteButtonClick(item.id)}>
                  삭제
                </button>
              </Buttons>
            </Card>
          );
        })}
    </Warpper>
  );
}

export default TodoList;

const Warpper = styled.div`
  width: 100%;
  background-color: beige;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  & h1 {
    font-size: 30px;
    margin-top: 20px;
  }
`;
const Card = styled.div`
  width: 800px;
  border: 5px solid white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  & button {
    padding: 5px 12px;
    cursor: pointer;
    border: 0;
    background-color: blanchedalmond;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: white;
      transform: scale(1.1);
    }
  }
`;
