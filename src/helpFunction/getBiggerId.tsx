import todosFromServer from '../api/todos';

  export const newArray = [...todosFromServer].sort(((todo1, todo2) => (
    todo2.id - todo1.id
  )))
