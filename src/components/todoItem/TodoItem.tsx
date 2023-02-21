import styles from "./TodoItem.module.scss";
import {FC} from "react";
import {TodoItemType} from "@store/todo/todoSlice";


const TodoItem: FC<TodoItemType> = ({completed, title}) => {
  return (
      <label className={styles.todo_checkbox}>
        <input type="checkbox" checked={completed}/>
        {title}
      </label>
  );
};

export default TodoItem;
