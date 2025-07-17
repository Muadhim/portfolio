import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative p-5 dark:bg-white/30 h-screen w-full">
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
      <Header />
      <main className="flex flex-col items-center justify-center h-full">
        <h1>HELLO WORLD!</h1>

      </main>
    </div>
  );
}
