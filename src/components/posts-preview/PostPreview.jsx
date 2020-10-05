import React from 'react'
import {PostPreviewDiv, VoteDownSvg, VoteUpSvg, PostDate, Title, Authur} from './PostPreview.styles'


const PostPreview = ({ fromHome }) => {
  return (
    <PostPreviewDiv fromHome={fromHome}>
      <div>
        <Title>The stranded goat</Title>
        <PostDate>27 - 04 - 1994</PostDate>
      </div>
      <div>
        <Authur>written by: Authur Meyer</Authur>
        <div>
          <div>
            <VoteUpSvg />
            <span>28</span>
          </div>
          <div>
            <VoteDownSvg />
            <span>8</span>
          </div>
        </div>
      </div>
      <span className="mt-2 bg-gray-500 p-2 py-0 inline-block rounded-full">cartegory</span>
    </PostPreviewDiv>
  )
}

export default PostPreview
