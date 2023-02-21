import styles from './App.module.scss'
import Categories from "./components/categories/Categories";
import TodoList from "./components/todoList/TodoList";

const App = () => {
  return (
      <div className={styles.main_container}>
        <div className={styles.container}>
          <Categories/>
          <TodoList/>
        </div>
      </div>
  );
};

export default App;
