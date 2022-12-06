import { Image } from "@chakra-ui/react";

import splashImg from "../../images/splash.jpg";

export const BackgroundImage = () => (
  <Image
    minHeight="100%"
    minWidth="1024px"
    width="100%"
    height="auto"
    position="fixed"
    top="0"
    left="0"
    zIndex="-1"
    src={splashImg}
    alt="racks of plants that look like a server farm"
  />
);
