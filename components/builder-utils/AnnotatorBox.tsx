/*
WHAT:

*/

import { AnnotatorData } from "../../shared-ts/interfaces"
import { SchmarrnType } from "../../shared-ts/enums";
import SchmarrnButton from "../static/SchmarrnButton";
import Image from "next/image"
import { motion } from "framer-motion"

interface Props {
    activeAnnotatorData: AnnotatorData | undefined;
    setActiveAnnotator: (annotator: SchmarrnType) => void;
    activeAnnotator: SchmarrnType;
}

export default function AnnotatorBox({ activeAnnotatorData, setActiveAnnotator, activeAnnotator }:Props) {
    return (
        <>
            <div className="flex my-5 gap-3 items-center">
        <div className="flex flex-col items-center relative w-[20%]">
        <div className="w-[70px] h-[70px] relative">
          <Image src={
            activeAnnotatorData ? activeAnnotatorData.annotatorPic : "/"
          } fill className="object-cover  rounded-full" alt="Bild von Annotator" sizes="(max-width: 768px) 70px,
          (max-width: 1200px) 70px,
          70px">
          </Image>
          <div className="absolute bottom-0 left-12">
          {Object.keys(SchmarrnType).map((schmarrnType: any, i) => { //check for active SchmarrnType
                if (!isNaN(Number(schmarrnType))) {
                  if (parseInt(schmarrnType) === activeAnnotator) {
                  return (
                  <SchmarrnButton
                    key={i}
                    handler={setActiveAnnotator}
                    type={parseInt(schmarrnType)}
                  />
                  )
                }
                }
              }
              )}
        </div>
        </div>
        
        <div className="my-2 flex flex-col items-center text-center">
          <p className="font-poppins text-sm dark:text-white">{activeAnnotatorData?.annotatorName}</p>
          <p className="text-xs">{activeAnnotatorData?.annotatorPosition}</p>
        </div>
        </div>
        <div className="flex items-center text-sm">
          Heut mal Lust auf einen anderen Schmarrn?
            {Object.keys(SchmarrnType).map((schmarrnType: any, i) => { //check for active SchmarrnType
              if (!isNaN(Number(schmarrnType))) {
                if (parseInt(schmarrnType) !== activeAnnotator) {
                return (
                <motion.div key={i} whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.4 },
                }}>
                  <SchmarrnButton
                    handler={setActiveAnnotator}
                    type={parseInt(schmarrnType)}
                  />
                </motion.div>
                )
              }
              }
            }
            )}
        </div>
      </div>
        </>
    )
}

