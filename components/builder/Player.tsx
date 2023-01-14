/*
WHAT:

*/

import AudioPlayer from "../builder-utils/AudioPlayer"

interface Props {
  audioSrc: string;
  externalLinks: [];
}

export default function Player({ audioSrc, externalLinks }: Props) {
    console.log(audioSrc)
  return (
    <>
      <AudioPlayer audioSrc={audioSrc}/>
    </>
  );
}
