/*
WHAT:

*/

import SkypeAnim from "../static/SkypeAnim";

interface Props {
   visibleTimestamp: any;
   activeAnnotator: any;
   timestamps: any[];
   annotatorLookup: any[];
   isPlaying: boolean;
   isAtZero: boolean;
}   

export default function SourceBox({ isAtZero, isPlaying, visibleTimestamp, activeAnnotator, timestamps, annotatorLookup}:Props) {
    return (
        <div className="bg-kaiserschmarrn-raw dark:bg-rum rounded-[10px] px-5 py-10 lg:px-10 text-burnt">
            {visibleTimestamp === undefined ? (
              <><div className="w-full h-full flex flex-wrap items-center justify-center">{isAtZero ? <p className="min-h-32 max-w-[60%] flex text-center">Hier werden dann die Quellen angezeigt.</p> : <SkypeAnim color={"rum"} isPlaying={isPlaying} darkColor={"burnt"}/>}</div></>
            ) : (
              <ul className="flex flex-col gap-5">
                {visibleTimestamp !== undefined ?
                  timestamps[visibleTimestamp][
                    annotatorLookup[activeAnnotator]
                  ].map((annotation: any, i: number) => (

                    <li key={i}>
                      <a href={annotation.reasoningLink} className="flex flex-col gap-1">
                        <div className="flex lg:flex-col gap-1 mb-2 lg:mb-0 items-end">[{i + 1}]<span className="text-xs">{annotation.reasoningType === "quote" ? "Zitat" : "Anekdote"}</span></div>
                        <div className="flex flex-col lg:ml-6">
                          <div className="font-poppins leading-none">{annotation.reasoningSource}</div>
                          <div className="text-sm">{annotation.reasoningBody}</div>
                        </div>
                      </a>
                    </li>
                  ))
                : <>hä?</>
                }
              </ul>
            )}
          </div>
    )
}