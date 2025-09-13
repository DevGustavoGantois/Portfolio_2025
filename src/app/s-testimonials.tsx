"use client";

import { testimonialData } from "@/data/v-data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export function HomeTestimonials() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12">
      {testimonialData.map((item, index) => (
        <div key={index} className="mb-16">
          <article className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-10">
            <h1 className="text-white font-semibold text-3xl lg:text-4xl text-center lg:text-start">
              {item.title}
            </h1>
            <p className="text-white/70 text-base lg:text-xl text-center lg:text-start max-w-[600px]">
              {item.description}
            </p>
          </article>

          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {item.cards.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-start justify-start gap-4 p-12 border border-white/10 rounded-2xl bg-black/20">
                  <div className="flex flex-col items-start gap-4">
                    <figure className="flex items-center gap-2">
                        <testimonial.icon className="text-yellow-400" size={20} />
                        <testimonial.icon className="text-yellow-400" size={20} />
                        <testimonial.icon className="text-yellow-400" size={20} />
                        <testimonial.icon className="text-yellow-400" size={20} />
                    </figure>
                    <div className="flex flex-col gap-2">
                      <p className="text-white/70 text-base lg:text-lg max-w-[600px]">
                        {testimonial.description}
                      </p>
                      <div className="flex flex-col gap-1">
                        <h1 className="text-white text-base lg:text-lg font-semibold">
                          {testimonial.name}
                        </h1>
                        <p className="text-white/50 text-sm">{testimonial.work}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
}
