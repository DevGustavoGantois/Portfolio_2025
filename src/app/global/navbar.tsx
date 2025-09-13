import { navbarData } from "@/data/v-data";
import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
    return (
        <>
        <header className="max-w-[1440px] mx-auto p-8">
            <div className="hidden lg:flex">
                    {navbarData.map((item, index) => {
                        return (
                            <div key={index}>
                                <nav className="flex items-center justify-between">
                                    <Image src={item.Logo && item.Logo} width={200} height={200} alt={item.name} />
                                    <ul className="flex items-center gap-11">
                                        <li className="text-white/60 text-base lg:text-xl transition-all duration-1000 hove:text-[#FF6600]">
                                            <Link href={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    </ul>
                                    <button className="border border-white/60 rounded-2xl bg-black text-white text-base lg:text-xl duration-1000 hover:bg-transparent hover:border hover:border-[#FF6600]">
                                        <Link href={item.href} target="_blank">
                                            {item.btnText}
                                        </Link>
                                    </button>
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