/*
WHAT:

*/

import EpisodeListEntry from "./EpisodeListEntry";
import { useEffect } from "react";

interface Props {
  episodes: any[];
}

const opacityStep = 0.2; //TODO: look into this

export default function EpisodeList({ episodes }: Props) {


  useEffect(() => {
    console.log("rerender");
  });

  return (
    <>
        <ul className="gap-4 flex flex-col">
          {episodes.map((episode: any, i: number) => (
            <li key={episode.title}>
              <EpisodeListEntry episode={episode} bgOpacity={1 - (opacityStep  * i)}/>
            </li>
          ))}
        </ul>
    </>
  );
}
