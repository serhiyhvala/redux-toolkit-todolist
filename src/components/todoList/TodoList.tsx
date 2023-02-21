import styles from './TodoList.module.scss'
import TodoItem from "@components/todoItem/TodoItem";
import TodoForm from "@components/todoForm/TodoForm";

const TodoList = () => {
  return (
      <div className={styles.container}>
        <span>TodoList</span>
        <TodoForm />
        <TodoItem />
      </div>
  );
};

export default TodoList;
