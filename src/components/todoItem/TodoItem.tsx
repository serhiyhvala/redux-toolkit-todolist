import styles from "./TodoItem.module.scss";


const TodoItem = () => {
  return (
      <label className={styles.todo_checkbox}>
        <input type="checkbox"/>
        My Todo
      </label>
  );
};

export default TodoItem;
