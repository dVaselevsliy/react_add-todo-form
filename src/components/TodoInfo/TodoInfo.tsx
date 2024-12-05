import { Todo } from '../../types/todo';
import { UserInfo } from '../UserInfo';

interface TodoPropTypes {
  todo: Todo
}

export const TodoInfo: React.FC<TodoPropTypes> = ({ todo }) => (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user}/>}
    </article>
);
