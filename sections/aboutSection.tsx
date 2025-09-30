import { ExperienceAutoCount } from "@/lib/experienceAutoCount";

const AboutSection = () => {
    return (
        <section className='max-w-[70%] xl:max-w-[1000px] w-fit xl:min-h-[600px] h-fit max-h-8/12 overflow-scroll bg-foreground/90 backdrop-blur-sm dark:bg-foreground/90 absolute top-1/2 -translate-y-1/2 cp-bevel p-4 text-background'>
            <h3 className='font-bold text-base xl:text-3xl text-center'>ABOUT</h3>
            <div className='mt-4'>
                <p className='text-justify text-xs xl:text-lg xl:leading-9'>
                    Hi! 👋 <b>I’m Mu’adhim</b>, a passionate Software Engineer with {ExperienceAutoCount()} years of professional experience building modern web applications.
                    I specialize in creating clean, scalable, and responsive user interfaces using React.js, Next.js, Vue.js, and Tailwind CSS,
                    while also working with backend technologies like Node.js and Supabase.
                    <br />
                    I started my professional journey in 2023 at Refactory, where I contributed to enterprise-level projects,
                    collaborating closely with teams and delivering solutions for both frontend and backend systems.
                    Later, at Ganesha Operation, I was entrusted to lead web security initiatives while continuing to develop real-time and API-integrated applications.
                    Currently, I’m working on a remote startup project called Harmooni, where I’m helping to shape its core architecture and UI.
                    <br />
                    Beyond my professional work, I enjoy learning new technologies and exploring how to solve complex problems efficiently.
                    I’m currently expanding my skills in Python and Golang, with several personal projects available on GitHub.
                    <br />
                    I thrive in collaborative environments and am highly motivated to contribute to impactful projects — especially in remote or distributed teams.
                </p>

            </div>
        </section>
    )
}

export default AboutSection;