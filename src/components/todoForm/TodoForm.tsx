import styles from "./TodoForm.module.scss";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAppDispatch} from "@store/hooks";
import {addTodo, PayloadType} from "@store/todo/todoSlice";

const TodoForm = () => {
  const initialInputField = {
    title: '',
    category: ''
  }
  const [inputField, setInputField] = useState<PayloadType>(initialInputField)
  const dispatch = useAppDispatch()
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addTodo(inputField))
    setInputField(initialInputField)
  }
  const handleChangeInputField = (e: ChangeEvent<HTMLInputElement>) => {
    setInputField({...inputField, [e.target.name]: e.target.value})
  }
  return (
      <form className={styles.todo_input} onSubmit={handleSubmitForm}>
        <input type="text" name='title' required={true} placeholder='Add new list item' value={inputField.title}
               onChange={handleChangeInputField}/>
        <input type="text" name='category' placeholder='Add Category' value={inputField.category}
               onChange={handleChangeInputField}/>
        <button className={styles.todo_button}>Add Task</button>
      </form>
  );
};

export default TodoForm;
