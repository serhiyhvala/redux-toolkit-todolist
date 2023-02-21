import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

export type CategoriesType = {
  id: string,
  title: string,
  shortName: string
}

export type InitialStateCategoriesType = {
  categories: CategoriesType[],
  currentCategory: string
}

const initialState:InitialStateCategoriesType = {
  categories: [{
    id: uuidv4(),
    title: 'All Todos',
    shortName: 'all'
  }],
  currentCategory: 'all'
}

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    addCategory: (state, action:PayloadAction<string>) => {
      const newCategory:CategoriesType = {
        id: uuidv4(),
        title: action.payload,
        shortName: action.payload.toLowerCase().replace(/ /g,'')
      }
      state.categories.push(newCategory)
    },
    changeCategory: (state, action:PayloadAction<string>) => {
      state.currentCategory = action.payload
    }
  }
})

export const {addCategory, changeCategory} = categoriesSlice.actions

export default categoriesSlice.reducer
