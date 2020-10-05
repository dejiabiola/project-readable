import React from 'react'
import {HomeStyleContainer, SidePanel, NewPostLink, MainPanel, CartegoryLink} from './home.styles'
import PostPreview from '../../components/posts-preview/PostPreview'

const Home = () => {
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
          <div className="flex justify-around">
          <CartegoryLink to='/cartegory/link'>Cartegory</CartegoryLink>
          </div>
        </div>
        <div className="posts">
          <h2 className="text-xl font-bold font-sans mb-8">Posts</h2>
          <div className="flex flex-wrap justify-around">
            <PostPreview fromHome />
            <PostPreview fromHome/>
            <PostPreview fromHome/>
            <PostPreview fromHome/>
          </div>
        </div>
      </MainPanel>
    </HomeStyleContainer>
  )
}

export default Home
