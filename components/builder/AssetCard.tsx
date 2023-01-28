/*
WHAT:

*/

import Image from "next/image"


interface Props {
  file: string;
  title: string;
  text: string;
  altText: string;
  fileType: "image" | "video"
}

export default function AssetCard({ file, title, text, fileType, altText }: Props) {
  return (
    <section className="flex flex-col lg:flex-row justify-between  my-20 gap-10">
      <div className="lg:max-w-[500px]">
        <h2 className="text-[32px] lg:text-[40px] font-poppins leading-tight dark:text-white">{title}</h2>
        <div
          className="mt-4 richtext"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div> 
      <div className="">
          {fileType === "video" && <video className="rounded-[10px] max-h-[350px] object-cover aspect-[14/9]" src={file} muted autoPlay loop></video>}
          {fileType === "image" && <Image src={file} fill alt="" className="rounded-[10px] max-h-[350px] object-cover aspect-[12/9]"></Image>}
      </div>
    </section>
  );
}
