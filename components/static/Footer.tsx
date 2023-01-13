import Logo from "./Logo"
import Link from "next/link"

export default function Footer() {
    return <footer className="mt-40 pl-20 md:px-20 xl:pr-60 flex w-full py-20 bg-burnt text-white justify-between items-center">
        <div className="">
            <Logo pathToHome={"/"} inverted={true}/>
        </div>
        <div className="flex gap-[5vw] text-sm">
            <div className="flex flex-col gap-1 ">
                <h3 className="text-schmarrn-dark text-xs">Sitemap</h3>
                <Link href="/test">Episoden</Link>
                <Link href="/test">Konzept</Link>
                <Link href="/test">Über Uns</Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-xs">Finde uns auf</h3>
                <Link href="/test">Episoden</Link>
                <Link href="/test">Konzept</Link>
                <Link href="/test">Über Uns</Link>
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-schmarrn-dark text-xs">Rechtliches</h3>
                <Link href="/test">Impressum</Link>
                <Link href="/test">Datenschutz</Link>
            </div>
        </div>
    </footer>
}