import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers} from '../../redux/slice/userSlice';
import {useNavigate} from 'react-router-dom';

const Users = () => {
    const {isLoading, users, error} = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getAllUsers())
    }, [dispatch])

    const handleDelete = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            //dispatch(deleteUser(id)); // Dispatch the delete action
        }
    };

    const handleView = (userId) => {
        navigate(`/users/${userId}`)
    };
    
  return (
    <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Users</h1>

        {isLoading ? (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-700">Loading posts...</h1>
                <div className="text-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600"></div>
                </div>
            </div>
        ) : error ? (
            <div className="flex justify-center">
                <p className="text-red-500 text-xl">Error loading users: {error.messages}</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                        {/* User Image and Basic Info */}
                        <div className="flex items-center mb-4">
                            <img
                                src={user.image}
                                alt={user.firstName}
                                className="w-16 h-16 rounded-full shadow-lg mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
                                <p className="text-gray-500">{user.username}</p>
                                <p className="text-gray-500">{user.email}</p>
                            </div>
                        </div>

                        {/* View and Delete Buttons */}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleView(user.id)}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                            >
                                View
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Users;