import { createSlice } from '@reduxjs/toolkit'

export const votingSlice = createSlice({
  name: 'vote', 
  initialState: {
    voteUp: 0,
    voteDown: 0
  },
  reducers: {
    setInitialVote: (state, action) => {
      state.voteUp += action.payload.voteUp;
      state.voteDown += action.payload.voteDown
    },
    increment: state => {
      state.voteUp += 1;
    },
    decrement: state => {
      state.voteDown += 1;
    }
  }
}) 

export const {setInitialVote, increment, decrement} = votingSlice.actions;


export const setInitialVoteValueAsync = () => dispatch => {

}

export const countUp = state => state.vote.voteUp;
export const countDown = state => state.vote.voteDown;


export default votingSlice.reducer;