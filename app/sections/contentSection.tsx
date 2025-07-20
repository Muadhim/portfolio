"use client";
import { useSearchParams } from 'next/navigation'
import React from 'react'
import AboutSection from './aboutSection';
import ExperienceSection from './experienceSection';
import ProjectSection from './projectSection';
import ContactSection from './contactSection';
import AbilitySection from './abilitySection';

const ContentSection = () => {
    const searchParams = useSearchParams();
    const section = searchParams.get('section');

    return !section ? <></> :
        <>
            {section === 'about' && <AboutSection />}
            {section === 'experience' && <ExperienceSection />}
            {section === 'ability' && <AbilitySection />}
            {section === 'project' && <ProjectSection />}
            {section === 'contact' && <ContactSection />}
        </>
}


export default ContentSection