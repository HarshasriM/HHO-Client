import React,{useState} from 'react'
import EventForm from './EventForm'
import SubEventsDisplay from './SubEventsDisplay';

function NewEventDisplay() {
  const [subEvents, setSubEvents] = useState([]);
  const [subEventDetails, setSubEventDetails] = useState({
    subEventTitle: '',
    subEventDescription: '',
    subEventVenue: '',
    subEventDate: '',
    subEventPoster: null,
  });

  console.log(subEvents);
  return (
    <>
      <EventForm  subEvents={subEvents} subEventDetails={subEventDetails} setSubEvents={setSubEvents} setSubEventDetails={setSubEventDetails}/>
      <br /><br />
      <SubEventsDisplay subEvents={subEvents} subEventDetails={subEventDetails} setSubEventDetails={setSubEventDetails} setSubEvents={setSubEvents} />
    </>
  )
  
}

export default NewEventDisplay
