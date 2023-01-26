/*
WHAT:

*/

import { motion, useAnimationControls} from "framer-motion";
import { useEffect } from "react"

interface Props {
    color: string;
    darkColor: string;
    isPlaying: boolean;
}

export default function SkypeAnim({color, darkColor, isPlaying}: Props) {
    //TODO: play / pause w controls

    const firstControls = useAnimationControls()
    const secondControls = useAnimationControls()
    const thirdControls = useAnimationControls()
    const fourthControls = useAnimationControls()

    // useEffect(() => {
    //   firstControls.start({scale: [1, 1.5, 1], transition: {repeat: Infinity, repeatType: "mirror", duration: 1.5}})
    //   secondControls.start({scale: [0.5, 1, 1.3, 1, 0.5], transition:{repeat: Infinity, repeatType: "mirror", duration: 3}})
    //   thirdControls.start({scale: [0.7, 0.7, 1.2, 0.7, 0.7], transition:{repeat: Infinity, repeatType: "mirror", duration: 3}})
    //   fourthControls.start({scale: [0.5, 0.5, 1.1, 0.5, 0.5], transition:{repeat: Infinity, repeatType: "mirror", duration: 3}})
    // }, [])

    useEffect(() => {
      if (isPlaying === true) {
        firstControls.start({scale: [1, 1.5, 1], transition: {repeat: Infinity, repeatType: "mirror", duration: 1.5}})
        secondControls.start({scale: [0.5, 1, 1.3, 1, 0.5], transition:{repeat: Infinity, repeatType: "mirror", duration: 3}})
        thirdControls.start({scale: [0.7, 0.7, 1.2, 0.7, 0.7], transition:{repeat: Infinity, repeatType: "mirror", duration: 3}})
        fourthControls.start({scale: [0.5, 0.5, 1.1, 0.5, 0.5], transition:{repeat: Infinity, repeatType: "mirror", duration: 3}})
      }
      else {
        firstControls.stop()
        secondControls.stop()
        thirdControls.stop()
        fourthControls.stop()
      }
    }, [isPlaying])

  return (
    <div className="z-0 relative w-full flex justify-center">
      <div className="w-32 h-32 relative">
      <motion.div animate={firstControls} className="z-40 absolute top-0 left-0 right-0 bottom-0 mr-auto ml-auto mt-auto mb-auto w-[50%] h-[50%] rounded-full flex items-center justify-center">
        <svg
          width={"90%"}
          height={"90%"}
          viewBox="0 0 37 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.58819 17.0771C1.15877 11.7424 4.3246 6.25907 9.65926 4.82966L18.0246 2.58818C23.3592 1.15876 28.8426 4.32459 30.272 9.65925L33.8073 22.8531C35.2367 28.1878 32.0709 33.6711 26.7362 35.1006L18.3709 37.342C13.0363 38.7715 7.55289 35.6056 6.12348 30.271L2.58819 17.0771Z"
            fill="#F4E4A8"
          />
          <path
            d="M7.48565 17.4422C6.05623 12.1075 9.22206 6.62416 14.5567 5.19474L19.2445 3.93866C24.5791 2.50924 30.0625 5.67507 31.4919 11.0097L33.8699 19.8846C35.2994 25.2193 32.1335 30.7027 26.7989 32.1321L22.1111 33.3882C16.7765 34.8176 11.2931 31.6517 9.86367 26.3171L7.48565 17.4422Z"
            fill="#FFEFB5"
          />
        </svg>
      </motion.div>
      <motion.div animate={secondControls} className={`z-30 absolute top-0 left-0 right-0 bottom-0 mr-auto ml-auto mt-auto mb-auto w-[50%] h-[50%] rounded-full bg-${color} dark:bg-${darkColor}`}  />
      <motion.div animate={thirdControls} className={`z-20 absolute top-0 left-0 right-0 bottom-0 mr-auto ml-auto mt-auto mb-auto w-[70%] h-[70%] rounded-full  bg-opacity-50 bg-${color} dark:bg-opacity-50 dark:bg-${darkColor}`} />
      <motion.div animate={fourthControls} className={`z-10 absolute top-0 left-0 right-0 bottom-0 mr-auto ml-auto mt-auto mb-auto w-[90%] h-[90%] rounded-full  bg-opacity-25 bg-${color} dark:bg-opacity-25 dark:bg-${darkColor}`} />
      </div>
    </div>
  );
}
