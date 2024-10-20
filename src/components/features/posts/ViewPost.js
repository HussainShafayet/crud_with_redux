// src/components/ViewPost.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiEdit, FiTrash2 } from 'react-icons/fi'; // Icons for actions
import {useDispatch, useSelector} from 'react-redux';
import {getPost, postDelete} from '../../redux/slice/postSlice';

const ViewPost = () => {
    const navigate = useNavigate();
  const { postId } = useParams(); // Retrieve the postId from the route parameters

const {isLoading, post, error } = useSelector((state)=> state.post);

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId))
  }, [postId]);

  const handleEdit = () => {
    // Navigate to the edit post page
    //history.push(`/edit/${postId}`);
  };

  const handleDelete = () => {
    dispatch(postDelete(postId)).then((result)=>{
        if (result.meta.requestStatus === 'fulfilled') {
            // Redirect to the posts list after successful deletion
            navigate('/posts');
        }
        
    })
  };

  const handleBack = () => {
    //history.push('/posts');
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Loading post...</h1>
        <div className="text-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-red-600">Error</h1>
        <p className="text-gray-600">{error}</p>
        <Link
          to={'/'}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
        >
          <FiArrowLeft className="inline mr-2" />
          Back to Posts
        </Link>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        to={'/'}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-500"
      >
        <FiArrowLeft className="inline mr-2" />
        Back to Posts
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>

      <p className="text-lg text-gray-700 mb-6">{post.body}</p>

      {/* Action buttons: Edit and Delete */}
      <div className="flex space-x-4">
        <button
          onClick={handleEdit}
          className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FiEdit className="mr-2" />
          Edit Post
        </button>
        <button
          onClick={handleDelete}
          className="flex items-center bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FiTrash2 className="mr-2" />
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default ViewPost;
