import React from 'react'
import { Box, Button, Flex, GridItem, Heading, Icon } from '@chakra-ui/react'
import dayjs from 'dayjs'

import { monthNames } from '../constants';

function CalendarFilter({month, year, onChange}) {
  const selectedMonthYear = dayjs().set('month', month).set('year', year);

  const handlePrevClick = (e) => {
    const prevMonth = selectedMonthYear.subtract(1, 'month');
    onChange({
      month: prevMonth.get('month'),
      year: prevMonth.get('year')
    })
  }

  const handleNextClick = (e) => {
    const nextMonth = selectedMonthYear.add(1, 'month');
    onChange({
      month: nextMonth.get('month'),
      year: nextMonth.get('year')
    })
  }

  return (
    <>
      <GridItem
        colSpan={5}
        colStart={2}
      >
        <Flex direction='row' gap='4' justifyContent={'center'}>
            <Box><Button onClick={handlePrevClick}> Prev </Button></Box>
            <Box w='xl' bgColor='olive.500' borderRadius='8' ><Heading as="h2" textAlign='center' fontWeight='light'>{`${monthNames[month]}, ${year}`}</Heading></Box>
            <Box><Button onClick={handleNextClick}>Next</Button></Box>
        </Flex>
      </GridItem>
      <GridItem/>
    </>
  )
}

export default CalendarFilter