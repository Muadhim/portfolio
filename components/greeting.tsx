"use client"
import React, { useEffect, useState } from 'react'


const Greeting = () => {
    const fullText = 'HELLO WORLD!';
    const [index, setIndex] = useState(0);
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        if (index >= fullText.length) return;

        const timeout = setTimeout(() => {
            setGreeting((prev) => prev + fullText[index]);
            setIndex(index + 1);
        }, 150);

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-black -z-30 absolute top-[30%] text-shine typing-caret">
            <span>{greeting}</span>
        </h1>
    )
}

export default Greeting