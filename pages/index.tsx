import Head from 'next/head'
import Image from 'next/image'
import { BuilderComponent, builder } from '@builder.io/react';

import Nav from "../components/static/Nav"
import Footer from "../components/static/Footer"
import Layout from "../components/static/Layout"

export default function Home({home}: any) {

  return (
    <>
      <Head>
        <title>Rumschmarrn</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="mb-[20vh]"></div>
      <Layout>
        <BuilderComponent model="homepage" content={home} />
      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const urlPath = "/" + (params?.page?.join("/") || "");
  const home = await builder.get("homepage", { url: urlPath }).toPromise();


  return {
    props: {
      home: home || null,
    },
    revalidate: 5,
  };
}