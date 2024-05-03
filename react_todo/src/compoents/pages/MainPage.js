import TodosEmpty from "../TodosEmpty";
import { useTodosState } from "./../../hooks";
import TodoListPage from "./TodoListPage"

export default function MainPage() {
  const todosState = useTodosState();

  const todosEmpty = todosState.todos.length == 0; 

  if (todosEmpty) {
    return <TodosEmpty />
  }
    return(
      <>
        <TodoListPage />
      </>
    );
  }