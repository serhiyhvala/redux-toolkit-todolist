import styles from "./TodoForm.module.scss";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAppDispatch} from "@store/hooks";
import {addTodo} from "@store/todo/todoSlice";

const TodoForm = () => {
  const [inputField, setInputField] = useState('')
  const dispatch = useAppDispatch()
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo(inputField))
    setInputField('')
  }
  const handleChangeInputField = (e: ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value)
  }
  return (
      <form className={styles.todo_input} onSubmit={handleSubmitForm}>
        <input type="text" placeholder='Add new list item' value={inputField} onChange={handleChangeInputField}/>
        <button className={styles.todo_button}>Add Task</button>
      </form>
  );
};

export default TodoForm;
