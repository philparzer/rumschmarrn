/*
WHAT:
Hero for Home
*/

import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../builder-utils/ButtonLink"

interface Props {
  title: string;
  wordType: string;
  seperation: string;
  definition: string;
  example: string;
  buttonText: string;
  alternativeText: string;
  alternativePlatforms: any;
  buttonLink: any;
}

export default function Hero({
  title,
  wordType,
  seperation,
  definition,
  example,
  buttonText,
  buttonLink,
  alternativeText,
  alternativePlatforms,
}: Props) {
  return (
    <div className="font-inter mb-20 lg:my-20">
      <h1 className="font-baloo font-semibold text-4xl md:text-6xl mb-1 dark:text-white">
        {title}
      </h1>
      <div className="">
        <div className="flex gap-8 mb-7">
          <p>{wordType}</p>
          <p>{seperation}</p>
        </div>
        <div className="mb-5 dark:text-white">
          <p className="font text-xl">{definition}</p>
        </div>
      </div>
      <div className="flex mb-14">
        <div className="px-5 py-9 bg-schmarrn-light rounded-[10px]">
          <div
            className="text-black richtext"
            dangerouslySetInnerHTML={{
              __html: example,
            }}
          ></div>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <ButtonLink link={buttonLink.value} text={buttonText}/>
        <p className="text-xs">{alternativeText}</p>
        <ul className="grid grid-cols-2 md:w-auto md:flex gap-5">
          {alternativePlatforms.map((platform: any, i: number) => (
            <li key={i}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title={platform.title}
                href={platform.link}
              >
                <Image
                  src={platform.logo}
                  width={18}
                  height={18}
                  alt="alt"
                ></Image>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
