export type TodosType = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

export type PropsType = {
  todos: TodosType[];
  setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
  isDone: boolean;
};
