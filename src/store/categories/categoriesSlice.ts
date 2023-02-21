import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

export type CategoriesType = {
  id: string,
  title: string
}

export type InitialStateCategoriesType = {
  categories: CategoriesType[]
}

const initialState:InitialStateCategoriesType = {
  categories: [{
    id: uuidv4(),
    title: 'All Todos'
  }]
}

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    addCategory: (state, action:PayloadAction<string>) => {
      const newCategory:CategoriesType = {
        id: uuidv4(),
        title: action.payload
      }
      state.categories.push(newCategory)
    }
  }
})

export const {addCategory} = categoriesSlice.actions

export default categoriesSlice.reducer
