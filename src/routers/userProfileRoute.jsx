import React from 'react'
import ProfilePage from '../features/public/pages/ProfilePage'
import UserLayout from '../features/public/components/UserLayout'
import SettingPage from '../features/public/components/SettingPage'

const UserProfileRoute = [
  {
    path: "profile",
    element: <UserLayout/>,
    children: [
      {
        index: true,
        element: <ProfilePage/>
      },
      {
        path: "setting",
        element: <SettingPage/>
      }
    ]
  }
]

export default UserProfileRoute