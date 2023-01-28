/*
WHAT:

*/

import Image from "next/image"
import Nuss from "../svgs/Nuss";
import Sahne from "../svgs/Sahne";
import Apfel from "../svgs/Apfel";
import Blaubeer from "../svgs/Blaubeer";


interface Props {
  file: string;
  title: string;
  text: string;
  altText: string;
  fileType: "image" | "video"
}

export default function GridCard({ file, title, text, fileType, altText }: Props) {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center my-20 gap-10">
      <div className="lg:max-w-[500px]">
        <h2 className="text-[32px] lg:text-[40px] font-poppins leading-tight dark:text-white">{title}</h2>
        <div
          className="mt-4 richtext"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
      <div className="flex">
      <div className="max-h-[350px] relative aspect-[12/9] grid grid-cols-2 place-items-start gutter ">
          <div className="xl:h-40 xl:w-40 z-10 "><Nuss /></div>
          <div className="xl:h-40 xl:w-40 z-10 "><Apfel /></div>
          <div className="xl:h-40 xl:w-40 z-10 "><Blaubeer /></div>
          <div className="xl:h-40 xl:w-40 z-10 "><Sahne /></div>
      </div>
      </div>
    </section>
  );
}
