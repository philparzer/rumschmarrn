import { useRouter } from 'next/router';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import React from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import dynamic from 'next/dynamic';
import Footer from '../components/static/Footer'
import Nav from '../components/static/Nav';
import Layout from "../components/static/Layout"
import { useState } from "react";
import { ColorTheme } from "../shared-ts/enums";
import Schmarrntest from '../components/static/Schmarrntest';
import { useCookie } from "next-cookie"

/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
if (process.env.NEXT_PUBLIC_BUILDERIO_KEY) {
  builder.init(process.env.NEXT_PUBLIC_BUILDERIO_KEY);
}


export async function getStaticProps({ params }: any) {
  /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */

  /*FIXME: /spi Warning: data for page "/[...page]" (path "/spi") is 133 kB which exceeds the threshold of 128 kB, this amount of data can reduce performance.
    See more info here: https://nextjs.org/docs/messages/large-page-data*/

  let questions = await builder.getAll("schmarrntest", {})
  questions = questions.map((question):any => {return {question: question.data?.question, value: question.data?.value, type: question.data?.type }})

  const page:any = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      questions: questions || null,
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  /*
    Fetch all published pages for the current model.
    Using the `fields` option will limit the size of the response
    and only return the `data.url` field from the matching pages.
  */


  const pages = await builder.getAll("page", {
    fields: "data.url", // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true, //TODO: look into
  };
}

export default function Page({ page, toggle, setThemeLocalStorage, questions, cookie }: any) {
  const router = useRouter();
  const pageCookie = useCookie(cookie);
  const [schmarrnTestVisible, setSchmarrnTestVisible] = useState(!pageCookie.has("schmarrntyp"))

  /*
    This flag indicates if you are viewing the page in the Builder editor.
  */
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  /*
    Add your error page here. This will happen if there are no matching
    content entries published in Builder.
  */
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }


  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>
      <Nav toggle={toggle} setThemeLocalStorage={setThemeLocalStorage} schmarrntyp={pageCookie.get("schmarrntyp")}/>
      <div className="h-40"></div>
      {/* Render the Builder page */}
      <Layout>
      <BuilderComponent model="page" content={page} options={{includeRefs: true}}/>
      </Layout>
      <Footer />
      {schmarrnTestVisible &&
      <Schmarrntest questions={questions} cookie={pageCookie} setVisible={setSchmarrnTestVisible}/>
       }
    </>
  );
}