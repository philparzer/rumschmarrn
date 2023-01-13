import Link from "next/link"

interface Props {
    pathToHome: string
    inverted?: boolean
}

export default function Logo({pathToHome, inverted=false}: Props) {
    return <div>
    <Link href={pathToHome} className="flex items-center gap-2 group" title="Home">
    <svg className="w-12 h-12" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="7.41785" width="28.6604" height="33.6593" rx="10" transform="rotate(-15 0 7.41785)" fill="#F4E4A8"/>
<rect x="4.89746" y="7.78293" width="24.8531" height="29.188" rx="10" transform="rotate(-15 4.89746 7.78293)" fill="#FFEFB5"/>
<path d="M28 33H49V37C49 37.5523 48.5523 38 48 38H29C28.4477 38 28 37.5523 28 37V33Z" fill="#D9D9D9" fillOpacity="0.62"/>
<path d="M24.7221 11.1843C24.6067 10.5689 25.0788 10 25.7049 10H51.2951C51.9212 10 52.3933 10.5689 52.2779 11.1843L51 18H26L24.7221 11.1843Z" fill="#D9D9D9" fillOpacity="0.62"/>
<path d="M26 18H51L49 33H28L26 18Z" fill="#D78E59" fillOpacity="0.62"/>
</svg>
    <p className={`${inverted ? "text-white" : "text-burnt"} font-baloo text-lg font-semibold group-hover:tracking-wide transition-all`}>rumschmarrn</p>
    </Link>
  </div>
}