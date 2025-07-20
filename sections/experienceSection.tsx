import { cn } from "@/lib/utils";

const ExperienceSection = () => {
    const exp = [
        {
            company: 'Ganesha Operation',
            position: 'Head of Web Security Section',
            duration: 'Apr 2025 - Present',
        },
        {
            company: 'Ganesha Operation',
            position: 'Frontend Developer',
            duration: 'Jun 2024 - Present',
            technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Real-time applications']
        },
        {
            company: 'Harmooni',
            position: 'Lead Developer',
            duration: 'May 2024 - Present',
            technologies: ['React.js', 'Next.js', 'Tailwind CSS']
        },
        {
            company: 'Refactory',
            position: 'Software Engineer',
            duration: 'Feb 2023 - Apr 2024',
            technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Supabase', 'Vue.js']
        },
    ]
    return (
        <section className='absolute top-1/2 -translate-y-1/2'>
            <h3 className='font-bold text-3xl text-center text-background cp-bevel py-4 px-8 bg-foreground/90'>EXPERIENCE</h3>
            <ul>
                {
                    exp.map((item, index) => (
                        <li key={index} className='relative '>
                            <div className='w-2 h-[100px] relative bg-foreground/90 mx-auto'>
                                <div className={cn(["absolute top-1/2 translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent", index % 2 === 0 ? " -right-2 border-l-8 border-l-foreground/90" : "-left-2 border-r-8 border-r-foreground/90"])}></div>
                                <div className={cn(['absolute top-1/2 -translate-y-1/2 bg-foreground/90 dark:bg-foreground/90 text-background cp-bevel p-4 my-2 w-[500px]', index % 2 === 0 ? 'left-10' : 'right-10'])}>
                                    <h4 className='font-semibold text-xl'>{item.company}</h4>
                                    <p className='text-sm'>{item.position} ({item.duration})</p>
                                    {
                                        item.technologies &&
                                        <p className='text-xs mt-1'>Technologies: {item.technologies.join(', ')}</p>
                                    }
                                </div>
                            </div>
                            {
                                index == exp.length - 1 && <div className='w-5 h-5 rounded-full bg-foreground/90 mx-auto -mt-1'></div>
                            }
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default ExperienceSection;