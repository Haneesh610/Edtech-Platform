import React from 'react'
import { Link } from 'react-router-dom'
import bugs from '../assests/images/bugs.svg'
import instructer from '../assests/images/instructer.svg'
import Course from '../components/Course'
import { ArrowRight } from 'lucide-react'
const Home = () => {
    return (
        <div className="flex flex-col min-w-screen min-h-screen bg-customBg text-customText">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Courses
                    </Link>
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Programs
                    </Link>
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Unlock Your Potential with Our Edtech Platform
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Discover a world of knowledge and skills with our comprehensive edtech platform. Explore a diverse range of courses
                                        and programs tailored to your needs.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        to="#"
                                        className="inline-flex bg-customText hover:bg-gray-300 text-black h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                                    >
                                        Explore Courses
                                    </Link>
                                    <Link
                                        to="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>

                            <img
                                src={bugs}
                                alt="Hero"
                                className="mx-auto  aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                                width="550"
                                height="550"
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full flex justify-center py-12 lg:py-32 bg-courseBg">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Explore Our Diverse Course Offerings
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From programming to design, business to personal development, we have a wide range of courses to help you achieve your goals.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto  grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                            {/* Course Cards */}
                            <Course image='#' link='#' />
                            <Course image='#' link='#' />
                            <Course image='#' link='#' />
                        </div>
                    </div>
                </section>
                <section className='w-full flex px-9 justify-center space-x-4 items-center lg:py-32 '>
                    <div className='w-1/3'>
                        <img src={instructer} alt="" />
                    </div>
                    <div className='px-8 w-1/2 flex flex-col'>
                        <div>
                            <h1 className='text-7xl'>Become an <span style={{ 'color': '#F8B6B2' }}>instructor</span> </h1>
                            <p className='text-lg'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                            <button className='flex gap-1 text-start mt-3 bg-customText  sm:p-2  md:p-2 rounded text-customBg'>Start Teaching Today <ArrowRight /></button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-xs text-muted-foreground">
                &copy; 2024 Edtech Platform. All rights reserved.
            </footer>
        </div>
    )
}

export default Home