/*
WHAT:

*/
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import usePrevious from "../../hooks/usePrevious";

interface Props {
    onOpen: () => void;
    isOpen: boolean;
    onClose: () => void;
    episode: any;
}

export default function BottomSheet({ onOpen, isOpen, onClose, episode}:Props) {
    const prevIsOpen = usePrevious(isOpen);
  const controls = useAnimation();

  function onDragEnd(event:any, info:any) {
    const shouldClose =
      info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45);
    if (shouldClose) {
      controls.start("hidden");
      onClose();
    } else {
      controls.start("visible");
      onOpen();
    }
  }

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return (
    <div className="w-full">
    <motion.div
      drag="y"
      onDragEnd={onDragEnd}
      initial="hidden"
      animate={controls}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 400
      }}
      variants={{
        visible: { y: 0 },
        hidden: { y: "60%" }
      }}
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      style={{
        display: "inline-block",
        width: "100%",
      }}
      className="inline-block w-full bg-white dark:bg-burnt"
    >
        <div className="flex h-[66px] items-center gap-[20px] px-[5%]">
          <p className="text-xl font-poppins dark:text-white">{episode.value.data.indexNumber}</p>
          <div>
          <h1 className="font-poppins text-sm dark:text-white">{episode.value.data.title}</h1>
          <p className="text-sm underline">{episode.value.data.location}, {episode.value.data.city}</p>
          </div>
        </div>
        <div className="h-[100px] relative">
          <div className="px-[5%]">
            {episode.value.data.date}
          </div>
        </div>
    </motion.div>
    </div>
  );
}