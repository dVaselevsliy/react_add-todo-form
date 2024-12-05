import './App.scss';
import { TodoList } from './components/TodoList';


import todosFromServer from './api/todos';
import { useState } from 'react';
import { getUserById } from './helpFunction/getUserById';
import { Todo } from './types/todo';
import {Form} from './components/Form/form';


const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => {
  const [onTodos, setOnTodos] = useState<Todo[]>(todos)

  const addPost = (newTodo: Todo) => {
    setOnTodos(currentTodos => [...currentTodos, newTodo])
  }



  return (
    <div className="App">
      <h1>Add todo form</h1>
      <Form onSubmit={addPost}/>
      <TodoList todosFromServer={onTodos} />
    </div>
  );
};
