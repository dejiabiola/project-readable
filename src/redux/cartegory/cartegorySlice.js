import { createSlice } from '@reduxjs/toolkit'

export const cartegorySlice = createSlice({
  name: 'category',
  initialState: {
    isLoading: false,
    category: [],
    categoryPost: [] 
  },
  reducers: {
    setCartegory: (state, action) => {
      state.category = action.payload;
      state.isLoading = false;
    },
    loadingCartegory: state => {
      state.isLoading = true
    },
    setCategoryPost: (state, action) => {
      state.categoryPost = [...action.payload]
      state.isLoading = false
    }
  }
})

export const { setCartegory, loadingCartegory, setCategoryPost } = cartegorySlice.actions


export const handleSetCartegory = () => async (dispatch) => {
  dispatch(loadingCartegory());
  try {
    const response = await fetch('http://localhost:3001/categories', {
      headers: {
        "authorization": "whatever"
      }
    })
    const data = await response.json();
    const { categories } = data;
    console.log(categories)
    dispatch(setCartegory(categories))

  } catch (error) {
    console.log(error)
  }
}

export const handleSetCartegoryPost = (category) => async (dispatch) => {
  dispatch(loadingCartegory());
  try {
    const response = await fetch(`http://localhost:3001/${category}/posts`, {
      headers: {
        "authorization": "whatever"
      }
    })
    const data = await response.json();
    console.table("data", data)
    dispatch(setCategoryPost(data))

  } catch (error) {
    console.log(error)
  }
}


export const selectCategories = state => state.category.category;
export const selectCategoryPost = state => state.category.categoryPost;

export default cartegorySlice.reducer