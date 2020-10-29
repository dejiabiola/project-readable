import React, { useEffect } from 'react'
import {HomeStyleContainer, SidePanel, NewPostLink, MainPanel, CartegoryLink} from './home.styles'
import PostPreview from '../../components/posts-preview/PostPreview'
import { useDispatch, useSelector } from 'react-redux'
import { handleSetCartegory, selectCategories } from '../../redux/cartegory/cartegorySlice'
import { handleGetAllPosts, selectAllPosts } from '../../redux/post/postSlice'

const Home = () => {
  const categories = useSelector(selectCategories)
  const posts = useSelector(selectAllPosts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSetCartegory())
    dispatch(handleGetAllPosts())
  }, [dispatch])
  return (
    <HomeStyleContainer>
      <SidePanel className="p-10 md:pt-16">
        <h2 className="text-2xl font-sans font-bold mb-20">Sort By</h2>
        <div className="mb-20">
        <p>Order by VoteScore</p>
        <ul className="pl-5 mt-2">
          <li>Low to High</li>
          <li>High to Low</li>
        </ul>
        </div>
        <div>
        <p>Order by TimeStamp</p>
        <ul className="pl-5 mt-2">
          <li>Low to High</li>
          <li>High to Low</li>
        </ul>
        </div>
      </SidePanel>
      <MainPanel className="p-10">
        <div className="topLevel flex justify-between items-center mb-16">
          <h1 className="text-purple-600 text-3xl font-bold font-sans">Home Page</h1>
          <NewPostLink to='/new-post'>New Post</NewPostLink>
        </div>
        <div className="cartegories mb-16">
          <h2 className="text-xl font-bold font-sans mb-8">Cartegories</h2>
          <div className="flex justify-center">
          {
            categories.map(category => (
              <CartegoryLink to={`/category/${category.path}`} className="mx-2">{category.name}</CartegoryLink>
            ))
          }
          </div>
        </div>
        <div className="posts">
          <h2 className="text-xl font-bold font-sans mb-8">Posts</h2>
          <div className="flex flex-wrap justify-around">
          {
            posts.map(post => (
              <PostPreview fromHome key={post.id} post={post} />
            ))
          }
          </div>
        </div>
      </MainPanel>
    </HomeStyleContainer>
  )
}

export default Home
