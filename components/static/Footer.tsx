import Logo from "./Logo"
import Link from "next/link"

export default function Footer() {
    return <footer className="mt-40 md:pl-20 px-5 md:px-20 xl:pr-60 flex flex-col md:flex-row w-full py-20 bg-burnt text-white justify-center md:justify-between items-center">
        <div className="flex order-last md:order-first mt-20 lg:mt-0">
            <Logo pathToHome={"/"} inverted={true}/>
        </div>
        <div className="flex gap-10 lg:gap-[5vw] flex-col md:flex-row text-center lg:text-left">
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-sm">Sitemap</h3>
                <Link href="/test">Episoden</Link>
                <Link href="/test">Konzept</Link>
                <Link href="/test">Über Uns</Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-sm">Finde uns auf</h3>
                <Link href="/test">TODO</Link>
                <Link href="/test">TODO</Link>
                <Link href="/test">TODO</Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-sm">Rechtliches</h3>
                <Link href="/test">Impressum</Link>
                <Link href="/test">Datenschutz</Link>
            </div>
        </div>
    </footer>
}