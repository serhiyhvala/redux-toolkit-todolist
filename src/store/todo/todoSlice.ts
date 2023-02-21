import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

export type TodoItemType = {
  id: string,
  title: string,
  completed: boolean
  category: string
}

export type InitialStateType = {
  list: TodoItemType[]
}

export type PayloadType = {
  title: string,
  category: string
}

const initialState:InitialStateType = {
  list: []
}

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<PayloadType>) => {
      const {title, category} = action.payload
      const newTodo:TodoItemType = {
        id: uuidv4(),
        title: title,
        completed: false,
        category: category.toLowerCase().replace(/ /g,'')
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
