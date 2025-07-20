import { Monitor, Server, Shield, Sprout, Wrench } from 'lucide-react'
import React from 'react'

const AbilitySection = () => {
    const ability = [
        {
            ability: 'Frontend Developer',
            technologies: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
            icon: <Monitor />
        },
        {
            ability: 'Backend Developer',
            technologies: ['Node.js', 'Supabase', 'PostgreSQL'],
            icon: <Server />

        },
        {
            ability: 'Web Security Awareness',
            technologies: ['OWASP', 'Web Security Best Practices', 'Vulnerability Assessment'],
            icon: <Shield />
        },
        {
            ability: 'Tools & Dev Environment',
            technologies: ['Git', 'Figma', 'Postman', 'Slack'],
            icon: <Wrench />
        },
        {
            ability: 'Currently Learning',
            technologies: ['Python', 'Golang'],
            icon: <Sprout />
        }
    ]
    return (
        <section className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 w-full'>
            <div className='w-fit max-w-[500px] h-fit bg-foreground/90 cp-bevel p-4 text-background'>
                <h3 className='font-bold text-3xl text-center'>ABILITY</h3>
                <p className='text-center'>
                    I design and build modern, scalable, and responsive web applications across frontend and backend platforms.
                    With secure coding practices and efficient workflows,
                    I thrive in distributed teams while continuously expanding my skills as a Software Engineer.</p>
            </div>
            <ul className='flex gap-6 w-fit max-w-[1000px] flex-wrap justify-center'>
                {ability.map((ablt, index) => (
                    <li key={index} className='w-[300px] flex gap-2 cp-bevel p-4 bg-foreground/90 text-background'>
                        <span>{ablt.icon}</span>
                        <div>
                            <h4 className='font-semibold text-xl'>{ablt.ability}</h4>
                            <p className='text-sm'>{ablt.technologies.join(', ')}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AbilitySection