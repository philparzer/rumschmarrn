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
import { EpisodeData } from "../shared-ts/interfaces";
import MainHeadline from '../components/builder/MainHeadline';
import { useState, useRef, useEffect } from "react";
import Button from '../components/static/Button';
import { ColorTheme } from "../shared-ts/enums";
import { useCookie } from "next-cookie";
import Schmarrntest from "../components/static/Schmarrntest"
import { getCookie } from "cookies-next"
import ButtonLink from '../components/builder-utils/ButtonLink';

/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
if (process.env.NEXT_PUBLIC_BUILDERIO_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDERIO_KEY);
}

export default function Custom404({ page, setThemeLocalStorage, toggle }: any) {
    const inputRef:any = useRef(0)
    const [pageCookie, setPageCookie] = useState<any>();

    useEffect(() => {
      setPageCookie(getCookie("schmarrntyp"))
    })

    const updateCookie = () => {
      setPageCookie(getCookie("schmarrntyp"))
    }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>404 Error - Seite nicht gefunden</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <Nav toggle={toggle} setThemeLocalStorage={setThemeLocalStorage} schmarrntyp={pageCookie !== undefined ? pageCookie : undefined}/>
      <div className="h-40"></div>
      <div className="mx-7 md:mx-[18%] flex items-center lg:mt-20">
        <section className="flex flex-col gap-5 flex-wrap">
          <h1 className="text-4xl font-poppins">404 - Seite nicht gefunden</h1>
          <p>Da ist dir wohl ein Tippfehler passiert</p>
          <div className="mt-10"><ButtonLink link={"/"} text={"Hier geht's zurück"}/></div>
        </section>
      </div>
      <Footer />
    </>
  );
}