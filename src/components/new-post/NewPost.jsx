import React from 'react'
import {AddPostWrapper} from './NewPost.style'

const NewPost = () => {
  return (
    <AddPostWrapper>
      <form action="">
        <div className="title">
          <label htmlFor="title" className="font-bold font-sans text-xl">Enter the title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="post">
          <label htmlFor="post" className="font-bold font-sans text-xl">Enter your post</label>
          <textarea name="post" id="post" cols="30" rows="10"></textarea>
        </div>
        <div className="flex justify-end">
          <button>Publish</button>
        </div>
      </form>
    </AddPostWrapper>
  )
}

export default NewPost
