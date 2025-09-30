"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";

const exp = [
    {
        id: 1,
        company: 'Ganesha Operation',
        position: 'Head of Web Security Section',
        duration: 'Apr 2025 - Sep 2025',
    },
    {
        id: 2,
        company: 'Ganesha Operation',
        position: 'Frontend Developer',
        duration: 'Jun 2024 - Sep 2025',
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Real-time applications']
    },
    {
        id: 3,
        company: 'Harmooni',
        position: 'Fullstack Developer',
        duration: 'May 2024 - Present',
        technologies: ['React.js', 'Next.js', 'Tailwind CSS']
    },
    {
        id: 4,
        company: 'Refactory',
        position: 'Software Engineer',
        duration: 'Feb 2023 - Apr 2024',
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Supabase', 'Vue.js']
    },
]

const ExperienceSection = () => {
    const [openDetail, setOpenDetail] = useState<number | null>(null)

    return (
        <section className='absolute top-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-base xl:text-3xl text-center text-background cp-bevel py-4 px-8 bg-foreground/90'>EXPERIENCE</h3>
            <ul>
                {
                    exp.map((item, index) => (
                        <li key={item.id} className='relative  w-11/12'>
                            <div className='w-1 md:w-2 h-[100px] relative bg-foreground/90 mx-auto'>
                                <div className={cn(["absolute top-1/2 translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent", index % 2 === 0 ? " -right-2 border-l-8 border-l-foreground/90" : "-left-2 border-r-8 border-r-foreground/90"])}></div>
                                <div className={cn(['absolute top-1/2 -translate-y-1/2 bg-foreground/90 dark:bg-foreground/90 text-background cp-bevel p-2 md:p-4 my-2 w-fit md:w-[300px] xl:w-[500px]', index % 2 === 0 ? 'left-5 md:left-10' : 'right-5 md:right-10'])}>
                                    <h4 className='font-semibold text-sm xl:text-xl hidden md:block '>{item.company}</h4>
                                    <p className='text-xs font-semibold md:font-normal xl:text-sm'>{item.position}</p>

                                    {
                                        openDetail != item.id &&
                                        <div onClick={() => setOpenDetail(item.id)} className="text-xxs text-end mt-2 min-w-[70px] border-t border-black cursor-pointer">See details...</div>
                                    }
                                    {
                                        openDetail == item.id &&
                                        <div className="text-xxs">
                                            <p>{item.company}</p>
                                            <p>{item.duration}</p>
                                            <p>{item.technologies?.join(', ')}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            {
                                index == exp.length - 1 && <div className='w-3 h-3 md:w-5 md:h-5 rounded-full bg-foreground/90 mx-auto -mt-1'></div>
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ExperienceSection;