import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ColorTheme } from "../../shared-ts/enums"
import ThemeToggle from "./ThemeToggle";

interface Props {
  toggle: ColorTheme;
  setThemeLocalStorage: (theme:ColorTheme) => void;
  schmarrntyp: undefined | "Nuss" | "Sahne" | "Apfel" | "Blaubeer"
}

export default function Nav({toggle, setThemeLocalStorage, schmarrntyp}: Props) {
  const [navDrawerVisible, setNavDrawerVisible] = useState(false);
  const showNavDrawer = () => {
    setNavDrawerVisible(!navDrawerVisible);
  };

  const hideNavDrawer = () => {
    setNavDrawerVisible(!navDrawerVisible);
  };

  useEffect(() => {
    if (navDrawerVisible) {document.body.style.overflowY = "hidden";}
    else {document.body.style.overflowY = "auto";}
  }, [navDrawerVisible])

  return (
    <div>
      <nav className="h-14 px-5 md:px-20 flex items-center justify-between text-inter fixed top-0 w-full mb-20 bg-white z-40 text-burnt dark:text-white dark:bg-burnt">
        <Logo pathToHome={"/"} schmarrntyp={schmarrntyp}/>
        <div className="hidden md:flex gap-14 items-center">
          <Link className="transition-all hover:tracking-wide" href="/episoden">
            Episoden
          </Link>
          <Link className="transition-all hover:tracking-wide" href="/konzept">
            Konzept
          </Link>
          <Link className="transition-all hover:tracking-wide" href="/ueber-uns">
            Über Uns
          </Link>
          <ThemeToggle toggle={toggle} handler={setThemeLocalStorage} />
        </div>
        <button className="md:hidden px-2" onClick={() => showNavDrawer()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="fill-burnt dark:fill-white">
            <path d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z" />
          </svg>
        </button>
      </nav>
      {navDrawerVisible && (
        
        <div 
        className="fixed top-0 right-0 w-full backdrop-blur-md h-[100vh] bg-white dark:bg-burnt dark:text-white z-[50] flex flex-col">
          <div className="h-full flex flex-col">
            <div className="w-full flex flex-row justify-between px-5 md:px-20 h-14 items-center">
              <Logo pathToHome={"/"} schmarrntyp={schmarrntyp}/>
              <button className="px-2" onClick={() => hideNavDrawer()}>
                <svg xmlns="http://www.w3.org/2000/svg"  height="24" width="24"><path className="fill-burnt dark:fill-white stroke-burnt dark:stroke-white" d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/></svg>
              </button>
            </div>
            <div className="grow flex flex-col justify-center">

            
            <div className="flex flex-col items-center px-5 justify-center font-semibold gap-[5vh] mb-[20vh] text-2xl">
            <Link className="transition-all hover:tracking-wide px-4 py-2  rounded-full" href="/episoden">
              Episoden
            </Link>
            <Link className="transition-all hover:tracking-wide px-4 py-2  rounded-full" href="/konzept">
              Konzept
            </Link>
            <Link className="transition-all hover:tracking-wide px-4 py-2 rounded-full" href="/ueber-uns">
              Über Uns
            </Link>
            
            </div>
            <ThemeToggle toggle={toggle} handler={setThemeLocalStorage} />
            </div>
        </div>
        </div>
       
      )}
    </div>
  );
}
