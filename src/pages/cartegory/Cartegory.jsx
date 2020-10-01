import React from 'react'
import PostPreview from '../../components/posts-preview/PostPreview'
import {CategoryPageContainer} from './Cartegory.styles'


const numbers = [1, 2, 3, 5, 3, 2]

const Cartegory = () => {
  return (
    <CategoryPageContainer>
      <h1>Cartegory</h1>
      <div>

      {
        numbers.map(num => (
          <PostPreview key={num} />
        ))
      }
      </div>
    </CategoryPageContainer>
  )
}

export default Cartegory
