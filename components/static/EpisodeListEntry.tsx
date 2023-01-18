import Link from "next/link";
import { EpisodeData } from "../../types/interfaces";

interface Props {
  episode: any;
  bgOpacity: number;
}

export default function EpisodeListEntry({ episode, bgOpacity }: Props) {
  console.log("hi")
  console.log(episode)
  
  return (
    <Link
      className="flex justify-between items-center group"
      href={episode.link}
    >
    <div style={{background: `rgba(255, 239, 181, ${bgOpacity})`}} className={`flex items-center w-full justify-between bg-schmarrn-light pl-6 lg:pl-10 pr-4 py-2 rounded-[10px] group-hover:!bg-schmarrn-dark transition-all`}>
      <div className="flex grow justify-between items-center">
        <div className="flex grow items-center">
          <h3 className="font-poppins text-xl mr-[7%]">{episode.indexNumber}</h3>
          <div className="w-full"><h2 className="font-semibold">{episode.title}</h2><div className="xl:hidden inline-block text-sm w-[250px] sm:w-[300px] md:w-[350px] overflow-hidden  text-ellipsis whitespace-nowrap">{episode.location}, {episode.city} | {new Date(episode.date).toLocaleDateString("de")}</div></div>
        </div>
        <div className="hidden xl:block text-sm">{episode.location}, {episode.city} | {new Date(episode.date).toLocaleDateString("de")}</div>
      </div>

      <div className="w-2/12 flex justify-end h-[61px] items-center">
       <svg 
       className="w-[20px] h-[20px] mr-4"
                width="12"
                height="12"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5 13.134C27.1667 13.5189 27.1667 14.4811 26.5 14.866L8.5 25.2583C7.83333 25.6432 7 25.1621 7 24.3923L7 3.60769C7 2.83789 7.83334 2.35677 8.5 2.74167L26.5 13.134Z"
                  className="fill-burnt"
                />
              </svg>
        
      </div>
      </div>
      <div>
      
      </div>
    </Link>
  );
}
