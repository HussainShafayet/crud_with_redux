import React from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import {Layout} from '../layouts';
import {AddPost, EditPost, PostsView, ViewPost} from '../features/posts';
import {Users, UserView} from '../features/users';

const Index = () => {
  return (
    <>
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post-add' element={<AddPost />} />
            <Route path='/post-edit/:postId' element={<EditPost />} />
            <Route path='/post/:postId' element={<ViewPost />} />
            <Route path='/posts' element={<PostsView />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:userId' element={<UserView />} />

            {/*Not Found*/}
            <Route path='*' element={<NotFound />} />
            </Routes>
        </Layout>
            
        </BrowserRouter>
    </>
  )
}

export default Index;