import React from "react";
import { cn } from "@/lib/utils";
import { Globe, Spotlight } from "lucide-react";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="relative flex h-[35rem] lg:h-[40rem] w-full overflow-hidden rounded-md bg-[#0011]/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-8xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-[#FF6600] bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Junior Developer & UI UX Designer.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base font-normal text-neutral-300">
          Construindo projetos que combinam estética, performance e boas práticas de código, sempre focado em criar experiências digitais envolventes, acessíveis e que realmente gerem impacto positivo para os usuários.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 mt-4">
            <button className="w-full lg:w-56 text-white text-base lg:text-xl bg-gradient-to-r from-[#993D00] to-[#FF6600] py-2 px-6 rounded-2xl">
                <Link href="#projects" className="flex items-center justify-center gap-2">
                Projetos
                <Globe className="text-white" size={24} />
                </Link>
            </button>
            <button className="w-full lg:w-56 text-white text-base lg:text-xl border border-white/20 bg-black py-2 px-6 rounded-2xl">
                <Link href="#contact">
                Saiba mais
                </Link>
            </button>
        </div>
      </div>
    </div>
  );
}
