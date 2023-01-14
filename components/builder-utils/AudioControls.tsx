/*
WHAT:
audio control ui for use in player
*/
import {useState, useEffect} from "react"

interface Props {
  isPlaying: boolean;
  onPlayPauseClick: any;
  audioMeta: any;
  setVolume: any;
  volume: any;
}

export default function AudioControls({ isPlaying, onPlayPauseClick, audioMeta, setVolume, volume}: Props) {
    
    const [renderText, setRenderText] = useState(false)

    useEffect(() => {
        setRenderText(true)
    }, [])
    
    return (
    <div>
      {isPlaying === true ? (
        <button onClick={() => onPlayPauseClick(false)}>Pause</button>
      ) : (
        <button onClick={() => onPlayPauseClick(true)}>Play</button>
      )}
    {renderText === true &&
        <div>
      {audioMeta.trackProgress}:
      {audioMeta.duration}
      </div>}
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
