import Link from "next/link";

export function Footer() {
    return (
        <footer className="max-w-[1440px] mx-auto p-8">
            <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-white text-base text-center lg:text-xl">Vamos conversar?</p>
                <h5 className="text-[#FF6600] uppercase text-center text-6xl lg:text-7xl xl:text-[100px] font-bold transition-all duration-1000 hover:drop-shadow-[#FF6600]/70 hover:shadow-2xl hover:-translate-y-4">
                    <Link href="https://wa.me/557498052059" target="_blank" rel="noopener noreferrer">
                        Entre em contato
                    </Link>
                </h5>
            </div>
            <article className="flex items-center justify-center gap-4 flex-col-reverse lg:flex-row lg:justify-between mt-8 mb-8">
                <p className="text-white/70 text-base text-center lg:text-start">@Copyright 2025</p>
                <p className="text-white/70 text-base text-center lg:text-end hover:text-[#FF6600] transition-all duration-1000 hover:-translate-y-2 animate-float">
                    <Link href="https://www.instagram.com/devgustavogantois_/" target="_blank" rel="noopener noreferrer">
                        Todos os direitos reservados Gustavo Gantois - Dev front-end & UI/UX Jr.
                    </Link>
                </p>
            </article>
        </footer>
    )
}
