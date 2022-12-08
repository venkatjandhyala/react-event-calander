import { Box, Grid, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CalendarFilter from "./components/CalendarFilter";

import Date from "./components/Date";
// import Days from "./components/Days";
// import useEvents from "./hooks/useEvents";
import { EventsDateMap } from "./types";
import { fetchEvents } from "./utilities/fetchEvents";
import { monthNames } from "./constants";

export const Calendar = () => {
  const [month, setMonth] = useState(dayjs().month())
  const [year, setYear] = useState(dayjs().year());
  const [events, setEvents] = useState<EventsDateMap>({});
  // const e = useEvents(month, year); Need to modify this
  const daysInMonth = dayjs().set('month', month).daysInMonth();


  useEffect(() => {
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
        monthName: monthNames[selectedMonthYear.get('month')], // name of the month
        month:  getTwoDigitMonth(),// two digit month number
        year: ''+selectedMonthYear.year()
      });

      setEvents(eventsResponse);
    }

    _fetchEvents();
  }, [month, year]);

  const handleChange = (e) => {
    setMonth(e.month);
    setYear(e.year);
    setEvents({})
  }
  
  return (
    <Box>
      <Heading
        size="2xl"
        py={5}
        bgGradient="linear(to-b, olive.50, olive.200)"
        textAlign="center"
      >
        Orinoco Events
      </Heading>
      <Box id="calendar-grid" py={['2', '5', '10']} px={['2', '10', '20']} h='container.md' bgColor="olive.300">
        <Grid 
          h='xl'
          templateRows='repeat(5, 1fr)'
          templateColumns='repeat(7, 1fr)'
          gap={2}
        >
          <CalendarFilter month={month} year={year} onChange={handleChange}/>
          {Array(daysInMonth).fill(0).map((d, i) => (
            <Date key={i}
            events={events[i+1]}
            ds={dayjs().set('date', i+1).set('month', month).set('year', year)}></Date>
          ))}
        </Grid>
      </Box>
    </Box>
  )
};
