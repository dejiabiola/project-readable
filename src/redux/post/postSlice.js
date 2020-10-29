import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: false,
    posts: [],
  },
  reducers: {
    setAllPosts: (state, action) => {
      state.posts = action.payload;
      state.isLoading = !state.isLoading;
    },
    loadingAllPosts: state => {
      state.isLoading = !state.isLoading
    },
  }
})

export const { setAllPosts, loadingAllPosts } = postSlice.actions


export const handleGetAllPosts = () => async (dispatch) => {
  dispatch(loadingAllPosts());
  try {
    const response = await fetch('http://localhost:3001/posts', {
      headers: {
        "authorization": "whatever"
      }
    })
    const data = await response.json();
    dispatch(setAllPosts(data))

  } catch (error) {
    console.log(error)
    dispatch(loadingAllPosts())
  }
}



export const selectAllPosts = state => state.post.posts;

export default postSlice.reducer