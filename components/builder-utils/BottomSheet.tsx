/*
WHAT:

*/
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import usePrevious from "../../hooks/usePrevious";
import moment from "moment";
import AnnotatorBox from "./AnnotatorBox";

interface Props {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
  episode: any;
  isPlaying: boolean;
  volume: any;
  setVolume: any;
  onPlayPauseClick: any;
  audioMeta: any;
  setProgress: (e: any) => void;
  progress: any;
  activeAnnotator: any;
  setActiveAnnotator: any;
  activeAnnotatorData: any;
}

let isUpdatingProgress = false;

export default function BottomSheet({
  onOpen,
  isOpen,
  onClose,
  episode,
  isPlaying,
  onPlayPauseClick,
  audioMeta,
  setProgress,
  progress,
  activeAnnotator,
  setActiveAnnotator,
  activeAnnotatorData,
}: Props) {
  const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function onDragEnd(event: any, info: any) {
    const shouldClose = info.velocity.y > 100;
    if (shouldClose) {
      controls.start("hidden");
      onClose();
    } else {
      controls.start("visible");
      onOpen();
    }
  }

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return (
    <div className="w-full relative">
      <motion.div
        drag="y"
        onDragEnd={onDragEnd}
        initial="hidden"
        animate={controls}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
        }}
        variants={{
          visible: { y: 0 },
          hidden: { y: 200 },
        }}
        dragConstraints={{ top: 0 }}
        dragElastic={0}
        style={{
          display: "inline-block",
          width: "100%",
        }}
        className="inline-block w-full bg-white dark:bg-burnt top-shadow"
      >
        <div className="flex h-[66px] items-center px-[5%] pr-[10%] justify-between">
          <div className="flex gap-[20px] items-center">
            <p className="text-xl font-poppins dark:text-white">
              {episode.value.data.indexNumber}
            </p>
            <div>
              <h1 className="font-poppins text-sm dark:text-white">
                {episode.value.data.title}
              </h1>
              <p className="text-sm ">
                <a className="underline">
                  {episode.value.data.location}, {episode.value.data.city}
                </a>{" "}
                <span className="text-xs pl-2">
                  {new Date(episode.value.data.date).toLocaleDateString("de")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex top-0 h-full z-10 items-center justify-center pointer-events-none">
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

        {/*below fold*/}

        <div className="relative h-[200px] flex">
          <div className="px-[5%] pr-[10%] w-full flex flex-col justify-end">
             
            <div className="flex items-center w-full mb-8">
              <div className="flex gap-5 w-full justify-between">
                <p className="justify-center items-center h-full flex">
                  <span className="flex w-[70px] overflow-hidden">
                    {moment
                      .utc(audioMeta.trackProgress * 1000)
                      .format("HH:mm:ss")}
                  </span>
                </p>
                <div className="relative grow flex items-center">
                  <input
                    className="w-full relative appearance-none accent-rum h-2 bg-glass dark:bg-night dark:accent-rum rounded-lg cursor-pointer"
                    title="volume"
                    type="range"
                    step=".0001"
                    min="0"
                    max={1}
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                  />
                  <div
                    className="absolute h-2 bg-rum rounded-lg pointer-events-none"
                    style={{ width: `${progress * 100}%` }}
                  ></div>
                </div>
                <p className="justify-center items-center h-full flex">
                  <span className="flex w-[70px] overflow-hidden">
                    {moment.utc(audioMeta.duration * 1000).format("HH:mm:ss")}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <AnnotatorBox activeAnnotator={activeAnnotator} activeAnnotatorData={activeAnnotatorData} setActiveAnnotator={setActiveAnnotator}/>
              </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
