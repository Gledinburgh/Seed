import MemberList from "../components/MemberList/MemberList";
import PageHead from "../components/Layout/PageHead";
import Head from 'next/head';

import { projectListDetails } from '../data/projectListDetails';
import { siteMap } from '../data/siteMap';

import { useEffect } from 'react';
import { GeneralContext } from '../Context/GeneralContext';

export default function Archive() {

  const siteState = GeneralContext();
  const currentLocation = siteState.currentLocation;

  useEffect(() => {
    console.log("useEffect: Projects")
    siteState.updateLocation(siteMap.projects);
  }, [siteState])

  return (
    <>
      <PageHead title={currentLocation.title} description={currentLocation.description} />
      <MemberList listDetails={projectListDetails} />
    </>

  )
}