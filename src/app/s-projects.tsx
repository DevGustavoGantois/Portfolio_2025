import { homeProjectData } from "@/data/v-data";
import Image from "next/image";
import Link from "next/link";

export function HomeProjects() {
  return (
    <section className="mx-auto md:p-20 lg:p-8 max-w-[1730px]">
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
                  <figure className="w-full bg-black/5 overflow-hidden rounded-lg">
                    {project.img && (
                      <Link
                        href={project.href || "#"}
                        target={project.href ? "_blank" : undefined}
                      >
                        <div className="relative w-full h-0 pb-[100%]">
                          {" "}
                          <Image
                            priority
                            src={project.img}
                            alt={project.title}
                            fill
                            className="object-cover rounded-lg transition-transform duration-1000 hover:scale-105"
                          />
                        </div>
                      </Link>
                    )}
                  </figure>

                  <article className="flex flex-col gap-4 justify-start w-full">
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

                    <div className="flex items-center justify-between w-full">
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
                        <project.iconDesign
                          className="text-white/50"
                          size={24}
                        />
                        <project.iconDev className="text-white/50" size={24} />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
