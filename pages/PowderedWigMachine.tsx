import Head from 'next/head';
import { promises as fs } from 'fs'
import path from 'path'

import PortfolioMain from "../components/Portfolio/PortfolioMain";
import { powderedWigMachineDetails } from '../data/portfolioDetails/powderedWigMachineDetails';

import { GeneralContext } from '../Context/GeneralContext';
import { useEffect } from "react";

export async function getStaticProps() {
  const galleryDirectory = './public/PowderedWigMachine/portfolioGallery';
  var filenames = await fs.readdir(galleryDirectory);

  var galleryImagePaths = await filenames.map((filename) => {
    return ({ "src": "/PowderedWigMachine/portfolioGallery/" + filename, "alt": "Image of Powdered Wig Machine's artwork" })
  })

  return {
    props: {
      imagePaths: await Promise.all(galleryImagePaths),
    },
  }
}

export default function PowderedWigMachine({ imagePaths }) {

  const context = GeneralContext();
  powderedWigMachineDetails.gallery = imagePaths;

  console.log("imagepaths:", imagePaths[0].src)

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

      <PortfolioMain portfolio={powderedWigMachineDetails} />

    </div>

  )
}

