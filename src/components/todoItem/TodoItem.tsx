import styles from "./TodoItem.module.scss";
import {FC} from "react";
import {deleteSingleTodo, TodoItemType, toggleTodo} from "@store/todo/todoSlice";
import {useAppDispatch} from "@store/hooks";
import clearTodo from '@assets/clearTodo.png'


const TodoItem: FC<TodoItemType> = ({completed, title, id}) => {
  const dispatch = useAppDispatch()
  return (
      <div className={styles.todo_container}>
        <label className={styles.todo_checkbox}>
          <input type="checkbox" checked={completed} onClick={() => dispatch(toggleTodo(id))}/>
          {title}
        </label>
        <img src={clearTodo} className={styles.todo_clearIcon} alt="clearTodo"
             onClick={() => dispatch(deleteSingleTodo(id))}/>
      </div>
  );
};

export default TodoItem;
