import { ToDoProps } from './ToDo.interface';

export const ToDo = ({ toDo }: ToDoProps) => {
  return (
    <>
      <h2>To do:</h2>
      {toDo?.map((todo) => (
        <div key={todo.id} style={{ display: 'flex', gap: 8 }}>
          <input type="checkbox" checked={todo.completed} />
          <p>{todo.title}</p>
        </div>
      ))}
    </>
  );
};
