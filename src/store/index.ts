import {configureStore} from "@reduxjs/toolkit";
import todo from "@store/todo/todoSlice";
import categories from "@store/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    todo,
    categories
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
