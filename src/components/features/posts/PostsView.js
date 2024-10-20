import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllPosts, postDelete} from '../../redux/slice/postSlice';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';
import {Link} from 'react-router-dom';

const BooksView = () => {
  const {isLoading, posts, error} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])


  const handleEdit = (postId) => {
    // Navigate to the edit page or open the post in edit mode
    console.log('Edit post:', postId);
  };

  const handleDelete = (postId) => {
    dispatch(postDelete(postId));
  };

   // Handle loading state
   if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Loading posts...</h1>
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600"></div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-red-600">Error</h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts && posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Post Title */}
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>

            {/* Post Content Preview */}
            <p className="text-gray-600 mt-2">{post.body.substring(0, 100)}...</p>

            {/* Actions */}
            <div className="mt-4 flex justify-between items-center">
              <Link
                to = {`/post/${post.id}`}
                className="flex items-center text-blue-600 hover:text-blue-400"
              >
                <FiEye className="mr-2" />
                View
              </Link>
              <button
                onClick={() => handleEdit(post.id)}
                className="flex items-center text-yellow-600 hover:text-yellow-400"
              >
                <FiEdit className="mr-2" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="flex items-center text-red-600 hover:text-red-400"
              >
                <FiTrash2 className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default BooksView