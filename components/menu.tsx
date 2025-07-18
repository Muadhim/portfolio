"use client";
import React, { FC } from 'react'
import { Button } from './ui/button'
import { AppWindow, BriefcaseBusiness, Code, Phone, User } from 'lucide-react'
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

interface MenuInfoProps {
    className?: string;
    menu?: string;
}

const Menu = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const section = useSearchParams().get('section');

    const handleClick = (section: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('section', section);

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50">
            <div className="relative overflow-visible">
                <div className="absolute top-0 right-0 bg-foreground/70 dark:bg-foreground/90 h-[500px] overflow-visible w-18 cp-bevel-tl-br p-4 flex flex-col gap-4 justify-center items-center">

                </div>
                <div className='flex flex-col gap-4 items-center justify-center h-[500px] w-18 '>
                    <div className="relative group">
                        <Button variant={section == "about" ? "default" : "outline"} size="icon" className={cn([section == "about" ? "" : "bg-foreground text-background"])} onClick={() => handleClick('about')}>
                            <User />
                        </Button>
                        <MenuInfo className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" menu='ABOUT' />
                    </div>
                    <div className="relative group">
                        <Button variant={section == "experience" ? "default" : "outline"} size="icon" className={cn([section == "experience" ? "" : "bg-foreground text-background"])} onClick={() => handleClick('experience')}>
                            <BriefcaseBusiness />
                        </Button>
                        <MenuInfo className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" menu='EXPERIENCE' />
                    </div>
                    <div className="relative group">
                        <Button variant={section == "skill" ? "default" : "outline"} size="icon" className={cn([section == "skill" ? "" : "bg-foreground text-background"])} onClick={() => handleClick('skill')}>
                            <Code />
                        </Button>
                        <MenuInfo className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" menu='SKILL' />
                    </div>
                    <div className="relative group">
                        <Button variant={section == "project" ? "default" : "outline"} size="icon" className={cn([section == "project" ? "" : "bg-foreground text-background"])} onClick={() => handleClick('project')}>
                            <AppWindow />
                        </Button>
                        <MenuInfo className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" menu='PROJECT' />
                    </div>
                    <div className="relative group">
                        <Button variant={section == "contact" ? "default" : "outline"} size="icon" className={cn([section == "contact" ? "" : "bg-foreground text-background"])} onClick={() => handleClick('contact')}>
                            <Phone />
                        </Button>
                        <MenuInfo className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" menu='CONTACT' />
                    </div>
                </div>
            </div>

        </div>

    )
}

const MenuInfo: FC<MenuInfoProps> = ({ ...props }) => {
    return (
        <div className={cn(
            'absolute top-1/2 right-full mr-3 -translate-y-1/2 bg-foreground/90 text-background px-4 py-2 rounded shadow-lg w-[200px] h-fit max-h-[200px]',
            props.className
        )}>
            {/* Arrow */}
            <div className="absolute top-1/2 -right-2 translate-y-[-50%] w-0 h-0 border-y-8 border-y-transparent border-l-[8px] border-l-foreground/90"></div>

            {/* Content */}
            <h2 className="text-base font-semibold">{props.menu}</h2>
            <p className="text-xs">Click on the icons to navigate.</p>
        </div>
    )
}

export default Menu