import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import uuid from "react-uuid";
import { PropsType, TodosType } from "../types/todos";

function Form({ todos, setTodos }: Omit<PropsType, "isDone">) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const titleOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contentOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요");
      return false;
    }
    const newTodo: TodosType = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    await axios.post("http://localhost:4001/todos", newTodo);
    setTodos([...todos, newTodo]);
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
