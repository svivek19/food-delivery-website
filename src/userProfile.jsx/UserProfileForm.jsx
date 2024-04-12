import React, { useState } from "react";

const UserProfileForm = ({ user, updateUserProfile }) => {
  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    email: user.email || "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile({
      displayName: formData.displayName,
      email: formData.email,
    }).then(() => {
      setFormData({
        displayName: formData.displayName,
        email: formData.email,
      });
      setIsEditing(false);
    });
  };

  return (
    <div className="w-11/12 md:w-4/6 mx-auto bg-[#ececec] rounded-b-3xl">
      <div className="flex justify-center">
        <div className="w-5/6">
          {isEditing ? (
            <div className="mt-2">
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium text-[#52321b]">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border capitalize border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#52321b]">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mt-6 py-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSubmit}
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="mt-2">
              <div>
                <p className="text-lg text-start font-medium text-[#52321b]">
                  Name:
                </p>
                <p className="mt-1 p-2 w-full text-lg border capitalize bg-gray-300 bg rounded-md">
                  {formData.displayName}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-lg text-start  font-medium text-[#52321b]">
                  Email:
                </p>
                <p className="mt-1 p-2 text-lg border bg-gray-300 bg rounded-md ">
                  {formData.email}
                </p>
              </div>
              <div className="mt-6 py-4">
                <button
                  type="button"
                  className="px-6 py-2 text-indigo-700 rounded-md shadow-sm text-sm font-medium border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
