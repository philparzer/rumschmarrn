/*
WHAT:

*/

import SkypeAnim from "../static/SkypeAnim";

interface Props {
    visibleTimestamp: any;
    activeAnnotator: any;
    timestamps: any[];
    annotatorLookup: any[];
}   

export default function QuoteBox({timestamps, visibleTimestamp, activeAnnotator, annotatorLookup}:Props) {
    return (
        <div className="w-[68%] h-80 bg-schmarrn-light rounded-[10px] text-burnt px-10 py-10">
          {visibleTimestamp === undefined ? (
            <div className="w-full h-full flex items-center justify-center"><SkypeAnim /></div>
          ) : (
            <div>
              <h3 className="mb-10 text-lg font-poppins">
                <span className="text-base">{"[...]"}</span>{(timestamps[visibleTimestamp].episodeQuote)}<span className="text-base">{"[...]"}</span>
              </h3>
              <ul className="flex flex-col gap-5">
                {visibleTimestamp !== undefined &&
                  timestamps[visibleTimestamp][
                    annotatorLookup[activeAnnotator]
                  ].map((annotation: any, i: number) => (
                    <li key={i} className="flex gap-5">
                      <span>[{i + 1}]</span>&quot;{annotation.content}&quot;
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

    )
}

