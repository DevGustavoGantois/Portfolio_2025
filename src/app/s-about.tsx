"use client";
import { ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export function HomeAbout() {

  

  return (
    <section id="about" className="max-w-[1730px] mx-auto p-8 mt-10 lg:mt-[100px]">
      <div className="border border-[#FF6600]/10 rounded-2xl py-6 px-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <figure className="border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <h1 className="text-[#FF6600] text-4xl lg:text-6xl">
              +<CountUp end={1} duration={3} />
            </h1>
            <h2 className="text-white text-2xl lg:text-3xl">Experiência</h2>
            <p className="text-white/60 text-base">
              1 ano de experiência com desenvolvimento front-end, criando interfaces
            </p>
          </figure>

          <figure className="border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <h1 className="text-[#FF6600] text-4xl lg:text-6xl">
              +<CountUp end={110} duration={4} />
            </h1>
            <h2 className="text-white text-2xl lg:text-3xl">Projetos</h2>
            <p className="text-white/60 text-base">
              +110 projetos desenvolvidos para aperfeiçoamento do meu trabalho como profissional
            </p>
          </figure>

          <figure className="border border-white/10 rounded-2xl p-6 flex flex-col gap-4 lg:col-span-2">
            <h1 className="text-[#FF6600] text-4xl lg:text-6xl">
              +<CountUp end={20} duration={5} />
            </h1>
            <h2 className="text-white text-2xl lg:text-3xl">Certificações</h2>
            <p className="text-white/60 text-base">
              +20 certificações comprovando minha experiência e dedicação à minha carreira e futuro
            </p>
          </figure>
        </div>
        <div className="relative w-full lg:w-[500px] flex justify-center items-start">
          <div className="relative overflow-hidden rounded-2xl group w-full">
            <Image
              src="/Dev.png"
              width={500}
              height={500}
              alt="Desenvolvedor"
              className="w-full h-full rounded-2xl transition-transform duration-1000 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
                Vamos desenvolver juntos!
              </h2>
              <p className="text-base lg:text-lg mb-4">
                Leve a sua experiência de codificação e design para outro nível!
              </p>
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5571999588246&text=Ol%C3%A1%20Gustavo!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                className="border border-[#FF6600]/20 px-8 py-3 rounded-full uppercase text-lg hover:bg-[#FF6600]/20 transition flex items-center gap-1"
              >
                Entre em contato
                <ChevronRightCircle className="text-white" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
