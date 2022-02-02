import MemberList from "../components/MemberList/MemberList";
import PageHead from "../components/Layout/PageHead";
import Head from 'next/head';

import { projectListDetails } from '../data/projectListDetails';
import { siteMap } from '../data/siteMap';

import { useEffect } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import ArchiveList from "../components/MemberList/ArchiveList";

export default function Archive() {

  const siteState = GeneralContext();
  const currentLocation = siteState.currentLocation;

  useEffect(() => {
    console.log("useEffect: Projects")
    siteState.updateLocation(siteMap.projects);
  }, [siteState])

  return (
    <>
      <PageHead favicon="/favicon.ico" title={currentLocation.title} description={currentLocation.description} />
      <ArchiveList listDetails={projectListDetails} />
    </>

  )
}