import MemberList from "../components/MemberList/MemberList";
import PageHead from "../components/Layout/PageHead";
import { memberListDetails } from '../data/memberListDetails';
import { siteMap } from '../data/siteMap';
import { useEffect } from 'react';
import { GeneralContext } from '../Context/GeneralContext';
import { ISiteLocation } from "../types";



export default function Members() {

  const siteState = GeneralContext();
  const currentLocation = siteState.currentLocation;

  useEffect(() => {
    console.log("useEffect: Members")
    siteState.updateLocation(siteMap.portfolios);
  }, [siteState])

  return (
    <>
      <PageHead favicon="/favicon.ico" title={currentLocation.title} description={currentLocation.description} />

      <MemberList listDetails={memberListDetails} />

    </>


  )
}