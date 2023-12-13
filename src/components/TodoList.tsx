import React from "react";
import styled from "styled-components";
import { TodosType } from "../types/todos";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, switchTodo } from "../redux/modules/todos";

function TodoList({ isDone }: any) {
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todos);

  const onDeleteButtonClick = (id: number) => {
    dispatch(removeTodo(id));
  };

  const onSwitchButtonClick = (id: number) => {
    dispatch(switchTodo(id));
  };

  return (
    <Warpper>
      <h1>{isDone ? "완료 목록" : "할 일 목록"}</h1>
      {todos
        .filter((item: TodosType) => item.isDone === isDone)
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
