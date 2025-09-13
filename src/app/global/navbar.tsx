import { navbarData } from "@/data/v-data";
import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
    return (
        <>
        <header className="max-w-[1440px] mx-auto p-8 border-b border-white/10">
            <div className="hidden xl:flex flex-col lg:flex-row items-center justify-between gap-4">
                {navbarData.map((item, index) => {
                    return (
                        <div key={index}>
                            <nav className="flex items-center justify-between gap-8">
                                {item.Logo && (
                                    <Image src={item.Logo} width={80} height={80} alt="Logo" />
                                )}
                                <ul className="flex items-center gap-11">
                                    {item.name && (
                                        <li className="text-white/60 text-base lg:text-xl font-light transition-all duration-1000 hover:text-[#FF6600] hover:-translate-y-2">
                                            <Link href={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                                {item.btnText && (
                                    <button className="border border-white/10 rounded-2xl bg-black text-white text-base lg:text-xl duration-1000 hover:bg-transparent px-8 py-3 hover:border hover:border-[#FF6600]">
                                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                                            {item.btnText}
                                        </Link>
                                    </button>
                                )}
                            </nav>
                        </div>
                    )
                })}
            </div>
            <div className="flex lg:hidden">
                <NavbarMobile />
            </div>
        </header>
        </>
    )
}
