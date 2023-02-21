import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

export type TodoItemType = {
  id: string,
  title: string,
  completed: boolean
}

export type InitialStateType = {
  list: TodoItemType[]
}

const initialState:InitialStateType = {
  list: []
}

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<string>) => {
      const newTodo:TodoItemType = {
        id: uuidv4(),
        title: action.payload,
        completed: false
      }
      state.list.push(newTodo)
    },
    toggleTodo: (state, action:PayloadAction<string>) => {
      state.list = state.list.map(item => item.id === action.payload ? {...item, completed: !item.completed} : item)
    },
    deleteSingleTodo: (state, action:PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
    deleteAllTodos: (state) => {
      state.list = []
    }
  }
})

export const {addTodo, toggleTodo, deleteSingleTodo, deleteAllTodos} = todoSlice.actions

export default todoSlice.reducer

export class TodoItem {
}
