import Link from "next/link";
import Logo from "./Logo"

interface Props {}

export default function Nav() {
  return (
    <nav className="h-14 pr-20 md:px-20 xl:pr-60 flex items-center justify-between text-inter fixed top-0 w-full mb-20 bg-white z-40">
      <Logo pathToHome={"/"}/>
      <div className="flex gap-14 text-[14px] text-burnt">
        <Link className="transition-all hover:tracking-wide" href="/test">Episoden</Link>
        <Link className="transition-all hover:tracking-wide" href="/test">Konzept</Link>
        <Link className="transition-all hover:tracking-wide" href="/test">Über Uns</Link>
      </div>
    </nav>
  );
}