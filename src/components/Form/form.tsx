import { useState } from 'react';
import usersFromServer from '../../api/users';
import { Todo } from '../../types/todo';
import { newArray } from '../../helpFunction/getBiggerId';
import { getUserById } from '../../helpFunction/getUserById';



type Props = {
  onSubmit: (todo: Todo) => void
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [hasTitleError, setHasTitleError] = useState(false);

  const [select, setSelect] = useState(0);
  const [hasSelectError, setHasSelectError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setHasTitleError(!title);
    setHasSelectError(!select)


    if (!title || !select) {
      return
    }


      onSubmit({
        id: newArray[0].id + 1,
        title,
        completed: false,
        userId: select,
        user: getUserById(select),
      })

      reset()
  };

  const reset = () => {
    setTitle('')
    setSelect(0)

    setHasSelectError(false)
    setHasTitleError(false)
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setHasTitleError(false);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(+event.target.value);
    setHasSelectError(false);
  };

  return (
    <form action="/api/todos" method="POST" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title</label>

          <div>
            <input
              type="text"
              id="title"
              data-cy="titleInput"
              placeholder="Write title here"
              value={title}
              onChange={handleTitleChange}
            />

            {hasTitleError && (
              <span className="error">Please enter a title</span>
            )}
          </div>
        </div>

        <div className="field">
          <label htmlFor="select">Select Name</label>
          <select
            data-cy="userSelect"
            id="select"
            value={select}
            onChange={handleSelectChange}
          >

            <option value="0">Choose a user</option>
            {usersFromServer.map(user => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
            ))}
          </select>

          {hasSelectError && (
            <span className="error">Please choose a user</span>
          )}
        </div>

        <button type="submit" data-cy="submitButton">
          Add
        </button>
      </form>
  )
}
