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
import moment from "moment";
import { motion } from "framer-motion";

interface Props {
  episode: any;
  isPlaying: boolean;
  onPlayPauseClick: any;
  audioMeta: any;
  setVolume: any;
  volume: any;
  progress: any;
  setProgress: any;
}

export default function AudioControlsMobile({
  episode,
  isPlaying,
  onPlayPauseClick,
  audioMeta,
  setVolume,
  volume,
  progress,
  setProgress,
}: Props) {
  const onDrag = () => {
    // onPlayPauseClick(false); //TODO: is this behavior ok?
  };

  const onUp = () => {
    // onPlayPauseClick(true); //TODO: is this behavior ok?
  };

  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 w-full translate-y-[100px] bg-white dark:bg-night top-shadow"
        drag={"y"}
        dragConstraints={{top: 0, bottom: 100}}
        dragSnapToOrigin={false}
        dragElastic={0}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400
        }}
      >
        <div className="flex h-[66px] items-center gap-[20px] px-[5%]">
          <p className="text-xl font-poppins dark:text-white">{episode.value.data.indexNumber}</p>
          <div>
          <h1 className="font-poppins text-sm dark:text-white">{episode.value.data.title}</h1>
          <p className="text-sm underline">{episode.value.data.location}, {episode.value.data.city}</p>
          </div>
        </div>
        <div className="h-[100px] relative">
          <div className="px-[5%]">
            {episode.value.data.date}
          </div>
          <div className="absolute -bottom-20 h-20 w-full bg-white"></div>
        </div>
      </motion.div>

      <div className="flex items-center h-[100px] max-w-[80%] mb-[35px]">
        <div className="w-14 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div>
              <input
                className="w-14 mb-5 -rotate-90 appearance-none accent-burnt h-2 bg-glass rounded-lg"
                title="volume"
                type="range"
                value={volume}
                step=".02"
                min="0"
                max={1}
                onChange={(e) => setVolume(e.target.value)}
              />
            </div>
            <div className="translate-y-[19px] flex gap-0.5 items-end">
              <motion.div
                animate={
                  isPlaying
                    ? { scaleY: [1 * volume, 1.4 * volume] }
                    : { scaleY: 1 * volume }
                }
                transition={
                  isPlaying
                    ? {
                        repeat: Infinity,
                        duration: 0.5,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }
                    : { repeat: 0 }
                }
                className="w-1.5 h-2 bg-burnt origin-bottom rounded-sm"
              ></motion.div>
              <motion.div
                animate={
                  isPlaying
                    ? { scaleY: [1 * volume, 1.4 * volume] }
                    : { scaleY: 1 * volume }
                }
                transition={
                  isPlaying
                    ? {
                        repeat: Infinity,
                        duration: 0.5,
                        delay: 0.6,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }
                    : { repeat: 0 }
                }
                className="w-1.5 h-4 bg-burnt origin-bottom rounded-sm"
              ></motion.div>
              <motion.div
                animate={
                  isPlaying
                    ? { scaleY: [1 * volume, 1.4 * volume] }
                    : { scaleY: 1 * volume }
                }
                transition={
                  isPlaying
                    ? {
                        repeat: Infinity,
                        duration: 0.5,
                        delay: 0.3,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }
                    : { repeat: 0 }
                }
                className="w-1.5 h-3 bg-burnt origin-bottom rounded-sm"
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="relative w-[68px]">
          <CircularInput
            radius={34}
            value={progress}
            onChange={(e) => setProgress(e)}
          >
            <CircularTrack strokeWidth={8} stroke="rgba(217, 217, 217, 62)" />
            <CircularProgress strokeWidth={8} stroke={"#DEB292"} />
            <CircularThumb
              r={9}
              fill={"#D78E59"}
              onMouseDownCapture={() => onDrag()}
              onMouseUp={() => onUp()}
            />
          </CircularInput>
          <div className="absolute w-full flex top-0 h-full z-10 items-center justify-center pointer-events-none">
            {isPlaying === false ? (
              <button
                onClick={() => onPlayPauseClick(true)}
                className="pointer-events-auto"
              >
                <svg
                  width="20"
                  height="20"
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
                className="pointer-events-auto focus:border-0"
              >
                <svg
                  width="16"
                  height="16"
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
        <div className=" h-full flex grow">
          <p className=" w-20 mx-8 justify-center items-center h-full flex">
            {moment.utc(audioMeta.trackProgress * 1000).format("HH:mm:ss")}
          </p>
          {/*TODO: refactor into components and give time frame as prop */}
          <div className="grid grid-cols-10 grow scale-y-150 origin-bottom gap-[11px]">
            <div className="relative">
              <button className="bg-burnt hover:bg-schmarrn-dark transition-colors h-[60%] w-full absolute bottom-0 rounded-[5px]"></button>
            </div>
            <div className="relative">
              <button className="bg-burnt hover:bg-schmarrn-dark transition-colors h-[90%] w-full absolute bottom-0 rounded-[5px]"></button>
            </div>
            <div className="relative ">
              <button className="bg-burnt hover:bg-schmarrn-dark transition-colors h-[60%] w-full absolute bottom-0 rounded-[5px]"></button>
            </div>
            <div className="relative ">
              <button className="bg-burnt hover:bg-schmarrn-dark transition-colors h-[30%] w-full absolute bottom-0 rounded-[5px]"></button>
            </div>
            <div className="relative ">
              <button className="bg-burnt hover:bg-schmarrn-dark transition-colors h-[50%] w-full absolute bottom-0 rounded-[5px]"></button>
            </div>
          </div>
          <p className="w-20 mx-8 justify-center items-center h-full flex">
            {moment.utc(audioMeta.duration * 1000).format("HH:mm:ss")}
          </p>
        </div>
      </div>
      <div className="flex ml-10 gap-[3%] ">
        <div className="w-[68%] h-80 bg-schmarrn-light rounded-[10px]"></div>
        <div className="grow h-40 bg-kaiserschmarrn-raw rounded-[10px]"></div>
      </div>
    </>
  );
}
