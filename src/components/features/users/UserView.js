import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {getUser} from "../../redux/slice/userSlice";

const UserView = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();

  const {isLoading, user, error} = useSelector((state) => state.user); // Assuming user contains the user


  useEffect(() => {
    dispatch(getUser(userId)); // Fetch user details based on the user ID from the URL
  }, [dispatch, userId]);

  return (
    <div className="container mx-auto py-8 px-4">
      <Link
        to="/users"
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4 inline-block hover:bg-blue-600 transition"
      >
        Back to Users
      </Link>

      {isLoading ? (
        <div className="flex justify-center">
          <div className="text-blue-500 text-xl">Loading user details...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center">
          <p className="text-red-500 text-xl">Error loading user: {error}</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* User Header */}
          <div className="flex items-center mb-6">
            <img
              src={user?.image}
              alt={user?.firstName}
              className="w-24 h-24 rounded-full shadow-lg mr-6"
            />
            <div>
              <h1 className="text-3xl font-bold">
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="text-gray-600">{user?.role.toUpperCase()}</p>
              <p className="text-gray-500">{user?.username}</p>
            </div>
          </div>

          {/* Personal Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Personal Information
            </h2>
            <p className="text-gray-600">
              <strong>Age:</strong> {user?.age}
            </p>
            <p className="text-gray-600">
              <strong>Gender:</strong> {user?.gender}
            </p>
            <p className="text-gray-600">
              <strong>Birth Date:</strong>{" "}
              {new Date(user?.birthDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              <strong>Blood Group:</strong> {user?.bloodGroup}
            </p>
            <p className="text-gray-600">
              <strong>Height:</strong> {user?.height} cm
            </p>
            <p className="text-gray-600">
              <strong>Weight:</strong> {user?.weight} kg
            </p>
            <p className="text-gray-600">
              <strong>Hair:</strong> {user?.hair.color} (
              {user?.hair.type})
            </p>
            <p className="text-gray-600">
              <strong>Eye Color:</strong> {user?.eyeColor}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Contact Information
            </h2>
            <p className="text-gray-600">
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {user?.phone}
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> {user?.address?.address},{" "}
              {user?.address?.city}, {user?.address?.state}{" "}
              {user?.address?.postalCode},{" "}
              {user?.address?.country}
            </p>
          </div>

          {/* Company Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Company Information
            </h2>
            <p className="text-gray-600">
              <strong>Company:</strong> {user?.company?.name}
            </p>
            <p className="text-gray-600">
              <strong>Department:</strong> {user?.company?.department}
            </p>
            <p className="text-gray-600">
              <strong>Title:</strong> {user?.company?.title}
            </p>
            <p className="text-gray-600">
              <strong>Company Address:</strong>{" "}
              {user?.company?.address?.address},{" "}
              {user?.company?.address?.city},{" "}
              {user?.company?.address?.state}{" "}
              {user?.company?.address?.postalCode},{" "}
              {user?.company?.address?.country}
            </p>
          </div>

          {/* Bank Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Bank Information
            </h2>
            <p className="text-gray-600">
              <strong>Card Type:</strong> {user?.bank?.cardType}
            </p>
            <p className="text-gray-600">
              <strong>Card Number:</strong> **** **** ****{" "}
              {user?.bank?.cardNumber.slice(-4)}
            </p>
            <p className="text-gray-600">
              <strong>Card Expiry:</strong> {user?.bank?.cardExpire}
            </p>
            <p className="text-gray-600">
              <strong>Currency:</strong> {user?.bank?.currency}
            </p>
            <p className="text-gray-600">
              <strong>IBAN:</strong> {user?.bank?.iban}
            </p>
          </div>

          {/* Crypto Info */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Cryptocurrency Information
            </h2>
            <p className="text-gray-600">
              <strong>Coin:</strong> {user?.crypto?.coin}
            </p>
            <p className="text-gray-600">
              <strong>Wallet:</strong> {user?.crypto?.wallet}
            </p>
            <p className="text-gray-600">
              <strong>Network:</strong> {user?.crypto?.network}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserView;
