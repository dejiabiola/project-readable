import React from 'react'
import Comment from '../comment/Comment'
import {StyledPostDetail} from './PostDetail.style'

const PostDetail = () => {
  return (
    <StyledPostDetail>
    <div className="titlr mb-12">
      <h1>Post Title</h1>
      <p>Post Author</p>
      <p>Post Date</p>
    </div>
    <div className="post mb-16">
      This is the whole post content
    </div>
    <div className="comment">
    <h2 className="mb-10">Comment</h2>
      <Comment />
      <div className="newComment">
        <form action="">
          <label htmlFor="new-comment">New Comment</label>
          <textarea name="new-comment" id="new-comment" cols="30" rows="10"></textarea>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
    
    </StyledPostDetail>
  )
}

export default PostDetail
