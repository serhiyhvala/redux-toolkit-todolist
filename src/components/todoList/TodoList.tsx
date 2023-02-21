import styles from './TodoList.module.scss'
import TodoItem from "@components/todoItem/TodoItem";
import TodoForm from "@components/todoForm/TodoForm";
import {useAppSelector} from "@store/hooks";

const TodoList = () => {
  const {list} = useAppSelector(state => state.todo)
  const totalCount = list.length
  return (
      <div className={styles.container}>
        <div className={styles.container_list}>
          <span>TodoList</span>
          <TodoForm />
          {totalCount ? list.map((item) => (
              <TodoItem key={item.id} {...item}/>
          )) : "You Don't Have Any Todos"}
        </div>
        <div>
          {totalCount ? <span>Total Count: {totalCount}</span> : null}
        </div>
      </div>
  );
};

export default TodoList;
