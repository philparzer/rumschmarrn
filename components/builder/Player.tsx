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
            index={episode.value.data.indexNumber}
            title={episode.value.data.title}
            date={episode.value.data.date}
            episode={episode}
          />
          <AudioPlayer audioSrc={audioSrc}/>
        </>
  );
}
