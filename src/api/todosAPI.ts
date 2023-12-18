import axios from "axios";
import { TodosType } from "../types/todos";

const getTodos = async (): Promise<TodosType[]> => {
  const reponse = await axios.get(`${process.env.REACT_APP_JSON_SERVER}/todos`);
  return reponse.data;
};

const addTodo = async (newTodo: TodosType) => {
  try {
    await axios.post(`${process.env.REACT_APP_JSON_SERVER}/todos`, newTodo);
  } catch (error) {
    console.log(error);
    alert("알 수 없는 오류가 발생하였습니다.");
  }
};

const removeTodo = async (id: string) => {
  try {
    await axios.delete(`${process.env.REACT_APP_JSON_SERVER}/${id}`);
  } catch (error) {
    console.log(error);
    alert("알 수 없는 오류가 발생하였습니다.");
  }
};

const switchTodo = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_JSON_SERVER}/todos/${id}`
    );
    const currentTodo: TodosType = response.data;

    // isDone을 토글하기
    const updatedTodo: TodosType = {
      ...currentTodo,
      isDone: !currentTodo.isDone,
    };

    // 토글된 상태를 서버에 업데이트
    await axios.patch(
      `${process.env.REACT_APP_JSON_SERVER}/todos/${id}`,
      updatedTodo
    );
  } catch (error) {
    console.log(error);
    alert("알 수 없는 오류가 발생하였습니다.");
  }
};

export { getTodos, addTodo, removeTodo, switchTodo };
