import PortfolioMain from "../components/Portfolio/PortfolioMain";
import PageHead from "../components/Layout/PageHead";

import { blackSheepValentine } from '../data/portfolioDetails/blackSheepValentine';
import { siteMap } from '../data/siteMap';


import { GeneralContext } from '../Context/GeneralContext';
import { useEffect } from "react";

/* -------------------- Imports end -------------------------- */


export default function BlackSheepValentine() {

  const siteState = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Black Sheep Valentine")
    siteState.updateLocation(siteMap.projects);
  }, [siteState])

  return (

    <div>
      {/* <Head>
        <title>Black Sheep Valentine</title>
        <meta name="description" content="Art Exhibition page for Black Sheep Valintine. San Antonio TX, 2019" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <PageHead title={blackSheepValentine.member} description={blackSheepValentine.description} />

      <PortfolioMain portfolio={blackSheepValentine} />

    </div>

  )
}