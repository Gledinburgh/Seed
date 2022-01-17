import EventCard from './EventCard';
import { IEvent } from '../../types';


import { useEffect } from 'react';
import { GeneralContext } from '../../Context/GeneralContext';

export default function EventList({ eventsDetails, showModal }: { eventsDetails: IEvent[], showModal }) {



  const context = GeneralContext();

  useEffect(() => {
    console.log("useEffect: Events")
    context.setTitle("Events");
  }, [])

  return (
    <div>

      {
        eventsDetails.map(event => {
          return (
            <>

              <a> <EventCard showModal={showModal} event={event} /></a>

            </>
          )
        })
      }
    </div>
  )
}

