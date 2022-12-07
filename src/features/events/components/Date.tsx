import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import dayjs from 'dayjs';

const categoryBg = {
  "town hall": 'green.600',
  "conference": 'red.400',
  "webinar": 'purple.800'
}

function Date({ds, events}) {

  return (
    <GridItem colSpan={1} colStart={ds.get('day')}>
      <Box bg='gray.50' fontSize='xs' minH='32' borderRadius='10'>
        <Flex justifyContent='end' px={2} py={2}>
          <Box><Text as='span'>{ds.get('date')}</Text></Box>
        </Flex>
        <Flex px='2' gap={1} overflow='hidden' color='whiteAlpha.800' direction={'column'}>
          {events && events.map((event) => (
            <Flex 
              borderRadius={20} 
              px='2' 
              w='[inherit,inherit,4]'
              overflow='hidden'
              gap={1} 
              direction={'row'} 
              key={event.id} bgColor={categoryBg[event.category]}>
              <Text as='span'>{dayjs(event.startTime).get('hours')}</Text>
              <Text as='span'>{event.eventName}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </GridItem>
  )
}

export default Date