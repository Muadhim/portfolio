"use client"
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './mode-togle';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const Header = () => {
    const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString('ID', { hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('ID', { hour12: false, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <header className='flex justify-between'>
            <div className='w-1/3 h-20 bg-foreground/90 text-background p-6 cp-full-bevel-br flex items-center justify-start'>About Me</div>
            <div className='border-t-2 border-foreground/90 w-1/3 flex flex-col items-center justify-center gap-2'>
                <p className='font-black text-4xl text-center'>{time}</p>
                <p className=''>{days[new Date().getDay()]}, {new Date().toLocaleDateString()}</p>
            </div>

            <div className='w-1/3 h-20 bg-foreground/90 text-background p-6 cp-full-bevel-bl flex items-center justify-end gap-4'>Find me <ModeToggle /></div>
        </header>
    )
}

export default Header

