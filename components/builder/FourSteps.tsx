/*
WHAT:
four square steps
*/

interface Props {
  firstStep: string;
  secondStep: string;
  thirdStep: string;
  fourthStep: string;
}

import {motion} from "framer-motion" //TODO: bounce animation

export default function FourSteps({
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
}: Props) {
  return (
    <div className="lg:h-[400px]">
    <section className="flex justify-center">
    <div className="flex flex-col lg:flex-row my-10 max-w-[990px]">

      {/*1*/}
      <div className="flex flex-col lg:flex-row max-w-[35vw] lg:max-w-none items-center">
        <div className="lg:translate-y-16 w-full flex flex-col items-center text-center">
          <svg
            className="w-[100%] "
            viewBox="0 0 148 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11.593"
              y="34.6212"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 11.593 34.6212)"
              stroke="#FFEFB5"
              stroke-width="5"
            />
            <rect
              x="2.99775"
              y="28.6058"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 2.99775 28.6058)"
              stroke="#F4E4A8"
              stroke-width="5"
            />
          </svg>
          <p className="lg:absolute lg:top-32 xl:top-36 m-w-[155px] mt-5 text-lg">
            {firstStep}
          </p>
        </div>
        <svg
          className="w-[60%] my-10 lg:my-0 rotate-[110deg] lg:rotate-[-20deg] lg:-translate-y-4"
          viewBox="0 0 113 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="53.6226"
            width="47"
            height="21"
            transform="rotate(-22.0212 0 53.6226)"
            fill="#FFEFB5"
            fill-opacity="0.6"
          />
          <rect
            x="62"
            y="24.8961"
            width="47"
            height="21"
            transform="rotate(-31.9855 62 24.8961)"
            fill="#FFEFB5"
            fill-opacity="0.6"
          />
        </svg>
      </div>

      {/*2*/}
      <div className="flex flex-col lg:flex-row max-w-[35vw] lg:max-w-none lg:-translate-y-14 items-center">
        <div className="w-full flex flex-col items-center text-center">
          <svg
            className="w-[100%] rotate-[20deg]"
            viewBox="0 0 148 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11.593"
              y="34.6212"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 11.593 34.6212)"
              stroke="#FFEFB5"
              stroke-width="5"
            />
            <rect
              x="2.99775"
              y="28.6058"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 2.99775 28.6058)"
              stroke="#F4E4A8"
              stroke-width="5"
            />
          </svg>
          <p className="lg:absolute lg:top-32 xl:top-36 m-w-[155px] mt-5 text-lg">
            {secondStep}
          </p>
        </div>
        <svg
          className="w-[60%] my-10 lg:my-0 rotate-[300deg] lg:rotate-[-130deg]"
          viewBox="0 0 113 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="53.6226"
            width="47"
            height="21"
            transform="rotate(-22.0212 0 53.6226)"
            fill="#FFEFB5"
            fill-opacity="0.6"
          />
          <rect
            x="62"
            y="24.8961"
            width="47"
            height="21"
            transform="rotate(-31.9855 62 24.8961)"
            fill="#FFEFB5"
            fill-opacity="0.6"
          />
        </svg>
      </div>

      {/*3*/}
      <div className="flex flex-col lg:flex-row max-w-[35vw] lg:max-w-none lg:translate-y-8 items-center">
      <div className="relative w-full flex flex-col items-center text-center">
          <svg
            className="w-[100%] lg:rotate-[28deg] "
            viewBox="0 0 148 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11.593"
              y="34.6212"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 11.593 34.6212)"
              stroke="#FFEFB5"
              stroke-width="5"
            />
            <rect
              x="2.99775"
              y="28.6058"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 2.99775 28.6058)"
              stroke="#F4E4A8"
              stroke-width="5"
            />
          </svg>
          <p className="lg:absolute lg:top-32 xl:top-36 m-w-[155px] mt-5 text-lg">
            {thirdStep}
          </p>
        </div>
        <svg
          className="w-[60%] my-10 lg:my-0 rotate-[110deg] lg:rotate-[-10deg] lg:-translate-y-6"
          viewBox="0 0 113 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="53.6226"
            width="47"
            height="21"
            transform="rotate(-22.0212 0 53.6226)"
            fill="#FFEFB5"
            fill-opacity="0.6"
          />
          <rect
            x="62"
            y="24.8961"
            width="47"
            height="21"
            transform="rotate(-31.9855 62 24.8961)"
            fill="#FFEFB5"
            fill-opacity="0.6"
          />
        </svg>
      </div>

      {/*4*/}
      <div className="flex flex-col lg:flex-row max-w-[35vw] lg:max-w-none lg:-translate-y-14 items-center">
      <div className=" relative w-full flex flex-col max-w-[300px] items-center text-center ">
          <svg
            className="lg:w-[120%] rotate-[20deg] lg:rotate-[0deg]"
            viewBox="0 0 148 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="11.593"
              y="34.6212"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 11.593 34.6212)"
              stroke="#FFEFB5"
              stroke-width="5"
            />
            <rect
              x="2.99775"
              y="28.6058"
              width="113.984"
              height="95.8309"
              transform="rotate(-12.9831 2.99775 28.6058)"
              stroke="#F4E4A8"
              stroke-width="5"
            />
          </svg>
          <p className="lg:absolute lg:top-32 xl:top-36  m-w-[155px] mt-5 text-lg">
            {fourthStep}
          </p>
        </div>
      </div>

    </div>
    </section>
    </div>
  );
}
