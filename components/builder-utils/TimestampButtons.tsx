/*
WHAT:

*/

import { useState } from "react";
import TimestampButton from "./TimestampButton";
import { hhmmssToSec } from "../../utils/time";

interface Props {
  timestamps: any;
  setVisibleTimestamp(i: number): void;
  visibleTimestamp: number;
  skipToTime: any;
}

export default function TimestampButtons({
  timestamps,
  setVisibleTimestamp,
  visibleTimestamp,
  skipToTime
}: Props) {
  
  
  const updateTimestamp = (i: number) => {
    setVisibleTimestamp(i);
    skipToTime(hhmmssToSec(timestamps[i].startTime))
  };

  console.log("visibleTimestamp " + visibleTimestamp)

  return (
    <div className="w-full flex scale-y-150 origin-bottom gap-[11px]">
      {timestamps.length > 0 &&
        timestamps.map((timestamp: any, i: number) => (
          <TimestampButton key={i} isToggled={i === visibleTimestamp} i={i} barHeight={timestamp.barHeight} updateTimestamp={updateTimestamp}/>
        ))}
    </div>
  );
}
