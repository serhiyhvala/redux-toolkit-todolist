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
    }
  }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer
