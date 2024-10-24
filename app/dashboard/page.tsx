import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashBoard() {
 const { userId } = auth()
 const user = await currentUser()
 return (
  <div className="font-[family-name:var(--font-geist-mono)]">
   <h1 className="text-4xl font-extrabold mb-1">DashBoard-ServerSide</h1>
   <p>
    Welcome to DashBoard. 해당 페이지는 로그인된 사용자에게 보이는 페이지입니다.
   </p>
   <br />
   <div>
    {userId && (
     <div>
      <p>UserID: {userId}</p>
      <p>Name: {user?.fullName}</p>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
     </div>
    )}
   </div>
  </div>
 )
}
