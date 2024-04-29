import { useRef } from "react";
import { useRecoilState } from "recoil";
import { dateToStr } from "./utill";
import { todosAtom, lastTodoIdAtom } from "./atoms";

export function useTodosState() {
    const [todos, setTodos] = useRecoilState(todosAtom);
    const [lastTodoId, setLastTodoId] = useRecoilState(lastTodoIdAtom);
    const lastTodoIdRef = useRef(lastTodoId);
  
    const addTodo = (newContent) => {
      const id = ++lastTodoIdRef.current;
      setLastTodoId(id);
  
      const newTodo = {
        id,
        regDate: dateToStr(new Date()),
        content: newContent,
      }
  
      setTodos((todos) => [newTodo, ...todos]);
  
      return id;
    }
  
    const modifyTodo = (index, newContent) => {
      const newTodos = todos.map((todo, _index) => _index != index ? todo : {...todo, content: newContent});
      setTodos(newTodos);
    }
  
    const modifyTodoById = (id, newContent) => {
      const index = findTodoIndexById(id);
  
      if ( index == -1 ) {
        return;
      }
  
      modifyTodo(index, newContent);
    }
  
    const removeTodo = (index) => {
      const newTodos = todos.filter((_, _index) => _index != index);
      setTodos(newTodos);
    }
  
    const removeTodoById = (id) => {
      const index = todos.findIndex((todo) => todo.id == id);
  
      if ( index != -1 ) {
        removeTodo(index);
      }
    }
  
    const findTodoIndexById = (id) => {
      return todos.findIndex((todo) => todo.id == id);
    }
  
    const findTodoById = (id) => {
      const index = findTodoIndexById(id);
  
      if ( index == -1 ) {
        return null;
      }
  
      return todos[index];
    }
  
    return {
      todos,
      addTodo,
      removeTodo,
      modifyTodo,
      removeTodoById,
      findTodoById,
      modifyTodoById
    }
  }