import { Box, Heading } from "@chakra-ui/react";

export const Calendar = () => (
  <Box>
    <Heading
      size="2xl"
      py={5}
      bgGradient="linear(to-b, olive.50, olive.200)"
      textAlign="center"
    >
      Orinoco Events
    </Heading>
    <Box id="calendar-grid" py={10} bgColor="olive.300">
    </Box>
  </Box>
);
