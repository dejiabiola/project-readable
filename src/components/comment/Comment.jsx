import React, { useState } from 'react'
import {StyledComment, VoteButton} from './Comment.style'


const Comment = () => {
  const [votes, setVotes] = useState(1)

  return (
    <StyledComment>
    <div className="flex flex-col items-center justify-center">
      <VoteButton onClick={() => setVotes(votes + 1)} />
      <span className="my-1">{votes}</span>
      <VoteButton downvote onClick={() => setVotes(votes - 1)}/>
    </div>
    <div>
    <div className="mb-8 font-sans">
        <h2 className="font-sans text-lg">Author</h2>
        <span className="font-sans mb-1 text-sm">Time</span>
      </div>
      <div>
        <p>This is the post in question</p>
      </div>
    </div>
      
    </StyledComment>
  )
}

export default Comment
