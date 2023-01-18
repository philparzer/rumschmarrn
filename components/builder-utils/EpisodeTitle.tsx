/*
WHAT:

*/

import { AnyMxRecord } from "dns";

interface Props {
  episode: any;
}

export default function EpisodeTitle({ episode }: Props) {
  console.log(episode);
  return (
    <div className="flex w-full justify-between flex-row mb-24">
      <div className="flex items-center gap-10">
        <p className="text-4xl font-poppins leading-none">{episode.value.data.indexNumber}</p>
        <div>
          <h1 className="font-poppins text-[26px] leading-none">{episode.value.data.title}</h1>
          <a
          className="text-[20px] font-inter underline"
          href={
            episode.value.data.hasAnchor
              ? `#location`
              : episode.value.data.locationLink
          }
          target={episode.value.data.hasAnchor === false ? "_blank" : ""}
          rel="noopener noreferrer"
        >
          <span>
            {episode.value.data.location}, {episode.value.data.city}
          </span>
        </a>
        </div>
        
      </div>
      <div className="self-end text-sm">{new Date(episode.value.data.date).toLocaleDateString("de")}</div>
    </div>
  );
}
