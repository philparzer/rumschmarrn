/*
WHAT:

*/

import { AnimatePresence, motion } from "framer-motion";
import SkypeAnim from "../static/SkypeAnim";

interface Props {
  visibleTimestamp: any;
  activeAnnotator: any;
  timestamps: any[];
  annotatorLookup: any[];
  isPlaying: boolean;
  isAtZero: boolean;
}

export default function QuoteBox({
  isAtZero,
  timestamps,
  visibleTimestamp,
  activeAnnotator,
  annotatorLookup,
  isPlaying,
}: Props) {
  return (
    <div className="lg:w-[68%] transition-all lg:min-h-[0px] lg:h-80 bg-schmarrn-light rounded-[10px] text-burnt px-5 lg:px-10 py-10">
      {visibleTimestamp === undefined ? (
        <div className="w-full h-full flex flex-wrap items-center justify-center relative min-h-[200px] lg:min-h-auto">
          <AnimatePresence>
          {isAtZero && 
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}  className="max-w-[60%] text-center absolute">
              Hier werden die Kommentare zu den jeweiligen Zeitpunkten
              angezeigt. <br /> <br />
              Sobald du auf Start klickst
              <span className="lg:hidden"> (unten rechts)</span>.
            </motion.p>
          }
          
         
          </AnimatePresence>
          {isAtZero === false && 
          <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 1}}}
          exit={{ opacity: 0 }}>
            <SkypeAnim color={"rum"} darkColor={"rum"} isPlaying={isPlaying} />
          </motion.div>
          }
        </div>
      ) : (
        <div className="">
          <h3 className="mb-5 lg:mb-10 text-lg font-poppins">
            <span className="text-base">{"[...]"}</span>
            {timestamps[visibleTimestamp].episodeQuote}
            <span className="text-base">{"[...]"}</span>
          </h3>
          <ul className="flex flex-col gap-5">
            {visibleTimestamp !== undefined &&
              timestamps[visibleTimestamp][
                annotatorLookup[activeAnnotator]
              ].map((annotation: any, i: number) => (
                <li
                  key={i}
                  className="flex gap-2 lg:gap-5 flex-col lg:flex-row"
                >
                  <span>
                    [{i + 1}]
                    <span className="pl-1 text-xs inline lg:hidden">
                      {annotation.reasoningType === "quote"
                        ? "Zitat"
                        : "Anekdote"}
                    </span>
                  </span>
                  {annotation.content}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
