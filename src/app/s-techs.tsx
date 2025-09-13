"use client";
import { techsData } from "@/data/v-data";
import Image from "next/image";

export function HomeTechs() {
  return (
    <section className="max-w-[1440px] mx-auto p-8 overflow-hidden mt-10 lg:mt-[100px]">
      {techsData.map((item, index) => (
        <div key={index} className="mb-16">
          <h1 className="text-white text-xl lg:text-3xl font-semibold mb-11">{item.title}</h1>

          <div className="flex carousel-track">
            {[...item.techs, ...item.techs].map((tech, idx) => (
              <div key={idx} className="flex-shrink-0 mr-8 w-40 lg:w-60 lg:h-20">
                <div className="flex items-center justify-center">
                    <Image src={tech} width={80} height={80} alt="Tech" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
