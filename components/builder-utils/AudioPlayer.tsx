/*
WHAT:
audio player to be rendered inside Player component
*/

import { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import useResize from "../../hooks/useResize"
import AudioControlsMobile from "./AudioControlsMobile";

interface Props {
  audioSrc: string;
  episode: any;
  annotators: any[];
  timestamps: any[];
}

const AudioPlayer = ({ audioSrc, episode, annotators, timestamps }: Props) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [audioMetaData, setAudioMetaData] = useState();
  const {width} = useResize();


  let audioMeta: any = {};
  const audioRef: any = useRef(
    typeof Audio != "undefined" && new Audio(audioSrc)
  );
  const intervalRef: any = useRef();
  if (typeof Audio != "undefined") {
    //needed for ssr/ssg
    let { duration, volume } = audioRef.current;
    audioMeta = { duration, trackProgress, volume };
  }

  const dragProgress = (e: any) => {
    audioRef.current.currentTime = e * audioMeta.duration;
    setTrackProgress(e * audioMeta.duration);
    setProgress(e);
  };

  const skipToTime = (seconds: any) => {
    audioRef.current.currentTime = seconds;
    setTrackProgress(audioRef.current.currentTime);
    setProgress(audioRef.current.currentTime / audioMeta.duration);
  }

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTrackProgress(audioRef.current.currentTime);
      setProgress(audioRef.current.currentTime / audioMeta.duration);
    }, 200); //TODO: look into if 200ms too fast
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    audioRef.current.onloadeddata = () => {
      let { duration, volume } = audioRef.current;
      audioMeta = { duration, trackProgress, volume };
      setAudioMetaData(audioMeta);
    };

    audioRef.current.onended = () => {
      setIsPlaying(false);
    };

    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = currentVolume;
  }, [currentVolume]);

  return (
    <>
      {width >= 1024 ? 
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        audioMeta={audioMeta}
        volume={currentVolume}
        setVolume={setCurrentVolume}
        progress={progress}
        setProgress={dragProgress}
        annotators={annotators}
        timestamps={timestamps}
        skipToTime={skipToTime}
      />
      :
      <AudioControlsMobile
        episode={episode}
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        audioMeta={audioMeta}
        volume={currentVolume}
        setVolume={setCurrentVolume}
        progress={progress}
        setProgress={dragProgress}
        annotators={annotators}
        timestamps={timestamps}
        skipToTime={skipToTime}
      />
      
      }
    </>
  );
};

export default AudioPlayer;
