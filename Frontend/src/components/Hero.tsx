import {
  Box,
  Button,
  Container,
  Flex,
  chakra,
} from "@chakra-ui/react";
import { fadeIn, slideUp } from "./Animation";

const Hero = () => {
  // Keyframe animations

  return (
    <Box py={{ base: 20, md: 32 }} id="home" px={20} bg={"neutral.910/50"}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="flex-start"
          minH="70vh"

        >
          <Box
            w={{ base: "100%", md: "70%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <chakra.h1
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              color="white"
              mb={6}
              fontFamily="heading"
              lineHeight="1.2"
              animation={`${fadeIn} 0.5s ease-in-out backwards`}
            >
              Compare AI License Plate Recognition Models
            </chakra.h1>
            <chakra.p
              fontSize="xl"
              color="gray.300"
              mb={8}
              fontFamily="body"
              animation={`${fadeIn} 0.7s ease-in-out backwards`}
            >
              Upload an image and see how two different AI models analyze
              vehicle license plates in real-time.
            </chakra.p>
            <Button
              variant="solid"
              size="lg"
              as="a"
              animation={`${slideUp} 0.9s ease-out backwards`}
              bg={"indigo.910"}
              color={"primary.100"}
              fontFamily="heading"
            >
              Try Demo
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
export default Hero;
