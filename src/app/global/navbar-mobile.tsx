"use client";
import { navbarData } from "@/data/v-data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top bar fixa com blur */}
      <div className="flex items-center justify-between p-4 w-full bg-black/50 backdrop-blur-lg border-b border-white/20 z-50">
        {/* Logo */}
        <Image src="/Logo.svg" width={50} height={50} alt="Logo" />

        {/* Botão Menu/X */}
        <button onClick={() => setIsOpen(!isOpen)} className="z-50">
          {isOpen ? (
            <X className="text-[#FF6600]" size={28} />
          ) : (
            <Menu className="text-[#FF6600]" size={28} />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 w-full h-[80%] bg-black/50 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 z-50 border-b border-[#FF6600]/20 rounded-b-2xl ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navbarData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            {item.Logo && (
              <Image
                src={item.Logo}
                width={100}
                height={100}
                alt="Logo"
              />
            )}
            <ul className="flex flex-col items-center gap-6">
              {item.name && (
                <li className="text-white text-base transition-all duration-300 hover:text-[#FF6600]">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )}

              {item.btnText && (
                <button className="border border-white/60 rounded-2xl bg-black text-white text-base lg:text-xl px-8 py-3 transition-all duration-1000 cursor-pointer hover:border hover:border-[#FF6600] hover:bg-[#FF6600]">
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.btnText}
                  </Link>
                </button>
              )}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}
