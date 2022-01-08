import Head from 'next/head';
import Script from 'next/script';

import PortfolioMain from "../components/Portfolio/PortfolioMain";
import { powderedWigMachineDetails } from '../data/portfolioDetails/powderedWigMachineDetails';


export default function PowderedWigMachine() {

  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Powdered Wig Machine")
    context.setTitle("Powdered Wig Machine");
  }, [])

  return (

    <div>
      <Head>
        <title>Powdered Wig Machine</title>
        <meta name="description" content="Portfolio page for Powdered Wig machine (Brandon Pitman)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioMain member={powderedWigMachineDetails} />

    </div>

  )
}