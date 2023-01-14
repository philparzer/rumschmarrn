import { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

interface Props {
  audioSrc: string;
}

const AudioPlayer = ({ audioSrc }: Props) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVolume, setCurrentVolume] = useState(1)

  let audioMeta = {};

  if (typeof Audio != "undefined") { //needed for ssr/ssg
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef: any = useRef();
    let { duration, volume } = audioRef.current;
    audioMeta = {duration, trackProgress, volume}

    const startTimer = () => {
      // Clear any timers already running
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setTrackProgress(audioRef.current.currentTime);
      }, 200);
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
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);

    useEffect(() => {
        audioRef.current.volume = currentVolume
      }, [currentVolume]);
  }

  return (
    <>
      <AudioControls
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        audioMeta={audioMeta}
        volume={currentVolume}
        setVolume={setCurrentVolume}
      />
    </>
  );
};

export default AudioPlayer;
