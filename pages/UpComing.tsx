import Head from 'next/head';
import DetailModal from '../components/EventList/DetailModal';
import EventList from "../components/EventList/EventList";
import PageHead from "../components/Layout/PageHead";

import { GeneralContext } from '../Context/GeneralContext';
import { useEffect, useState } from 'react';

import { IEvent } from '../types';
import { siteMap } from '../data/siteMap';

//----------- Dummy Data Start ------------

const eventsDetails: IEvent[] = [{
  "coverImage": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F211266459%2F525255390127%2F1%2Foriginal.20220112-142526?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=5ba79feb0d4b8bbd7795f650086746e1",
  "title": "Patricia and Her Wizard Sluts",
  "alt": "event place holder image",
  "weekday": "Sat",
  "time": "5:30 - 7:00 PM",
  "location": "Carnival Lounge",
  "city": "NO",
  "state": "LA",
  "day": "22",
  "month": "JAN"
},
{
  "coverImage": "https://f4.bcbits.com/img/0025583089_10.jpg",
  "title": "The Wizard",
  "alt": "event place holder image",
  "weekday": "Wed",
  "time": "8:30 - 10:00 PM",
  "location": "Social Beer Garden",
  "city": "HOU",
  "state": "TX",
  "day": "30",
  "month": "JAN"

},
{
  "coverImage": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  "title": "Patricia and the Bra-Lettes",
  "alt": "event place holder image",
  "weekday": "Wed",
  "time": "5:30 - 7:00 PM",
  "location": "Match",
  "city": "HOU",
  "state": "TX",
  "day": "12",
  "month": "FEB"

}]

// ----------- Dummy Data End ---------


export default function UpComing() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const siteState = GeneralContext();
  const currentLocation = siteState.currentLocation;

  useEffect(() => {
    console.log("useEffect: Events")
    siteState.updateLocation(siteMap.upComing);
  }, [siteState])


  return (
    <>
      <PageHead title={currentLocation.title} description={currentLocation.description} />

      <DetailModal
        isModalVisible={isModalVisible}
        eventDetail={eventsDetails[0]}
        handleCancel={handleCancel}
      />
      <EventList showModal={showModal} eventsDetails={eventsDetails} />
    </>

  )
}