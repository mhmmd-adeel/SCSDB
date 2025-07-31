import { combineReducers,configureStore } from '@reduxjs/toolkit'
import  { movieSlice }  from './reducers/movieSlice'
import  { tvSlice }  from './reducers/tvSlice'
import  { peopleSlice }  from './reducers/peopleSlice'

export const store = configureStore({
  reducer: {
    movie:movieSlice.reducer,
    tv:tvSlice.reducer,
    people:peopleSlice.reducer,

  },
}) 