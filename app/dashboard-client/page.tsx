'use client'
import { useAuth, useUser } from '@clerk/nextjs'
export default function ClientDashboard() {
  const { isLoaded: isLoadedAuth, userId, sessionId } = useAuth()
  const { isLoaded: isLoadedUser, isSignedIn, user } = useUser()

  if (!isLoadedAuth || !userId) {
    return null
  }
  if (!isLoadedUser || !isSignedIn) {
    return null
  }
  if (!user.fullName) user.fullName = 'Unknown'
  return (
    <div className="font-[family-name:var(--font-geist-mono)]">
      <h1 className="text-4xl font-extrabold mb-1">Dashboard-ClientSide</h1>
      <p>Hello, {user.fullName}. Welcome to DashBoard-ClientSide.</p>
      <br />
      <p>Your user ID: {userId}</p>
      <p>Your current active session: {sessionId}</p>
    </div>
  )
}
