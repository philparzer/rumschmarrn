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

export default function SourceBox({visibleTimestamp, activeAnnotator, timestamps, annotatorLookup}:Props) {
    return (
        <div className="bg-kaiserschmarrn-raw dark:bg-rum rounded-[10px] py-10 px-10 text-burnt">
            {visibleTimestamp === undefined ? (
              <><div className="w-full h-full flex flex-wrap items-center justify-center"><SkypeAnim color={"rum"} darkColor={"burnt"}/></div></>
            ) : (
              <ul className="flex flex-col gap-5">
                {visibleTimestamp !== undefined ?
                  timestamps[visibleTimestamp][
                    annotatorLookup[activeAnnotator]
                  ].map((annotation: any, i: number) => (

                    <li key={i}>
                      <a href={annotation.reasoningLink} className="flex flex-col gap-1">
                        <div className="flex gap-1 items-end">[{i + 1}]<span className="text-xs">{annotation.reasoningType}</span></div>
                        <div className="flex flex-col ml-6">
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