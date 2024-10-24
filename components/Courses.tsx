import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  link: string
  level: string
}

interface CoursesProps {
  courses: Course[]
}

const Courses: React.FC<CoursesProps> = async ({ courses }) => {
  return (
    <div className="grid-1">
      {courses.map((course: Course) => (
        <div key={course.id} className="bg-black text-white p-4 m-4 rounded-md">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="transition py-2 px-4 bg-gray-600 hover:bg-gray-400 text-white rounded-md mb-4 hover:ease-in duration-300"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
