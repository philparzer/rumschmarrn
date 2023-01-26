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
import { time } from "console";
import { hhmmssToSec } from "../../lib/utils/time";
import { getCookie } from 'cookies-next';
import BottomSheet from "./BottomSheet";

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
  skipToTime: any;
  episode: any;
}

const annotatorLookup:any = [
  "nussAnnotations",
  "sahneAnnotations",
  "blaubeerAnnotations",
  "apfelAnnotations",
];

export default function AudioControlsMobile({
  isPlaying,
  onPlayPauseClick,
  audioMeta,
  setVolume,
  volume,
  progress,
  setProgress,
  annotators,
  timestamps,
  skipToTime,
  episode
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
  );
  const [activeAnnotatorData, setActiveAnnotatorData] = useState<AnnotatorData>()

  useEffect(() => {
    let pageCookie = getCookie("schmarrntyp");
    if (pageCookie) {
      if (pageCookie === "Apfel") {setActiveAnnotator(SchmarrnType.Apfel)}
      if (pageCookie === "Sahne") {setActiveAnnotator(SchmarrnType.Sahne)}
      if (pageCookie === "Nuss") {setActiveAnnotator(SchmarrnType.Nuss)}
      if (pageCookie === "Blaubeer") {setActiveAnnotator(SchmarrnType.Blaubeer)}
    }
  }, [])

  useEffect(() => {
    annotators.forEach((annotator) => {
      if (annotator.annotatorType === annotatorLookup[activeAnnotator]) {
        return  setActiveAnnotatorData(annotator);
      }
    })
  }, [activeAnnotator])

  console.log(timestamps)

  useEffect(() => {

    let foundTimeStamp = false;

    timestamps.forEach((timestamp:any, i:number) => {
      let timeStampStartTime = hhmmssToSec(timestamp.startTime);
      let timeStampEndTime = hhmmssToSec(timestamp.endTime);

      console.log("-------------")
      console.log("TRACK PROGRESS " + Math.floor(audioMeta.trackProgress))
      console.log("-------------")
      console.log(i)
      console.log("starting time: " + timeStampStartTime)
      console.log("end time: " + timeStampEndTime)
      
      console.log("is visible: " + (Math.floor(audioMeta.trackProgress) >= timeStampStartTime && timeStampEndTime >= Math.floor(audioMeta.trackProgress)))

      if (Math.floor(audioMeta.trackProgress) >= timeStampStartTime && timeStampEndTime >= Math.floor(audioMeta.trackProgress)) {
        console.log("changing to " + i)
        foundTimeStamp = true;
        setVisibleTimestamp(i)
      }
      
    })

    if (foundTimeStamp === false) {
      setVisibleTimestamp(undefined)
    }

  }, [audioMeta])


  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function onOpen() {
    setIsOpen(true);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="z-10 fixed bottom-0 left-0 flex w-[100vw]">
        <BottomSheet activeAnnotator={activeAnnotator} setActiveAnnotator={setActiveAnnotator} activeAnnotatorData={activeAnnotator} audioMeta={audioMeta} progress={progress} setProgress={setProgress} onOpen={onOpen} isOpen={isOpen} onClose={onClose} episode={episode} setVolume={setVolume} isPlaying={isPlaying} volume={volume} onPlayPauseClick={onPlayPauseClick}/>
      </div>
      <div className="flex items-center h-[100px] mb-[35px]">
        <div className="h-full flex justify-center w-full">
          <div className="flex">
            <TimestampButtons skipToTime={skipToTime} timestamps={timestamps} setVisibleTimestamp={setVisibleTimestamp} visibleTimestamp={visibleTimestamp}/>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="w-full">
          <QuoteBox isPlaying={isPlaying} visibleTimestamp={visibleTimestamp} activeAnnotator={activeAnnotator} timestamps={timestamps} annotatorLookup={annotatorLookup}/>
        </div>
        <div className="w-full">
          <SourceBox isPlaying={isPlaying} visibleTimestamp={visibleTimestamp} activeAnnotator={activeAnnotator} timestamps={timestamps} annotatorLookup={annotatorLookup}/>
        </div>
      </div>
      <div className="flex-col items-center relative  w-full lg:w-[20%] my-10 flex">
          <div className="w-[70px] h-[70px] relative ">
            <Image
              src={activeAnnotatorData ? activeAnnotatorData.annotatorPic : "/"}
              fill
              className="object-cover  rounded-full"
              alt="Bild von Annotator"
              sizes="(max-width: 768px) 70px,
          (max-width: 1200px) 70px,
          70px"
            ></Image>
            <div className="absolute bottom-0 left-12">
              {Object.keys(SchmarrnType).map((schmarrnType: any, i) => {
                //check for active SchmarrnType
                if (!isNaN(Number(schmarrnType))) {
                  if (parseInt(schmarrnType) === activeAnnotator) {
                    return (
                      <SchmarrnButton
                        key={i}
                        handler={setActiveAnnotator}
                        type={parseInt(schmarrnType)}
                        isPersonalSchmarrnType={false}
                      />
                    );
                  }
                }
              })}
            </div>
          </div>

          <div className="my-2 flex flex-col items-center text-center">
            <p className="font-poppins text-sm dark:text-white ">
              {activeAnnotatorData?.annotatorName}
            </p>
            <p className="text-xs">{activeAnnotatorData?.annotatorPosition}</p>
          </div>
        </div>
    </>
  );
}
