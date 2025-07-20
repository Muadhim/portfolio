"use client";
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import React from 'react'

const ContactSection = () => {
    const contacts = [
        {
            name: "Email",
            icon: <Mail className="w-6 h-6" />,
            link: "mailto:muadhim29@example.com",
        },
        {
            name: "WhatsApp",
            icon: <MessageCircle className="w-6 h-6" />,
            link: "https://wa.me/6282282471446",
        },
        {
            name: "GitHub",
            icon: <Github className="w-6 h-6" />,
            link: "https://github.com/muadhim",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-6 h-6" />,
            link: "https://linkedin.com/in/muadhim",
        },
    ];
    return (
        <section className="text-center py-10 absolute top-1/2 -translate-y-1/2">
            <h2 className="text-3xl font-bold mb-6 cp-bevel bg-foreground text-background py-4 px-8 w-fit mx-auto">Contact Me</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {contacts.map((contact) => (
                    <a
                        key={contact.name}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-foreground/90 text-background px-8 py-4 rounded-lg shadow hover:scale-105 transition-transform duration-200 cp-bevel cursor-pointer"
                    >
                        {contact.icon}
                        <span className="font-medium">{contact.name}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default ContactSection