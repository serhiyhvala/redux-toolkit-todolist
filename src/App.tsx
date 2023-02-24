import styles from './App.module.scss'
import TodoList from "@components/todoList/TodoList";
import { Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
  return (
        <div className={styles.main_container}>
          <div className={styles.container}>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<TodoList/>}/>
                <Route path='/:category' element={<TodoList/>}/>
              </Route>
            </Routes>
          </div>
        </div>
  );
};

export default App;
