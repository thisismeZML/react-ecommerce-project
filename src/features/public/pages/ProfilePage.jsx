import React, { useState } from "react";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Zin Min Latt",
    email: "thatismetheoneudunknow@gmail.com",
    phone: "(959) 784-063-395",
    address: "Building (D), Room (28), Kyaik Waing Pagoda Road, Mayangone, Yangon",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className=" flex justify-center items-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">My Profile</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <img
              src="/dev.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full border border-gray-300 shadow-sm object-cover"
            />
            <button
              className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
              onClick={() => alert("Change profile picture functionality")}
            >
              Change Picture
            </button>
          </div>

          {/* User Information */}
          <div className="flex-1">
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full mt-2 px-4 py-2 border ${
                    editMode ? "border-blue-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring ${
                    editMode ? "focus:ring-blue-200" : ""
                  }`}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full mt-2 px-4 py-2 border ${
                    editMode ? "border-blue-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring ${
                    editMode ? "focus:ring-blue-200" : ""
                  }`}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full mt-2 px-4 py-2 border ${
                    editMode ? "border-blue-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring ${
                    editMode ? "focus:ring-blue-200" : ""
                  }`}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full mt-2 px-4 py-2 border ${
                    editMode ? "border-blue-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring ${
                    editMode ? "focus:ring-blue-200" : ""
                  }`}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              {editMode ? (
                <button
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                  onClick={() => setEditMode(false)}
                >
                  Save Changes
                </button>
              ) : (
                <button
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              )}
              {editMode && (
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;