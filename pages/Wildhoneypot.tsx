import { promises as fs } from 'fs'

import PortfolioMain from "../components/Portfolio/PortfolioMain";
import PageHead from "../components/Layout/PageHead";


import { wildHoneyPotDetails as details } from '../data/portfolioDetails/wildHoneyPotDetails';
import { siteMap } from '../data/siteMap';

import { GeneralContext } from '../Context/GeneralContext';
import { useEffect } from "react";


/* -------------------- Imports end -------------------------- */

export async function getStaticProps() {
  const galleryDirectory = './public/Wildhoneypot/portfolioGallery';
  var filenames = await fs.readdir(galleryDirectory);

  var galleryImagePaths = await filenames.map((filename) => {
    return ({ "src": "/Wildhoneypot/portfolioGallery/" + filename, "alt": "Image of Wildhoneypot's artwork" })
  })

  return {
    props: {
      imagePaths: await Promise.all(galleryImagePaths),
    },
  }
}

export default function Wildhoneypot({ imagePaths }) {

  const siteState = GeneralContext();
  details.gallery = imagePaths;

  useEffect(() => {
    console.log("useEffect: Wildhoneypot")
    siteState.updateLocation(siteMap.portfolios);
  }, [siteState])

  return (

    <div>

      <PageHead title={details.member} description={details.description} />

      <PortfolioMain portfolio={details} />

    </div>

  )
}

