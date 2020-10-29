import React, { useState, useEffect } from 'react'
import {AddPostWrapper} from './NewPost.style'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategories, handleSetCartegory } from '../../redux/cartegory/cartegorySlice'
import { handleNewPost } from '../../redux/post/postSlice'

const NewPost = () => {
  const categories = useSelector(selectCategories)
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    title: '',
    category: 'react',
    body: ''
  })

  useEffect(() => {
    dispatch(handleSetCartegory())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = Date.now()
    const data = {
      ...formState,
      id: date,
      timestamp: date,  
      author: 'Deji Abiola'
    }
    dispatch(handleNewPost(data))
  }

  return (
    <AddPostWrapper>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <label htmlFor="title" className="font-bold font-sans text-xl">Enter the title</label>
          <input type="text" id="title" name="title" onChange={e => setFormState({
            ...formState,
            title: e.target.value
          })} />
        </div>
        <div className="category">
        <p>Select the category</p>
          <select onChange={e => setFormState({
            ...formState,
            category: e.target.value
          })}>
          {
            categories.map(({name}) => (
              <option key={name} name={name} value={name}>{name}</option>
            ))
          }
          </select>
        </div>
        <div className="post">
          <label htmlFor="post" className="font-bold font-sans text-xl">Enter your post</label>
          <textarea name="post" id="post" cols="30" rows="10" onChange={e => setFormState({
            ...formState,
            body: e.target.value
          })}></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit">Publish</button>
        </div>
      </form>
    </AddPostWrapper>
  )
}

export default NewPost
