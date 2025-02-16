import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { fadeIn, slideUp } from "./Animation";
import JsonChart from "./Chart";
import CsvChart from "./CsvChart";

const PerformanceSection = () => {
  const isLargerThanMD = useBreakpointValue({ base: false, md: true });

  const animatedProps = {
    style: {
      animation: isLargerThanMD
        ? `${fadeIn} 0.7s ease-in-out backwards`
        : "none",
    },
  };

  return (
    <Box bg="neutral.800" py={10} id="performance">
      <Container maxW="container.xl">
        <Box
          textAlign="center"
          mb={16}
          animation={`${slideUp} 0.9s ease-out backwards`}
        >
          <Heading
            as="h2"
            size="4xl"
            fontWeight="bold"
            color="white"
            mb={4}
            fontFamily="heading"
          >
            Performance Metrics
          </Heading>
          <Text
            color="gray.300"
            fontSize="lg"
            maxW="2xl"
            mx="auto"
            fontFamily="body"
          >
            Real-world performance analysis of our AI models
          </Text>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          mb={12}
        >
          <Box
            bg="neutral.900"
            p={6}
            rounded="xl"
            border="1px solid"
            borderColor="neutral.700"
            textAlign="center"
            {...animatedProps}
          >
            
            <CsvChart file1={"/run-Feb16_20-58-39_lappy-001-tag-Accuracy.csv"} file2={"/run-Paddleocr-tag-Accuracy.csv"}/>
            <Heading
              as="h3"
              size="xl"
              fontWeight="bold"
              color="white"
              mb={2}
              fontFamily="heading"
            >
              Accuracy
            </Heading>
            <Text color="gray.300" fontFamily="body">
              Average recognition rate
            </Text>
          </Box>

          <Box
            bg="neutral.900"
            p={6}
            rounded="xl"
            border="1px solid"
            borderColor="neutral.700"
            textAlign="center"
            {...animatedProps}
          ><CsvChart file1={"/run-Feb16_20-58-39_lappy-001-tag-Edit Distance.csv"} file2={"/run-Paddleocr-tag-Edit Distance.csv"}/>
            
            <Heading
              as="h3"
              size="xl"
              fontWeight="bold"
              color="white"
              mb={2}
              fontFamily="heading"
            >
              Edit Distance
            </Heading>
            <Text color="gray.300" fontFamily="body">
              Processing efficiency
            </Text>
          </Box>

          <Box
            bg="neutral.900"
            p={6}
            rounded="xl"
            border="1px solid"
            borderColor="neutral.700"
            textAlign="center"
            {...animatedProps}
          ><CsvChart file1={"/run-Feb16_20-58-39_lappy-001-tag-Loss.csv"} file2={"/run-Paddleocr-tag-Loss.csv"}/>
            
            <Heading
              as="h3"
              size="xl"
              fontWeight="bold"
              color="white"
              mb={2}
              fontFamily="heading"
            >
              Loss
            </Heading>
            <Text color="gray.300" fontFamily="body">
              System optimization
            </Text>
          </Box>
        </Grid>
      </Container>
            
    </Box>
  );
};

export default PerformanceSection;
