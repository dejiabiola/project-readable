import React, {memo} from 'react'
import {PostPreviewDiv, VoteDownSvg, VoteUpSvg, PostDate, Title, Authur} from './PostPreview.styles'
import { countUp, countDown, increment, decrement } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux' 

const PostPreview = ({ fromHome, post }) => {
  const dispatch = useDispatch();
  const voteUp = useSelector(countUp)
  const voteDown = useSelector(countDown)
  return (
    <PostPreviewDiv fromHome={fromHome}>
      <div>
        <Title to={`/post/${post.id}`}>{post.title}</Title>
        <PostDate>{post.timestamp}</PostDate>
      </div>
      <div>
        <Authur>written by: {post.author}</Authur>
        <div>
          <div>
            <VoteUpSvg onClick={() => dispatch(increment())} />
            <span>{voteUp}</span>
          </div>
          <div>
            <VoteDownSvg onClick={() => dispatch(decrement())} />
            <span>{voteDown}</span>
          </div>
        </div>
      </div>
      <span className="mt-2 bg-gray-500 p-2 py-0 inline-block rounded-full">{post.category}</span>
    </PostPreviewDiv>
  )
}

export default memo(PostPreview)
