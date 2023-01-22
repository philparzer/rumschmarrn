/*
WHAT:

*/

interface Props {
   visibleTimestamp: any;
   activeAnnotator: any;
   timestamps: any[];
   annotatorLookup: any[];
}   

export default function SourceBox({visibleTimestamp, activeAnnotator, timestamps, annotatorLookup}:Props) {
    console.log("hhhiu")
    console.log(visibleTimestamp && timestamps[visibleTimestamp][
        annotatorLookup[activeAnnotator]
      ].map((annotation: any, i: number) => console.log(annotation.content)))
    return (
        <div className="bg-kaiserschmarrn-raw dark:bg-rum rounded-[10px] py-10 px-10 text-burnt">
            {visibleTimestamp === undefined ? (
              <>klick auf einen Timestamp //TODO: change</>
            ) : (
              <ul className="flex flex-col gap-5">
                {visibleTimestamp !== undefined ?
                  timestamps[visibleTimestamp][
                    annotatorLookup[activeAnnotator]
                  ].map((annotation: any, i: number) => (

                    <li key={i}>
                      <a href={annotation.reasoningLink} className="flex flex-col gap-1">
                        <div >[{i + 1}]<span className="text-xs">{annotation.reasoningType}</span></div>
                        <div className="flex flex-col">
                          <div>{annotation.reasoningSource}</div>
                          <div>{annotation.reasoningBody}</div>
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