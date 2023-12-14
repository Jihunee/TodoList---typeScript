export type TodosType = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

export type StateType = {
  todos: TodosType[];
};
