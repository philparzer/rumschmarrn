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
    <div>
      <div className="relative w-[80px]">
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
      <input
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
    </div>
  );
}
