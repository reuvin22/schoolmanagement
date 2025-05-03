import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    //Links are from database
    const library = [
        {
            link: "Dashboard",
            path: "/dashboard"
        },
        {
            link: "Books",
            path: "/books"
        },
        {
            link: "Borrowed",
            path: "/borrowed"
        },
        {
            link: "Requests",
            path: "/requests"
        },
        {
            link: "Logout",
            path: "/logout"
        }
    ];
    //Links are from database
    const teacher = [
        {
            link: "Dashboard",
            path: "/dashboard"
        },
        {
            link: "Announcements",
            path: "/announcements"
        },
        {
            link: "Quizes",
            path: "/quizes"
        },
        {
            link: "Students",
            path: "/students"
        },
        {
            link: "Grades",
            path: "/grades"
        },
        {
            link: "Time In",
            path: "/time-in"
        },
        {
            link: "Logout",
            path: "/logout"
        }
    ]

  return (
    <div>
        <div className='border h-screen w-56 place-items-center'>
            <div className='rounded-2xl bg-black h-50 w-50 my-10'>

            </div>
            <hr className='border-1 text-gray-400 w-full'/>
            <div className='grid gap-7 mt-15'>
                {library.map(links => {
                    return <div className='text-xl cursor-pointer'>{links.link}</div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Sidebar