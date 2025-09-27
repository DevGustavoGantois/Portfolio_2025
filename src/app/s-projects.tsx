"use client";
import { homeProjectData } from "@/data/v-data";
import Image from "next/image";
import Link from "next/link";

export function HomeProjects() {
  return (
    <section id="projects" className="mx-auto md:p-20 lg:p-8 max-w-[1730px]">
      {homeProjectData.map((item, index) => (
        <div key={index} className="w-full flex-1 mb-16">
          <article className="flex items-center justify-center mb-8">
            <h1 className="text-white text-center text-4xl lg:text-[40px]">
              {item.title}
            </h1>
          </article>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {item.cards.map((project, idx) => (
              <div
                key={idx}
                className="w-full flex-1 border border-white/10 rounded-2xl py-5 px-2"
              >
                <div className="flex flex-col justify-center lg:justify-start items-center gap-6">
                  <figure className="w-full relative overflow-hidden rounded-lg group">
                    {project.img && (
                      <Image
                        priority
                        quality={100}
                        src={project.img}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="object-cover w-full h-auto transition-transform duration-1000 group-hover:scale-105 rounded-lg"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.iconFigma && project.figmaLink && (
                        <Link
                          href={project.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#FF6600] transition-colors duration-300"
                        >
                          <project.iconFigma size={36} />
                        </Link>
                      )}
                      {project.iconLinkedin && project.linkedinLink && (
                        <Link
                          href={project.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#FF6600] transition-colors duration-300"
                        >
                          <project.iconLinkedin size={36} />
                        </Link>
                      )}
                      {project.iconDev && project.websiteLink && (
                        <Link
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#FF6600] transition-colors duration-300"
                        >
                          <project.iconDev size={36} />
                        </Link>
                      )}
                    </div>
                  </figure>

                  <article className="flex flex-col gap-4 justify-start w-full mt-4">
                    <div className="flex items-center justify-between">
                      <h1 className="text-white/90 text-base lg:text-xl">
                        {project.title}
                      </h1>
                      <h2 className="text-white/70 text-base lg:text-xl">
                        {project.date}
                      </h2>
                    </div>

                    <p className="text-white/70 text-base lg:text-xl text-start max-w-[700px]">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between w-full mt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tagObj, i) => (
                          <span
                            key={i}
                            className="border rounded-full border-white/30 text-white/70 px-4 py-1 text-xs lg:text-sm"
                          >
                            {tagObj.tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        {project.iconFigma && (
                          <project.iconFigma className="text-white/50" size={24} />
                        )}
                        {project.iconDev && (
                          <project.iconDev className="text-white/50" size={24} />
                        )}
                      </div>
                    </div>
                  </article>
                  <div className="flex lg:hidden justify-center items-center w-full">
                    <button className="w-full border border-white/10 py-3 px-6 text-white rounded-lg">
                        <Link href={project.href} target="_blank">
                        Ver projeto
                        </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
