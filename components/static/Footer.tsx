import Logo from "./Logo"
import Link from "next/link"

export default function Footer() {
    return <footer className="mt-60 md:pl-20 px-5 md:px-20 xl:pr-60 flex flex-col md:flex-row w-full py-32 bg-burnt text-white justify-center md:justify-between items-center">
        <div className="flex order-last md:order-first mt-20 lg:mt-0">
            <Logo pathToHome={"/"} inverted={true}/>
        </div>
        <div className="flex gap-10 lg:gap-[5vw] flex-col md:flex-row text-center lg:text-left">
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-xs">Sitemap</h3>
                <Link className="transition hover:text-rum" href="/episoden">Episoden</Link>
                <Link className="transition hover:text-rum" href="/konzept">Konzept</Link>
                <Link className="transition hover:text-rum" href="/ueber-uns">Über Uns</Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-xs">Finde uns auf</h3>
                <Link className="transition hover:text-rum" href="/test">TODO</Link>
                <Link className="transition hover:text-rum" href="/test">TODO</Link>
                <Link className="transition hover:text-rum" href="/test">TODO</Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-xs">Rechtliches</h3>
                <Link className="transition hover:text-rum" href="/impressum">Impressum</Link>
                <Link className="transition hover:text-rum" href="/datenschutz">Datenschutz</Link>
            </div>
        </div>
    </footer>
}