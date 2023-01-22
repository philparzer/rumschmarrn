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
import { useState, useEffect } from "react";
import { SchmarrnType } from "../../shared-ts/enums";
import SchmarrnButton from "../static/SchmarrnButton";
import SourceBox from "../builder-utils/SourceBox";
import QuoteBox from "./QuoteBox";
import TimestampButtons from "./TimestampButtons";
import Image from "next/image"
import { AnnotatorData } from "../../shared-ts/interfaces";
import { stringify } from "querystring";
import AnnotatorBox from "./AnnotatorBox";

interface Props {
  isPlaying: boolean;
  onPlayPauseClick: any;
  audioMeta: any;
  setVolume: any;
  volume: any;
  progress: any;
  setProgress: any;
  annotators: any[];
  timestamps: any[];
}

const annotatorLookup:any = [
  "nussAnnotations",
  "sahneAnnotations",
  "blaubeerAnnotations",
  "apfelAnnotations",
];

export default function AudioControls({
  isPlaying,
  onPlayPauseClick,
  audioMeta,
  setVolume,
  volume,
  progress,
  setProgress,
  annotators,
  timestamps,
}: Props) {
  const onDrag = () => {
    // onPlayPauseClick(false); //TODO: is this behavior ok?
  };

  const onUp = () => {
    // onPlayPauseClick(true); //TODO: is this behavior ok?
  };

  const [visibleTimestamp, setVisibleTimestamp] = useState<any>();
  const [activeAnnotator, setActiveAnnotator] = useState<SchmarrnType>(
    SchmarrnType.Blaubeer
  ); //TODO: init via local storage
  const [activeAnnotatorData, setActiveAnnotatorData] = useState<AnnotatorData>()
  

  useEffect(() => {
    annotators.forEach((annotator) => {
      if (annotator.annotatorType === annotatorLookup[activeAnnotator]) {
        return  setActiveAnnotatorData(annotator);
      }
    })
  }, [activeAnnotator])


  console.log("DATA:");
  console.log(annotators);
  console.log(timestamps);

  return (
    <>
      <div className="flex items-center h-[100px] max-w-[80%] mb-[35px]">
        <div className="w-14 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div>
              <input
                className="w-14 mb-5 -rotate-90 appearance-none accent-burnt h-2 bg-glass dark:bg-night dark:accent-white rounded-lg cursor-pointer"
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
                className="w-1.5 h-2 bg-burnt dark:bg-light origin-bottom rounded-sm"
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
                className="w-1.5 h-4 bg-burnt dark:bg-light origin-bottom rounded-sm"
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
                className="w-1.5 h-3 bg-burnt dark:bg-light origin-bottom rounded-sm"
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
            <CircularTrack
              strokeWidth={8}
              className="stroke-glass dark:stroke-night"
            />
            <CircularProgress strokeWidth={8} className="stroke-[#DEB292]" />
            <CircularThumb
              r={9}
              className="cursor-pointer"
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
                    className="fill-burnt dark:fill-white"
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
                  <rect
                    width="7"
                    height="23"
                    className="fill-burnt dark:fill-white"
                  />
                  <rect
                    x="13"
                    width="7"
                    height="23"
                    className="fill-burnt dark:fill-white"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className=" h-full flex grow">
          <p className=" w-20 mx-8 justify-center items-center h-full flex">
            {moment.utc(audioMeta.trackProgress * 1000).format("HH:mm:ss")}
          </p>
          <TimestampButtons timestamps={timestamps} setVisibleTimestamp={setVisibleTimestamp} visibleTimestamp={visibleTimestamp}/>
          <p className="w-20 mx-8 justify-center items-center h-full flex">
            {moment.utc(audioMeta.duration * 1000).format("HH:mm:ss")}
          </p>
        </div>
      </div>

      <div className="flex ml-10 gap-[3%] ">
          <QuoteBox visibleTimestamp={visibleTimestamp} activeAnnotator={activeAnnotator} timestamps={timestamps} annotatorLookup={annotatorLookup}/>
        <div className="w-[20%] grow">
          <SourceBox visibleTimestamp={visibleTimestamp} activeAnnotator={activeAnnotator} timestamps={timestamps} annotatorLookup={annotatorLookup}/>
        </div>
      </div>

      <AnnotatorBox activeAnnotator={activeAnnotator} activeAnnotatorData={activeAnnotatorData} setActiveAnnotator={setActiveAnnotator}/>
    </>
  );
}
