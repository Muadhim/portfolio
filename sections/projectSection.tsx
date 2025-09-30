import Window from '@/components/window'
import React from 'react'

const ProjectSection = () => {
    const projects = [
        {
            title: "The Champion Race | Ganesha Operation",
            desc: "An interactive stage UI platform for “Champion Race”, an educational e-sport competition for elementary to high school students. Built with Next.js and WebSocket, the platform delivers real-time updates and engaging visuals on large displays during live events.",
            img: "/tcr.png"
        },
        {
            title: "Harmooni",
            desc: "A digital invitation platform currently in development, designed to simplify event management and guest engagement. Built with Next.js and Supabase, Harmooni focuses on delivering a modern, responsive user experience and efficient real-time data management for events.",
            img: "/harmooni.png"
        },
        {
            title: "Sweet API",
            desc: "A self-developed API management platform built with Go (Golang) and Next.js. Designed to help developers design, manage, and monitor APIs efficiently with a modern, scalable architecture.",
            img: "/sweet-api.jpeg"
        }
    ]
    return (
        <section className='flex flex-col items-center justify-center w-full h-screen'>
            <div className='w-fit max-w-[500px] h-fit bg-foreground/90 cp-bevel py-4 px-8 text-background mb-6 mx-auto'>
                <h3 className='font-bold text-base md:text-3xl text-center'>PROJECT</h3>
            </div>
            <ul className='flex max-w-11/12 md:max-w-[1400px] flex-wrap justify-center gap-3 overflow-scroll' style={{ maxHeight: "calc(100vh - 170px)" }}>
                {projects.map((project, index) => (
                    <li key={index} className='mb-4'>
                        <Window title={project.title} desc={project.desc} img={project.img} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection