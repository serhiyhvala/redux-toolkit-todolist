import styles from './TodoList.module.scss'
import TodoItem from "@components/todoItem/TodoItem";
import TodoForm from "@components/todoForm/TodoForm";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {deleteAllTodos} from "@store/todo/todoSlice";

const TodoList = () => {
  const {list} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()
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
          {totalCount ? (
              <div className={styles.todo_footer}>
                <span>Total Count: {totalCount}</span>
                <span onClick={() => dispatch(deleteAllTodos())}>Clear All Tasks</span>
              </div>
          ) : null}
      </div>
  );
};

export default TodoList;
