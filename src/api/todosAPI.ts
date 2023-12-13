import axios from "axios";
import { TodosType } from "../types/todos";

const getTodos = async () => {
  const reponse = await axios.get(`http://localhost:4001/todos`);
  return reponse.data;
};

const addTodo = async (newTodo: TodosType) => {
  await axios.post("http://localhost:4001/todos", newTodo);
};

export { getTodos, addTodo };
