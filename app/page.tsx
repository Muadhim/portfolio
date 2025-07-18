import Greeting from "@/components/greeting";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <div className="relative p-5 dark:bg-white/10 h-screen w-full">
        <div className="h-screen w-full fixed top-0 left-0 -z-40">
          <Image
            src={"/dark-space.jpg"}
            alt="Dark Space"
            priority
            quality={100}
            draggable={false}
            unoptimized
            loading="eager"
            style={{ objectFit: "cover" }}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="/dark-space.jpg"
            fetchPriority="high"
            fill
          />
        </div>
        <div className="-z-20 h-[600px] w-[600px] top-1/3 left-1/3 absolute ">
          <Image
            src={"/astronaut.png"}
            alt="Dark Space"
            priority
            quality={100}
            draggable={false}
            unoptimized
            loading="eager"
            style={{ objectFit: "cover" }}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="/dark-space.jpg"
            fetchPriority="high"
            fill
          />
        </div>
        <Header />
        <main className="flex flex-col items-center justify-center h-fit">
          <Greeting />
          <Menu />
        </main>
      </div>
    </Suspense>
  );
}
