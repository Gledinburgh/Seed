import { promises as fs } from 'fs'

import PortfolioMain from "../components/Portfolio/PortfolioMain";
import PageHead from "../components/Layout/PageHead";


import { powderedWigMachineDetails as details } from '../data/portfolioDetails/powderedWigMachineDetails';
import { siteMap } from '../data/siteMap';

import { GeneralContext } from '../Context/GeneralContext';
import { useEffect } from "react";


/* -------------------- Imports end -------------------------- */

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

  const siteState = GeneralContext();
  details.gallery = imagePaths;

  useEffect(() => {
    console.log("useEffect: Powdered Wig Machine")
    siteState.updateLocation(siteMap.portfolios);
  }, [siteState])

  return (

    <div>

      <PageHead favicon="/favicon.ico" title={details.member} description={details.description} />

      <PortfolioMain portfolio={details} />

    </div>

  )
}

