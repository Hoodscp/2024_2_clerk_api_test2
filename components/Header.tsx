import React from 'react'
import Link from 'next/link'
import {
  SignedOut,
  SignOutButton,
  SignInButton,
  SignUpButton,
  SignedIn,
} from '@clerk/nextjs'

export default function Header() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)]">
      <nav className="bg-black py-4 px-8 border-double border-b-8 border-white">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-gray-500 hover:text-gray-300 mr-4">
                [Clerk Auth]
              </div>
            </Link>
            <Link href="/dashboard">
              <div className="text-white hover:text-gray-300 mr-4">
                DashBoard
              </div>
            </Link>
            <Link href="/dashboard-client">
              <div className="text-white hover:text-gray-300 mr-4">Client</div>
            </Link>
            <Link href="/profile">
              <div className="text-white hover:text-gray-300 mr-4">Profile</div>
            </Link>
            <Link href="/repos">
              <div className="text-white hover:text-gray-300 mr-4">Repos</div>
            </Link>
            <Link href="/courses">
              <div className="text-white hover:text-gray-300 mr-4">Course</div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className="text-white hover:text-gray-300 mr-4">
                <SignInButton>
                  <button>Log In</button>
                </SignInButton>
              </div>
              <div className="text-white hover:text-gray-300 mr-4">
                <SignUpButton>
                  <button>Register</button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="text-white hover:text-gray-300 mr-4">
                <SignOutButton>
                  <button>Log Out</button>
                </SignOutButton>
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
