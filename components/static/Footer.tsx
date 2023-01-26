import Logo from "./Logo";
import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import router from "next/router"
import { useState } from "react"

export default function Footer() {
    
    const [wasSuccess, setWasSuccess] = useState(false)
    const [cookieIsSet, setCookieIsSet] = useState(true)

    const resetSchmarrnType = () => {
        if (getCookie("schmarrntyp") === undefined) {return setCookieIsSet(false)}
        
        deleteCookie("schmarrntyp");
        setWasSuccess(true)
        
        setTimeout(() => {
            router.reload()
        }, 1000) 
    }
  
    return (
    <footer className="bg-burnt text-white dark:bg-night">
      <div className="mt-60 md:pl-20 px-5 md:px-20 xl:pr-60 flex flex-col md:flex-row w-full py-20 lg:py-32  justify-center md:justify-between items-center flex-wrap">
        <div className="flex order-last md:order-first mt-20 lg:mt-0">
          <Logo pathToHome={"/"} inverted={true} />
        </div>
        <div className="flex gap-10 lg:gap-[5vw] flex-col md:flex-row text-center lg:text-end">
          <div className="flex flex-col gap-1">
            <h3 className="text-schmarrn-dark text-xs">Sitemap</h3>
            <Link className="transition hover:text-rum" href="/episoden">
              Episoden
            </Link>
            <Link className="transition hover:text-rum" href="/konzept">
              Konzept
            </Link>
            <Link className="transition hover:text-rum" href="/ueber-uns">
              Über Uns
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-schmarrn-dark text-xs">Finde uns auf</h3>
            <a className="transition  opacity-25">
              Coming Soon
            </a>
            <a className="transition  opacity-25">
            Coming Soon
            </a>
            <a className="transition  opacity-25" >
            Coming Soon
            </a>
          </div>
          <div className="flex flex-col gap-1 text-center lg:text-end">
            <h3 className="text-schmarrn-dark text-xs">Sonstiges</h3>
            <a
              className="transition hover:text-rum"
              href="mailto:rumschmarrn@gmail.com"
            >
              Kontakt
            </a>
            <Link className="transition hover:text-rum" href="/impressum">
              Impressum
            </Link>
            <Link className="transition hover:text-rum" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
      <section className="text-center tracking-wider px-20 xl:px-60 text-xs py-2 text-white">
        <div className="flex flex-col items-end justify-center lg:justify-end  transition-opacity gap-5 pb-10 lg:pb-none">
        <a
          href="https://github.com/philparzer/rumschmarrn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:opacity-100 opacity-50 transition-all"
        >
          Diese Website ist open-source
          <svg
            width="15"
            height="15"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_327_123)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.97914 0C3.11986 0 0 3.20833 0 7.17748C0 10.3502 1.999 13.0359 4.77214 13.9864C5.11886 14.0579 5.24586 13.832 5.24586 13.642C5.24586 13.4756 5.23443 12.9052 5.23443 12.311C3.293 12.7388 2.88871 11.4554 2.88871 11.4554C2.57671 10.6235 2.11443 10.4097 2.11443 10.4097C1.479 9.97004 2.16071 9.97004 2.16071 9.97004C2.86557 10.0176 3.23543 10.7068 3.23543 10.7068C3.85929 11.8 4.86457 11.4911 5.269 11.3009C5.32671 10.8375 5.51171 10.5166 5.70814 10.3384C4.15971 10.172 2.53057 9.55413 2.53057 6.79715C2.53057 6.01285 2.80771 5.37119 3.24686 4.87215C3.17757 4.69394 2.93486 3.95704 3.31629 2.97077C3.31629 2.97077 3.90557 2.7806 5.23429 3.70752C5.80316 3.55041 6.38982 3.47049 6.97914 3.46981C7.56843 3.46981 8.16914 3.55308 8.72386 3.70752C10.0527 2.7806 10.642 2.97077 10.642 2.97077C11.0234 3.95704 10.7806 4.69394 10.7113 4.87215C11.162 5.37119 11.4277 6.01285 11.4277 6.79715C11.4277 9.55413 9.79857 10.1601 8.23857 10.3384C8.49286 10.5642 8.71229 10.9919 8.71229 11.6693C8.71229 12.6318 8.70086 13.4043 8.70086 13.6418C8.70086 13.832 8.828 14.0579 9.17457 13.9866C11.9477 13.0358 13.9467 10.3502 13.9467 7.17748C13.9581 3.20833 10.8269 0 6.97914 0Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_327_123">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <div className="group ">
            {wasSuccess ? <p className="text-schmarrn-dark">Passt! Seite lädt neu.</p> : cookieIsSet ? <button onClick={() => resetSchmarrnType()} className="transition-all group-hover:underline group-hover:opacity-100 group-hover:text-rum flex items-center gap-1.5 text-white opacity-50 tracking-wider  decoration-0 hover:decoration-dotted">Schmarrntyp zurücksetzen <svg className="fill-white opacity-50 group-hover:fill-rum group-hover:opacity-100" width="17" height="17" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z" fillRule="nonzero"/></svg></button>
                : <div className="flex flex-col items-end"><p>Du hast noch gar keinen Schmarrntyp.</p><Link href="/episoden" className="underline"> Mach den Test auf den Unterseiten.</Link></div>
            }
            
        </div>
        </div>
      </section>
    </footer>
  );
}
