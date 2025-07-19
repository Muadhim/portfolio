"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './mode-togle';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Header = () => {
    const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString('ID', { hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
    const [experience, setExperience] = useState('0+');

    useEffect(() => {
        const start = new Date('2023-02-01');
        const now = new Date();

        const diffInMonths =
            (now.getFullYear() - start.getFullYear()) * 12 +
            (now.getMonth() - start.getMonth());

        const years = Math.floor(diffInMonths / 12);
        const label = years < 1 ? '0+' : `${years}+`;

        setExperience(label);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('ID', { hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <header className='flex justify-between'>
            <div className='w-1/3 h-20 bg-foreground/70 dark:bg-foreground/90 text-background p-6 cp-full-bevel-br flex items-center justify-start'>
                <h1 className='text-3xl font-black'>NAME:&nbsp;MU&apos;ADHIM&emsp;EXP:&nbsp;{experience}YEARS</h1>
            </div >
            <div className='border-t-2 border-foreground/70 dark:border-foreground/90 w-1/3 flex flex-col items-center justify-center gap-2'>
                <p className='font-black text-4xl text-center dark:text-background'>{time}</p>
                <p className='dark:text-background'>{days[new Date().getDay()]},&nbsp;{new Date().toLocaleDateString()}</p>
            </div>
            <div className='w-1/3 h-20 bg-foreground/70 dark:bg-foreground/90 text-background p-6 cp-full-bevel-bl flex items-center justify-end gap-4'>
                <h2 className='text-3xl font-bold text-end'>SOFTWARE ENGINEER</h2>
                <ModeToggle />
            </div>
        </header >
    )
}

export default Header

