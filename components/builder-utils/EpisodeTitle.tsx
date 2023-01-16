/*
WHAT:

*/

import { AnyMxRecord } from "dns";
import { Location } from "../../types/interfaces";

interface Props {
  index: any;
  title: any;
  date: any;
  episode: any;
//   location: any;
}

export default function EpisodeTitle({ index, title, date, episode }: Props) {
  console.log(episode)
    return (
    <div className="flex w-full justify-between">
      <div>
        <p>{JSON.stringify(index)}</p>
        <div>
          <h1>{JSON.stringify(title)}</h1>
          <a href="#"></a>
        </div>
      </div>
      <div>{new Date(date).toLocaleDateString("de")}</div>
    </div>
  );
}
