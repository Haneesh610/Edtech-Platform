import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <navbar className="px-4 lg:px-6 bg-customBg h-14 flex items-center">
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
                    Courses
                </Link>
                <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
                    Programs
                </Link>
                <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
                    About
                </Link>
                <Link to="#" className="text-lg font-medium hover:underline underline-offset-4">
                    Contact
                </Link>
            </nav>
        </navbar>
    )
}

export default Navbar