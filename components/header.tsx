"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './mode-togle';
import { ExperienceAutoCount } from '@/lib/experienceAutoCount';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Header = () => {
    const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString('ID', { hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
    const [experience, setExperience] = useState('0+');

    useEffect(() => {
        // Calculate experience in years
        setExperience(ExperienceAutoCount());
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('ID', { hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <header className='fixed w-[95%] grid grid-cols-3  items-center justify-between top-2 md:top-5 left-1/2 -translate-x-1/2 cp-full-bevel shadow-lg z-10'>
            <div className='h-full w-full bg-foreground/70 dark:bg-foreground/90 text-background p-2 md:p-6 pr-3 md:pr-9 cp-full-bevel-br flex items-center justify-start'>
                <h1 className='text-xxs md:text-xl xl:text-3xl font-black'>NAME:&nbsp;MU&apos;ADHIM&emsp;EXP:&nbsp;{experience}YEARS</h1>
            </div >
            <div className='w-full h-full border-t-2 border-foreground/70 dark:border-foreground/90 flex flex-col items-center justify-center gap-2'>
                <p className='font-black text-xs md:text-2xl xl:text-4xl text-center dark:text-background'>{time}</p>
                <p className='text-xxs md:text-base dark:text-background'>{days[new Date().getDay()]},&nbsp;{new Date().toLocaleDateString()}</p>
            </div>
            <div className='h-full w-full bg-foreground/70 dark:bg-foreground/90 text-background p-2 md:p-6 pl-3 md:pl-9 cp-full-bevel-bl flex items-center justify-end gap-4'>
                <h2 className='text-xxs md:text-xl xl:text-3xl font-bold text-end'>SOFTWARE ENGINEER</h2>
            </div>
        </header >
    )
}

export default Header

