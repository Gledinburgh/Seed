
import { IEvent } from '../types';
import DetailModal from '../components/EventList/DetailModal';
import EventList from "../components/EventList/EventList";
import { Button } from 'antd';
import { useEffect, useState } from 'react';

//----------- Dummy Data Start ------------

const eventsDetails: IEvent[] = [{
  "coverImage": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  "title": "Patricia and the Bra-Lettes",
  "alt": "event place holder image",
  "weekday": "Wed",
  "time": "5:30 - 7:00 PM",
  "location": "Social Beer Garden",
  "city": "HOU",
  "state": "TX",
  "day": "15",
  "month": "JAN"

},
{
  "coverImage": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  "title": "Patricia and the Bra-Lettes",
  "alt": "event place holder image",
  "weekday": "Wed",
  "time": "5:30 - 7:00 PM",
  "location": "Social Beer Garden",
  "city": "HOU",
  "state": "TX",
  "day": "15",
  "month": "JAN"

},
{
  "coverImage": "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  "title": "Patricia and the Bra-Lettes",
  "alt": "event place holder image",
  "weekday": "Wed",
  "time": "5:30 - 7:00 PM",
  "location": "Social Beer Garden",
  "city": "HOU",
  "state": "TX",
  "day": "15",
  "month": "JAN"

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


  return (
    <>
      <DetailModal
        isModalVisible={isModalVisible}
        eventDetail={eventsDetails[0]}
        handleCancel={handleCancel}
      />
      <EventList showModal={showModal} eventsDetails={eventsDetails} />
    </>

  )
}