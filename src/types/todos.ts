export type TodosType = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type PropsType = {
  todos: TodosType[];
  setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
  isDone: boolean;
};
