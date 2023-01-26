/*
WHAT:

*/

import { AnnotatorData } from "../../shared-ts/interfaces";
import { SchmarrnType } from "../../shared-ts/enums";
import SchmarrnButton from "../static/SchmarrnButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";

interface Props {
  activeAnnotatorData: AnnotatorData | undefined;
  setActiveAnnotator: (annotator: SchmarrnType) => void;
  activeAnnotator: SchmarrnType;
}

export default function AnnotatorBox({
  activeAnnotatorData,
  setActiveAnnotator,
  activeAnnotator,
}: Props) {
  const [personalSchmarrnType, setPersonalSchmarrntype] = useState<any>();

  useEffect(() => {
    setPersonalSchmarrntype(getCookie("schmarrntyp"));
  }, []);

  return (
    <>
      <div className="flex my-5 gap-7 lg:gap-3 items-center flex-wrap">
        <div className="flex-col items-center relative  w-full lg:w-[20%] hidden lg:flex">
          <div className="w-[70px] h-[70px] relative ">
            <Image
              src={activeAnnotatorData ? activeAnnotatorData.annotatorPic : "/"}
              fill
              className="object-cover  rounded-full"
              alt="Bild von Annotator"
              sizes="(max-width: 768px) 70px,
          (max-width: 1200px) 70px,
          70px"
            ></Image>
            <div className="absolute bottom-0 left-12">
              {Object.keys(SchmarrnType).map((schmarrnType: any, i) => {
                //check for active SchmarrnType
                if (!isNaN(Number(schmarrnType))) {
                  if (parseInt(schmarrnType) === activeAnnotator) {
                    return (
                      <SchmarrnButton
                        key={i}
                        handler={setActiveAnnotator}
                        type={parseInt(schmarrnType)}
                        isPersonalSchmarrnType={false}
                      />
                    );
                  }
                }
              })}
            </div>
          </div>

          <div className="my-2 flex flex-col items-center text-center">
            <p className="font-poppins text-sm dark:text-white ">
              {activeAnnotatorData?.annotatorName}
            </p>
            <p className="text-xs">{activeAnnotatorData?.annotatorPosition}</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-sm gap-1 w-full lg:w-auto">
          <p className="mr-2 lg:mx-0 lg:ml-0 max-w-none"><span className="hidden lg:inline">Heut mal </span>Lust auf anderen Schmarrn?</p>
          {Object.keys(SchmarrnType).map((schmarrnType: any, i) => {
            //check for active SchmarrnType
            if (!isNaN(Number(schmarrnType))) {
              if (parseInt(schmarrnType) !== activeAnnotator) {
                return (
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.4 },
                    }}
                  >
                    <SchmarrnButton
                      handler={setActiveAnnotator}
                      type={parseInt(schmarrnType)}
                      isPersonalSchmarrnType={
                        parseInt(schmarrnType) ===
                        parseInt(SchmarrnType[personalSchmarrnType])
                      }
                    />
                  </motion.div>
                );
              }
            }
          })}
        </div>
      </div>
    </>
  );
}
