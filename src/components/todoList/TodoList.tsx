import styles from './TodoList.module.scss'

const TodoList = () => {
  return (
      <div className={styles.container}>
        <span>TodoList</span>
        <form className={styles.todo_input}>
          <input type="text" placeholder='Add new list item' />
          <button className={styles.todo_button}>Add Task</button>
        </form>
        <label className={styles.todo_checkbox}>
          <input type="checkbox"/>
          My Todo
        </label>
      </div>
  );
};

export default TodoList;
