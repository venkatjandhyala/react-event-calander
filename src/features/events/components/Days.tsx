import React from 'react'
import { Box, Flex, GridItem, Heading } from '@chakra-ui/react'

function Days() {
  
  return (
    <>
      { Array(7).fill(0).map((a, i) => (
        <GridItem colSpan={1} key={i}>
          <Flex justifyContent={'center'}>
            <Heading as='h6' fontSize='xl'>{'Sunday'}</Heading>
          </Flex>
        </GridItem>
      )) }
    </>
  )
}

export default Days