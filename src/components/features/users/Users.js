import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers} from '../../redux/slice/userSlice';

const Users = () => {
    const {isLoading, users, error} = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllUsers())
    }, [dispatch])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            //dispatch(deleteUser(id)); // Dispatch the delete action
        }
    };

    const handleView = (id) => {
        //history.push(`/userview/${id}`); // Navigate to the detailed view
    };
    
  return (
    //<div className="container mx-auto py-8 px-4">
    //        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">User Profiles</h1>

    //        {isLoading ? (
    //            <div className="flex justify-center">
    //                <div className="text-blue-500 text-xl">Loading users...</div>
    //            </div>
    //        ) : error ? (
    //            <div className="flex justify-center">
    //                <p className="text-red-500 text-xl">Error loading users: {error}</p>
    //            </div>
    //        ) : (
    //            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //                {users.map((user) => (
    //                    <div
    //                        key={user.id}
    //                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
    //                    >
    //                        {/* User Image and Basic Info */}
    //                        <div className="flex items-center mb-6">
    //                            <img
    //                                src={user.image}
    //                                alt={user.firstName}
    //                                className="w-20 h-20 rounded-full shadow-lg mr-4"
    //                            />
    //                            <div>
    //                                <h3 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h3>
    //                                <p className="text-sm text-gray-500">{user.role.toUpperCase()}</p>
    //                                <p className="text-gray-500 text-sm">{user.username}</p>
    //                            </div>
    //                        </div>

    //                        {/* Personal Information */}
    //                        <div className="mb-4">
    //                            <h4 className="text-xl font-bold mb-2 text-gray-700">Personal Info</h4>
    //                            <p className="text-gray-600"><strong>Age:</strong> {user.age}</p>
    //                            <p className="text-gray-600"><strong>Gender:</strong> {user.gender}</p>
    //                            <p className="text-gray-600"><strong>Blood Group:</strong> {user.bloodGroup}</p>
    //                            <p className="text-gray-600"><strong>Height:</strong> {user.height} cm</p>
    //                            <p className="text-gray-600"><strong>Weight:</strong> {user.weight} kg</p>
    //                            <p className="text-gray-600"><strong>Hair:</strong> {user.hair.color} ({user.hair.type})</p>
    //                            <p className="text-gray-600"><strong>Eye Color:</strong> {user.eyeColor}</p>
    //                        </div>

    //                        {/* Contact Information */}
    //                        <div className="mb-4">
    //                            <h4 className="text-xl font-bold mb-2 text-gray-700">Contact Info</h4>
    //                            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
    //                            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
    //                            <p className="text-gray-600"><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}, {user.address.country}</p>
    //                        </div>

    //                        {/* Company Information */}
    //                        <div className="mb-4">
    //                            <h4 className="text-xl font-bold mb-2 text-gray-700">Company Info</h4>
    //                            <p className="text-gray-600"><strong>Company:</strong> {user.company.name}</p>
    //                            <p className="text-gray-600"><strong>Department:</strong> {user.company.department}</p>
    //                            <p className="text-gray-600"><strong>Title:</strong> {user.company.title}</p>
    //                            <p className="text-gray-600"><strong>Company Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state}</p>
    //                        </div>

    //                        {/* Bank & Crypto Information */}
    //                        <div className="mb-4">
    //                            <h4 className="text-xl font-bold mb-2 text-gray-700">Bank & Crypto Info</h4>
    //                            <p className="text-gray-600"><strong>Card Type:</strong> {user.bank.cardType}</p>
    //                            <p className="text-gray-600"><strong>Card Number:</strong> **** **** **** {user.bank.cardNumber.slice(-4)}</p>
    //                            <p className="text-gray-600"><strong>Card Expiry:</strong> {user.bank.cardExpire}</p>
    //                            <p className="text-gray-600"><strong>Crypto Wallet:</strong> {user.crypto.wallet} ({user.crypto.coin})</p>
    //                        </div>

    //                        {/* Birth Date & University */}
    //                        <div className="mb-4">
    //                            <h4 className="text-xl font-bold mb-2 text-gray-700">Other Info</h4>
    //                            <p className="text-gray-600"><strong>Birth Date:</strong> {new Date(user.birthDate).toLocaleDateString()}</p>
    //                            <p className="text-gray-600"><strong>University:</strong> {user.university}</p>
    //                        </div>
    //                    </div>
    //                ))}
    //            </div>
    //        )}
    //    </div>

    <div className="container mx-auto py-8 px-4">
    <h1 className="text-3xl font-bold text-center mb-8">Users</h1>

    {isLoading ? (
        <div className="flex justify-center">
            <div className="text-blue-500 text-xl">Loading users...</div>
        </div>
    ) : error ? (
        <div className="flex justify-center">
            <p className="text-red-500 text-xl">Error loading users: {error}</p>
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