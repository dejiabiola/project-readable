import React, { useEffect } from 'react'
import PostPreview from '../../components/posts-preview/PostPreview'
import {CategoryPageContainer} from './Cartegory.styles'
import { useParams } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { handleSetCartegoryPost, selectCategoryPost } from '../../redux/cartegory/cartegorySlice'


const Cartegory = () => {
  const slug = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectCategoryPost)

  useEffect(() => {
   dispatch(handleSetCartegoryPost(slug.category))
  }, [dispatch])

  return (
    <CategoryPageContainer>
      <h1>Cartegory</h1>
      <div>

      {
        posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))
      }
      </div>
    </CategoryPageContainer>
  )
}

export default Cartegory
