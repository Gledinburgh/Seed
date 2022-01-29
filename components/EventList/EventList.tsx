import EventCard from './EventCard';
import { IEvent } from '../../types';

export default function EventList({ eventsDetails, showModal }: { eventsDetails: IEvent[], showModal }) {

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

