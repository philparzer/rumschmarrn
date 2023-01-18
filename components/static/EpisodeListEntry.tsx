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

      <div className="w-2/12 flex justify-end">
      <svg
          className="w-[61px] h-[61px]"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3112 11.3788V15.8811C12.3112 16.116 12.4124 16.2921 12.6146 16.4096C12.8169 16.527 13.0159 16.5205 13.2117 16.39L16.7548 14.1193C16.9375 14.0019 17.0288 13.8387 17.0288 13.6299C17.0288 13.4211 16.9375 13.258 16.7548 13.1406L13.2117 10.8699C13.0159 10.7394 12.8169 10.7328 12.6146 10.8503C12.4124 10.9677 12.3112 11.1439 12.3112 11.3788ZM14.21 21.4599C13.1399 21.4599 12.1285 21.2544 11.1759 20.8433C10.2232 20.4322 9.39129 19.8711 8.68007 19.1599C7.96884 18.4486 7.40769 17.6167 6.99662 16.6641C6.58554 15.7114 6.38 14.7 6.38 13.6299C6.38 12.5598 6.58554 11.5485 6.99662 10.5958C7.40769 9.64315 7.96884 8.81121 8.68007 8.09999C9.39129 7.38876 10.2232 6.82761 11.1759 6.41654C12.1285 6.00546 13.1399 5.79993 14.21 5.79993C15.2801 5.79993 16.2915 6.00546 17.2441 6.41654C18.1968 6.82761 19.0287 7.38876 19.7399 8.09999C20.4512 8.81121 21.0123 9.64315 21.4234 10.5958C21.8345 11.5485 22.04 12.5598 22.04 13.6299C22.04 14.7 21.8345 15.7114 21.4234 16.6641C21.0123 17.6167 20.4512 18.4486 19.7399 19.1599C19.0287 19.8711 18.1968 20.4322 17.2441 20.8433C16.2915 21.2544 15.2801 21.4599 14.21 21.4599ZM14.21 20.2854C16.037 20.2854 17.603 19.6329 18.908 18.3279C20.213 17.0229 20.8655 15.4569 20.8655 13.6299C20.8655 11.8029 20.213 10.2369 18.908 8.93193C17.603 7.62693 16.037 6.97443 14.21 6.97443C12.383 6.97443 10.817 7.62693 9.512 8.93193C8.207 10.2369 7.5545 11.8029 7.5545 13.6299C7.5545 15.4569 8.207 17.0229 9.512 18.3279C10.817 19.6329 12.383 20.2854 14.21 20.2854Z"
            fill="black"
          />
        </svg>
        
      </div>
      </div>
      <div>
      
      </div>
    </Link>
  );
}
