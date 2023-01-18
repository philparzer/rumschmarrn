import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';
import Footer from '../components/static/Footer'
import Nav from '../components/static/Nav';
import Layout from "../components/static/Layout"
import EpisodeList from '../components/static/EpisodeList';
import { EpisodeData } from "../types/interfaces";
import MainHeadline from '../components/builder/MainHeadline';
import { useState, useRef } from "react";
import Button from '../components/static/Button';

/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
if (process.env.NEXT_PUBLIC_BUILDERIO_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDERIO_KEY);
}


export async function getStaticProps({ params }: any) {
  
  const episodes:any = await builder.getAll("episodes", {});
  let formattedEpisodes = episodes.map((episode: any, i:number):EpisodeData => {return {link: episode.data.episode.value.data.url, title: episode.data.title, location: episode.data.location, city: episode.data.city, date: episode.data.date, indexNumber:episode.data.indexNumber}}) // TODO: sort before
  let sortedEpisodes = formattedEpisodes.sort((a:EpisodeData, b:EpisodeData) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return {
    props: {
      episodes: sortedEpisodes || null,
    },
    revalidate: 5,
  };
}

export default function Page({ page, episodes }: any) {
    
    const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
    const inputRef:any = useRef(0)

    const search = (e:any) => {
        
        let tempFilter = episodes.filter((episode:EpisodeData) => e === "" || episode.title.toLowerCase().includes(e) || episode.location.toLowerCase().includes(e)); //filter for hits on title or location
        setFilteredEpisodes(tempFilter)
    }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <Nav />
      <div className="mb-40"></div>
      <Layout>
        <section className="flex gap-10 items-center mb-10 lg:mb-20 flex-wrap">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center ">
        <h1 className="text-[40px] font-poppins">Episoden</h1>
        <input className="bg-burnt bg-opacity-[7%] rounded-[10px] px-4 placeholder:text-burnt py-2 h-10 focus:outline-rum" placeholder='Suchen' ref={inputRef} onChange={(e) => search(e.target.value)}></input>
        </div>
        {filteredEpisodes.length === 0 && 
        <div className="flex w-full justify-center flex-col gap-5">
          <div className="flex items-center gap-2">
            <p className="">Keine Ergebnisse</p>
            <div>
            <svg
              className="w-[2em]"
              viewBox="0 0 37 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7.41785"
                width="28.6604"
                height="33.6593"
                rx="10"
                transform="rotate(-15 0 7.41785)"
                fill="#F4E4A8"
              />
              <rect
                x="4.89746"
                y="7.78284"
                width="24.8531"
                height="29.188"
                rx="10"
                transform="rotate(-15 4.89746 7.78284)"
                fill="#FFEFB5"
              />
              <circle
                cx="25.5"
                cy="13.4999"
                r="2.5"
                fill="#312F2A"
                stroke="#312F2A"
                stroke-width="2"
              />
              <circle
                cx="17.5"
                cy="15.4999"
                r="2.5"
                fill="#312F2A"
                stroke="#312F2A"
                stroke-width="2"
              />
              <path
                d="M28 20.3923C25 19.3923 20.5 20.3923 19 22.3923"
                stroke="#312F2A"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            </div>
          </div>
        </div>
        }
        </section>
      <EpisodeList episodes={filteredEpisodes}/>
      </Layout>
      <Footer />
    </>
  );
}