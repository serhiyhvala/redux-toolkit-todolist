import styles from './TodoList.module.scss'
import TodoItem from "@components/todoItem/TodoItem";
import TodoForm from "@components/todoForm/TodoForm";
import {useAppSelector} from "@store/hooks";

const TodoList = () => {
  const {list} = useAppSelector(state => state.todo)
  return (
      <div className={styles.container}>
        <span>TodoList</span>
        <TodoForm />
        {list.map((item) => (
            <TodoItem key={item.id} {...item} />
        ))}
      </div>
  );
};

export default TodoList;
