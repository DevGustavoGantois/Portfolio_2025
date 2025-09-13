"use client";
import { CustomCursor } from "@/components/c-custom-cursor";
import { HomeAbout } from "./s-about";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-home";
import { HomeProjects } from "./s-projects";
import { HomeTechs } from "./s-techs";
import { HomeTestimonials } from "./s-testimonials";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }} // sobe a tela ao sair
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center gap-4"
            >
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={300}
                height={300}
                className="animate-pulse"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <HomeHero />
          <HomeTechs />
          <HomeAbout />
          <HomeProjects />
          <HomeTestimonials />
          <HomeFAQ />
        </>
      )}
    </>
  );
}
