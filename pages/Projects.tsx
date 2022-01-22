import MemberList from "../components/MemberList/MemberList";
import { projectListDetails } from '../data/projectListDetails';
import { useEffect } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import Head from 'next/head';

export default function Archive() {

  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Projects")
    context.setTitle("Projects");
  }, [])

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Current and past projects, exhibitions, events, and performances " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MemberList listDetails={projectListDetails} />
    </>

  )
}