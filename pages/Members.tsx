import MemberList from "../components/MemberList/MemberList";
import { memberListDetails } from '../data/memberListDetails';
import { useEffect } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import Head from 'next/head';



export default function Members() {

  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Members")
    context.setTitle("Members");
  }, [])

  return (
    <>
      <Head>
        <title>Powdered Wig Machine</title>
        <meta name="description" content="Portfolio page for Powdered Wig machine (Brandon Pitman)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MemberList listDetails={memberListDetails} />

    </>


  )
}