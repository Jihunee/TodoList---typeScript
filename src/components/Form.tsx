import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";
import { TodosType } from "../types/todos";

function Form() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();

  const todos: TodosType[] = useSelector((state: any) => state.todos);

  const titleOnchangeHandler = (e: any) => {
    setTitle(e.target.value);
  };

  const contentOnchangeHandler = (e: any) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const newTodo: TodosType = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
  };

  return (
    <Warpper>
      <form onSubmit={onSubmitHandler}>
        <input
          value={title}
          onChange={titleOnchangeHandler}
          type="text"
          placeholder="제목을 입력해주세요"
        />
        <input
          value={content}
          onChange={contentOnchangeHandler}
          type="text"
          placeholder="내용을 입력해주세요"
        />
        <button>추가!</button>
      </form>
    </Warpper>
  );
}

export default Form;

const Warpper = styled.div`
  width: 600px;
  height: 200px;
  background-color: blanchedalmond;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & input {
    width: 300px;
    font-size: 10px;
    padding: 10px;
    font-size: 15px;
    outline: none;
    border-radius: 10px;
    border: 0;
  }
  & button {
    width: 100px;
    margin: 0 auto;
    margin-top: 10px;
    font-size: 15px;
    padding: 5px;
    outline: none;
    border: 0;
    background-color: aqua;
    border-radius: 10px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: white;
      color: salmon;
      transform: scale(1.2);
    }
  }
`;
