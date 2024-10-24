'use client'
import Courses from '@/components/Courses'
import React, { useEffect, useState } from 'react'
import LoadingPage from '../loading'

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])
  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center">Courses Page</h1>
      <Courses courses={courses}></Courses>
    </div>
  )
}
