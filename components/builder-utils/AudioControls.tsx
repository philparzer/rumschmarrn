/*
WHAT:
audio control ui for use in player
*/

import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";
import { useState, useEffect } from "react";
import moment from "moment";

interface Props {
  isPlaying: boolean;
  onPlayPauseClick: any;
  audioMeta: any;
  setVolume: any;
  volume: any;
  progress: any;
  setProgress: any;
}

const percentage = 66;

export default function AudioControls({
  isPlaying,
  onPlayPauseClick,
  audioMeta,
  setVolume,
  volume,
  progress,
  setProgress,
}: Props) {
  const [renderText, setRenderText] = useState(false);

  useEffect(() => {
    setRenderText(true);
  }, []);

  const onDrag = () => {
    // onPlayPauseClick(false); //TODO: is this behavior ok?
  };

  const onUp = () => {
    // onPlayPauseClick(true); //TODO: is this behavior ok?
  };

  return (
    <div className="flex gap-0">
      <div className="border w-14 flex flex-col justify-end">
      <input
        className="-rotate-90 w-full"
        title="volume"
        type="range"
        value={volume}
        step=".02"
        min="0"
        max={1}
        onChange={(e) => setVolume(e.target.value)}
        // onMouseUp={onScrubEnd}
        // onKeyUp={onScrubEnd}
      />
      <div className="self-start"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-4q0-.825.588-1.413Q5.175 12 6 12t1.412.587Q8 13.175 8 14v4q0 .825-.588 1.413Q6.825 20 6 20Zm6 0q-.825 0-1.412-.587Q10 18.825 10 18V6q0-.825.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6v12q0 .825-.587 1.413Q12.825 20 12 20Zm6 0q-.825 0-1.413-.587Q16 18.825 16 18v-7q0-.825.587-1.413Q17.175 9 18 9q.825 0 1.413.587Q20 10.175 20 11v7q0 .825-.587 1.413Q18.825 20 18 20Z"/></svg></div>
      </div>
      <div className="relative border w-[80px]">
        <CircularInput
          radius={40}
          value={progress}
          onChange={(e) => setProgress(e)}
        >
          <CircularTrack strokeWidth={8} stroke="rgba(217, 217, 217, 62)" />
          <CircularProgress strokeWidth={8} stroke="#D9A47E" />
          <CircularThumb
            r={12}
            fill="#D78E59"
            onMouseDownCapture={() => onDrag()}
            onMouseUp={() => onUp()}
          />
        </CircularInput>
        <div className="px-10 absolute  flex top-0 w-full h-full z-10 items-center justify-center pointer-events-none">
          {isPlaying === false ? (
            <button
              onClick={() => onPlayPauseClick(true)}
              className="pointer-events-auto"
            >
              <svg
                x={30}
                y={30}
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5 13.134C27.1667 13.5189 27.1667 14.4811 26.5 14.866L8.5 25.2583C7.83333 25.6432 7 25.1621 7 24.3923L7 3.60769C7 2.83789 7.83334 2.35677 8.5 2.74167L26.5 13.134Z"
                  fill="#404040"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => onPlayPauseClick(false)}
              className="pointer-events-auto"
            >
              <svg
                x={30}
                y={30}
                width="20"
                height="20"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7" height="23" fill="#404040" />
                <rect x="13" width="7" height="23" fill="#404040" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {renderText === true && (
        <div>
          {moment.utc(audioMeta.trackProgress * 1000).format("HH:mm:ss")} |{" "}
          {moment.utc(audioMeta.duration * 1000).format("HH:mm:ss")}
        </div>
      )}
      
    </div>
  );
}
