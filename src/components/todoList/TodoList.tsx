import styles from './TodoList.module.scss'
import TodoItem from "@components/todoItem/TodoItem";
import TodoForm from "@components/todoForm/TodoForm";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {deleteAllTodos, getTodosFromLocalStorage} from "@store/todo/todoSlice";
import {useEffect} from "react";

const TodoList = () => {
  const {list} = useAppSelector(state => state.todo)
  const {categories, currentCategory} = useAppSelector(state => state.categories)
  const isCurrentCategoryAll = currentCategory === 'all'
  const filteredList = list.filter(item => isCurrentCategoryAll ? item : item.category === currentCategory)
  const dispatch = useAppDispatch()
  const totalCount = filteredList.length
  const categoryName = categories.find(item => item.shortName === currentCategory)?.shortName
  useEffect(() => {
    const storageTodo = JSON.parse(localStorage.getItem('todo') || '[]')
    if (storageTodo?.length > 0) {
      dispatch(getTodosFromLocalStorage(storageTodo))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(list))
  }, [list])
  return (
      <div className={styles.container}>
        <div className={styles.container_list}>
          {isCurrentCategoryAll ? <span>Todo List</span> : <span>{categoryName}</span>}
          <TodoForm/>
          {totalCount ? filteredList.map((item) => (
              <TodoItem key={item.id} {...item}/>
          )) : "You Don't Have Any Todos"}
        </div>
        {totalCount > 0 && (
            <div className={styles.todo_footer}>
              <span>Total Count: {totalCount}</span>
              {isCurrentCategoryAll && <span onClick={() => dispatch(deleteAllTodos())}>Clear All Tasks</span>}
            </div>
        )}
      </div>
  );
};

export default TodoList;
