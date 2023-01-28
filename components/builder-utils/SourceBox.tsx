/*
WHAT:

*/

import SkypeAnim from "../static/SkypeAnim";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  visibleTimestamp: any;
  activeAnnotator: any;
  timestamps: any[];
  annotatorLookup: any[];
  isPlaying: boolean;
  isAtZero: boolean;
}

export default function SourceBox({
  isAtZero,
  isPlaying,
  visibleTimestamp,
  activeAnnotator,
  timestamps,
  annotatorLookup,
}: Props) {
  return (
    <div className="bg-kaiserschmarrn-raw dark:bg-rum rounded-[10px] px-5 py-10 lg:px-10 text-burnt">
      {visibleTimestamp === undefined ? (
        <>
          <div className="w-full h-full flex flex-wrap items-center justify-center min-h-[100px] lg:min-h-auto">
            <AnimatePresence>
          {isAtZero && 
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}  className=" max-w-[60%] text-center absolute">
              Hier werden dann die Quellen angezeigt
              angezeigt.
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
        </>
      ) : (
        <ul className="flex flex-col gap-5 text-start">
          {visibleTimestamp !== undefined ? (
            timestamps[visibleTimestamp][annotatorLookup[activeAnnotator]].map(
              (annotation: any, i: number) => (
                <li key={i}>
                  <a
                    href={annotation.reasoningLink}
                    className="flex flex-col gap-1"
                  >
                    <div className="flex items-end gap-1 mb-2 lg:mb-0">
                      [{i + 1}]
                      <span className="text-xs">
                        {annotation.reasoningType === "quote"
                          ? "Zitat"
                          : "Anekdote"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-poppins leading-none">
                        {annotation.reasoningSource}
                      </div>
                      <div className="text-sm">{annotation.reasoningBody}</div>
                    </div>
                  </a>
                </li>
              )
            )
          ) : (
            <>hä?</>
          )}
        </ul>
      )}
    </div>
  );
}
