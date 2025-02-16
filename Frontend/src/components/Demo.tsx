import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  HStack,
  VStack,
  Progress,
} from "@chakra-ui/react";
import { fadeIn } from "./Animation";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "./ui/file-upload";

const DemoSection = () => {
  return (
    <Box bg="neutral.700" py={10} id="demo">
      <Container maxW="container.xl">
        <Box
          textAlign="center"
          mb={16}
          animation={`${fadeIn} 0.5s ease-in-out`}
        >
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            color="white"
            mb={4}
            fontFamily="heading"
          >
            Live Demo
          </Heading>
          <Text
            color="gray.300"
            fontSize="lg"
            maxW="2xl"
            mx="auto"
            fontFamily="body"
          >
            Test both AI models with your license plate images
          </Text>
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          w="100%"
          align="start"
          borderWidth={1}
        >
          <Box
            bg="neutral.800"
            p={6}
            rounded="xl"
            border="1px solid"
            borderRadius={8}
            borderColor="neutral.500/50"
            flex="1"
            animation={`${fadeIn} 0.7s ease-in-out backwards`}
          >
            <Box mb={6}>
              <Heading
                as="h3"
                size="xl"
                fontWeight="bold"
                color="white"
                mb={4}
                fontFamily="heading"
              >
                Upload Image
              </Heading>

              <FileUploadRoot alignItems="stretch" maxFiles={1}>
                <FileUploadDropzone
                  label="Drag and drop here to upload"
                  description=".png, .jpg up to 5MB"
                />
                <FileUploadList />
              </FileUploadRoot>
            </Box>

            <Box>
              <Box bg="neutral.700/30" p={4} rounded="lg">
                <Heading
                  as="h4"
                  size="md"
                  color="white"
                  mb={2}
                  fontFamily="heading"
                >
                  Image Preprocessing
                </Heading>
                <HStack p={4}>
                  <Button
                    variant="solid"
                    size="sm"
                    fontFamily="body"
                    bg={"indigo.910"}
                    color={"primary.100"}
                  >
                    Auto Enhance
                  </Button>
                  <Button variant="surface" size="sm" fontFamily="body">
                    Reset
                  </Button>
                </HStack>
              </Box>
            </Box>
          </Box>

          <Box
            bg="neutral.800"
            p={6}
            rounded="xl"
            border="1px solid"
            flex="1"
            animation={`${fadeIn} 0.9s ease-in-out backwards`}
            borderRadius={8}
            borderColor="neutral.500/50"
          >
            <Box mb={6} mt={2}>
              <Heading
                as="h3"
                size="xl"
                fontWeight="bold"
                color="white"
                mb={4}
                fontFamily="heading"
              >
                Analysis Results
              </Heading>
              <HStack p={4} mb={4}>
                <Button
                  variant="solid"
                  flex="1"
                  size="sm"
                  fontFamily="heading"
                  bg={"indigo.910"}
                  color={"primary.100"}
                >
                  Model A
                </Button>
                <Button
                  variant="surface"
                  flex="1"
                  size="sm"
                  fontFamily="heading"
                >
                  Model B
                </Button>
              </HStack>
            </Box>

            <VStack p={4} gap={3}>
              <Box bg="neutral.700/30" p={4} rounded="lg" w={"full"}>
                <Heading
                  as="h4"
                  size="md"
                  color="white"
                  mb={2}
                  fontFamily="heading"
                >
                  Detected Plate
                </Heading>
                <Text color="gray.400" fontFamily="mono" fontSize="lg">
                  {/* {modelAOutput} */}
                  Awaiting image...
                </Text>
              </Box>

              <Box bg="neutral.700/30" p={4} rounded="lg" w={"full"}>
                <Heading
                  as="h4"
                  size="md"
                  color="white"
                  mb={2}
                  fontFamily="heading"
                >
                  Confidence Score
                </Heading>
                  <Progress.Root>
                    <Progress.Track>
                      <Progress.Range />
                    </Progress.Track>
                  </Progress.Root>
              </Box>

              <Box bg="neutral.700/30" p={4} rounded="lg" w={"full"}>
                <Heading
                  as="h4"
                  size="md"
                  color="white"
                  mb={2}
                  fontFamily="heading"
                >
                  Processing Time
                </Heading>
                <Text color="indigo.400" fontFamily="mono">
                  {/* {processingTime} */}
                  0ms
                </Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default DemoSection;
