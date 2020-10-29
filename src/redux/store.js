import { configureStore } from '@reduxjs/toolkit'
import VotingReducer from './action'
import categoryReducer from './cartegory/cartegorySlice'
import postReducer from './post/postSlice'

const store = configureStore({
  reducer: {
    vote: VotingReducer,
    category: categoryReducer,
    post: postReducer
  }
})

export default store;