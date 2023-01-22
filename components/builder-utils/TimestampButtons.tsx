/*
WHAT:

*/

import { useState } from "react";

interface Props {
  timestamps: any;
  setVisibleTimestamp(i: number): void;
  visibleTimestamp: number;
}

export default function TimestampButtons({
  timestamps,
  setVisibleTimestamp,
}: Props) {
  const [toggledButton, setToggledButton] = useState<number>();
  const updateTimestamp = (i: number) => {
    setVisibleTimestamp(i);
    setToggledButton(i);
  };

  return (
    <div className="grid grid-cols-10 grow scale-y-150 origin-bottom gap-[11px]">
      {timestamps.length > 0 &&
        timestamps.map((timestamp: any, i: number) => (
          <div className="relative" key={i} onClick={() => updateTimestamp(i)}>
            <button
              className={`${
                i === toggledButton
                  ? "bg-schmarrn-dark"
                  : "bg-burnt dark:bg-night dark:hover:bg-schmarrn-dark hover:bg-schmarrn-dark"
              }  transition-colors h-[${
                timestamp.barHeight
              }] w-full absolute bottom-0 rounded-[5px]`}
            ></button>
          </div>
        ))}
    </div>
  );
}
