import dayjs from 'dayjs';
import React, {useState} from 'react';
import { EventsDateMap } from '../types';
import { fetchEvents } from '../utilities/fetchEvents';

const useEvents = (month, year) => {
  const [events, setEvents] = useState<EventsDateMap>({});

  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]

  const getTwoDigitMonth = (): string => {
    const twoDigitMonth = ('0' + ((month % 12) + 1));
    return twoDigitMonth.substring(twoDigitMonth.length - 2, twoDigitMonth.length);
  }

  const _fetchEvents = async () => {
      const selectedMonthYear = dayjs().set('year', year).set('month', month);
      const eventsResponse = await fetchEvents({
        startDate: selectedMonthYear.startOf('month'), // first day of the month
        firstDOW: selectedMonthYear.startOf('month').get('day'), // day of week; 0 === Sunday
        lastDate: selectedMonthYear.endOf('month').get('date'), // last date of the month
        monthName: months[selectedMonthYear.get('month')], // name of the month
        month:  getTwoDigitMonth(),// two digit month number
        year: ''+selectedMonthYear.year()
      });

      setEvents(eventsResponse);

    return events;
  } 
}

export default useEvents;