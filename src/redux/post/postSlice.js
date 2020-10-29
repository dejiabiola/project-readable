import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    isLoading: false,
    loadAddPost: false,
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
    loadingAddNewPost: state => {
      state.loadAddPost = !state.loadAddPost
    },
    addNewPost: (state, action) => {
      state.loadAddPost = !state.loadAddPost;
      state.posts = [...state.posts, action.payload]
    }

  }
})

export const { setAllPosts, loadingAllPosts, loadingAddNewPost, addNewPost } = postSlice.actions


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

export const handleNewPost = (data) => async (dispatch) => {
  dispatch(loadingAddNewPost())
  try {
    const response = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        "authorization": "whatever"
      }
    })
    const resData = await response.json();
    dispatch(addNewPost(resData))
  } catch (error) {
    dispatch(loadingAddNewPost())
  }
}



export const selectAllPosts = state => state.post.posts;

export default postSlice.reducer