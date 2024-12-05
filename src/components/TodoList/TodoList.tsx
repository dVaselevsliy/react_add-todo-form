import { Todo } from '../../types/todo';
import { TodoInfo } from '../TodoInfo';

interface Todos {
  todosFromServer: Todo[]
}

export const TodoList: React.FC<Todos> = ({ todosFromServer }) => (
    <section className="TodoList">
      {todosFromServer.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
