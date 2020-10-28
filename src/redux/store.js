import { configureStore } from '@reduxjs/toolkit'
import VotingReducer from './action'
import categoryReducer from './cartegory/cartegorySlice'

const store = configureStore({
  reducer: {
    vote: VotingReducer,
    category: categoryReducer
  }
})

export default store;