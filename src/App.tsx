import styles from './App.module.scss'
import TodoList from "@components/todoList/TodoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import {useAppSelector} from "@store/hooks";

const App = () => {
  const {currentCategory} = useAppSelector(state => state.categories)
  const isCurrentCategoryAll = currentCategory === 'all'
  const route = isCurrentCategoryAll ? '/' : ':category'
  return (
      <BrowserRouter>
        <div className={styles.main_container}>
          <div className={styles.container}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route path={route} element={<TodoList/>}/>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
};

export default App;
