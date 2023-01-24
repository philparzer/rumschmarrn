/*
WHAT:

*/

import { SchmarrnType } from "../../shared-ts/enums";
import dynamic from "next/dynamic";
import Blaubeer from "../svgs/Blaubeer";
import Sahne from "../svgs/Sahne";
import Apfel from "../svgs/Apfel";
import Nuss from "../svgs/Nuss";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Confetti from 'react-confetti'

interface Props {
  schmarrntyp: SchmarrnType;
  setVisible: (toggle: boolean) => void;
  currentQuestion: number;
  length: number;
}

let isFirstClick = true;

export default function SchmarrnReveal({
  schmarrntyp,
  setVisible,
  length,
  currentQuestion,
}: Props) {

  
  const closeViaOutsideClick = () => {
    if (isFirstClick) {
      isFirstClick = false;
      return;
    } else {
      setVisible(false);
    }
  };

  let ref: any = useOutsideClick(() => closeViaOutsideClick());
  return (
    <>
        <div className="absolute overflow-visible h-[120vh] w-full top-0"><Confetti/></div>
      <div
        ref={ref}
        className="bg-white px-8 pt-7 rounded-[10px] w-[33vw] flex flex-col justify-between relative"
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="m12 13.4-4.9 4.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l4.9-4.9-4.9-4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.9 4.9 4.9-4.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z" />
          </svg>
        </button>
        <div className="flex justify-center">
          <div className="relative">
            <div className="flex flex-col items-center mb-8">
              <div className="">
                {schmarrntyp === SchmarrnType.Nuss ? (
                  <Nuss />
                ) : schmarrntyp === SchmarrnType.Apfel ? (
                  <Apfel />
                ) : schmarrntyp === SchmarrnType.Blaubeer ? (
                  <Blaubeer />
                ) : schmarrntyp === SchmarrnType.Sahne ? (
                  <Sahne />
                ) : (
                  "hä?"
                )}
              </div>
              <p>du bist ein</p>
              <p className="font-poppins text-2xl">
                {SchmarrnType[schmarrntyp]}schmarrn
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-8 py-12 rounded-[10px] max-w-[20vw]">
        <h3 className="text-xl font-poppins mb-4">Hurra 🎉</h3>
        <>
          Jetzt können wir einschätzen, welche Kommentare du für dein
          Hörerlebnis bevorzugst.
        </>
      </div>
    </>
  );
}
