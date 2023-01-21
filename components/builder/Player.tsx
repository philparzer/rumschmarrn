/*
WHAT:
podcast player
*/

import AudioPlayer from "../builder-utils/AudioPlayer";
import EpisodeTitle from "../builder-utils/EpisodeTitle";

interface Props {
  episode: any;
  audioSrc: string;
  // annotators: any[];
  // timestamps: any[];
}

export default function Player({ audioSrc, episode }: Props) {
  console.log(episode);
  return (
        <>
          <EpisodeTitle
            episode={episode}
          />
          <AudioPlayer audioSrc={audioSrc} episode={episode}/>
        </>
  );
}
