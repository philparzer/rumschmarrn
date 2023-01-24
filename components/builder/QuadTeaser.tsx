/*
WHAT:
animated showcase square component
*/

import Link from "next/link"
import useIsIos from "../../hooks/useIsIos";

interface Props {
  title: string;
  teasers: any[];
}

import { motion } from "framer-motion";

export default function QuadTeaser({ title, teasers }: Props) {
  //FIXME: ios
  const isIos = useIsIos();

  return (
    <section className="w-full flex flex-col items-center justify-center my-20 mb-60 md:mb-40 md:my-40">
      <h2 className="font-inter font-semibold text-4xl relative z-10 mb-10 pointer-events-none dark:text-white">
        {title}
      </h2>
      <div className="relative flex h-[50vh] max-h-[520px] w-full items-center justify-center translate-x-[88%] sm:translate-x-[40%] translate-y-10 lg:translate-x-0">
        <svg
          className="absolute w-[854px] h-[770px] -translate-x-6 -translate-y-4"
          viewBox="0 0 854 770"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M709 5.5L5.5 170L143 764.5L848.5 600.5L709 5.5Z"
            fill="transparent"
            className="stroke-schmarrn-dark dark:stroke-rum"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute w-[854px] h-[770px]">
          <svg
            className="absolute"
            viewBox="0 0 854 770"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-schmarrn-light dark:stroke-rum"
              d="M709 5.5L5.5 170L143 764.5L848.5 600.5L709 5.5Z"
              fill="transparent"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          {teasers.length > 0 && isIos === false &&
            teasers.map((teaser: any, i: number) => (
              <Link key={i} href={teaser.link.value !== undefined ? teaser.link.value.data.url : "#"} className="group ">
              <motion.div
                
                className=" absolute font-semibold items-center top-0 left-0 bg-burnt dark:bg-night transition-colors text-white rounded-[10px] group-hover:bg-rum px-4 py-1 flex gap-2 "
                style={{
                  offsetPath:
                    'path("M709 5.5L5.5 170L143 764.5L848.5 600.5L709 5.5Z")',
                  offsetRotate: "0deg",
                }}
                initial={{ offsetDistance: `${0 + i * 20}%` }}
                animate={{ offsetDistance: `${100 + i * 20}%` }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg
                width="12"
                height="12"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5 13.134C27.1667 13.5189 27.1667 14.4811 26.5 14.866L8.5 25.2583C7.83333 25.6432 7 25.1621 7 24.3923L7 3.60769C7 2.83789 7.83334 2.35677 8.5 2.74167L26.5 13.134Z"
                  className="fill-white"
                />
              </svg>
                <div>{teaser.title}</div>
              </motion.div>
              </Link> 
              
            ))}
          
        </div>
        
      </div>
      {isIos === true &&
        <div className="absolute justify-start w-full flex flex-col gap-5">
          {teasers.length > 0 &&
            teasers.map((teaser: any, i: number) => (
              <div className="flex">
              <Link key={i} href={teaser.link.value !== undefined ? teaser.link.value.data.url : "#"} className="group">
              <div className="font-semibold items-center bg-burnt dark:bg-night transition-colors text-white rounded-[10px] group-hover:bg-rum px-4 py-1 flex gap-2 ">
                <svg
                width="12"
                height="12"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5 13.134C27.1667 13.5189 27.1667 14.4811 26.5 14.866L8.5 25.2583C7.83333 25.6432 7 25.1621 7 24.3923L7 3.60769C7 2.83789 7.83334 2.35677 8.5 2.74167L26.5 13.134Z"
                  className="fill-white"
                />
              </svg>
                <div>{teaser.title}</div>
              </div>
              </Link> 
              </div>
            ))}
        </div>
      }
    </section>
  );
}
