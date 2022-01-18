import Head from 'next/head';

import PortfolioMain from "../components/Portfolio/PortfolioMain";
import { blackSheepValentine } from '../data/portfolioDetails/blackSheepValentine';

import { GeneralContext } from '../Context/GeneralContext';
import { useEffect } from "react";

export default function PowderedWigMachine() {

  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Black Sheep Valentine")
    context.setTitle("Black Sheep Valentine");
  }, [])

  return (

    <div>
      <Head>
        <title>Black Sheep Valentine</title>
        <meta name="description" content="Art Exhibition page for Black Sheep Valintine. San Antonio TX, 2019" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioMain member={blackSheepValentine} />

    </div>

  )
}