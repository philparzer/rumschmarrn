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

export default function QuoteBox({isAtZero, timestamps, visibleTimestamp, activeAnnotator, annotatorLookup, isPlaying}:Props) {
    return (
        <div className="lg:w-[68%] transition-all lg:min-h-[0px] lg:h-80 bg-schmarrn-light rounded-[10px] text-burnt px-5 lg:px-10 py-10">
          {visibleTimestamp === undefined ? (
            <div className="w-full h-full flex flex-wrap items-center justify-center transition-all">{isAtZero ? <p className="min-h-32 max-w-[60%] flex text-center">Hier werden die Kommentare zu den jeweiligen Zeitpunkten angezeigt. <br/> <br/>Sobald du auf Start klickst (unten rechts).</p> :<SkypeAnim color={"rum"} darkColor={"rum"} isPlaying={isPlaying}/>}</div>
          ) : (
            <div className="">
              <h3 className="mb-5 lg:mb-10 text-lg font-poppins">
                <span className="text-base">{"[...]"}</span>{(timestamps[visibleTimestamp].episodeQuote)}<span className="text-base">{"[...]"}</span>
              </h3>
              <ul className="flex flex-col gap-5">
                {visibleTimestamp !== undefined &&
                  timestamps[visibleTimestamp][
                    annotatorLookup[activeAnnotator]
                  ].map((annotation: any, i: number) => (
                    <li key={i} className="flex gap-2 lg:gap-5 flex-col lg:flex-row">
                      <span>[{i + 1}]<span className="pl-1 text-xs inline lg:hidden">{annotation.reasoningType === "quote" ? "Zitat" : "Anekdote"}</span></span>
                      {annotation.content}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

    )
}

