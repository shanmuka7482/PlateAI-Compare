import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  useBreakpointValue,
  Table,
} from "@chakra-ui/react";
import { fadeIn } from "./Animation";

const ComparisonSection = () => {
  const isLargerThanLG = useBreakpointValue({ base: false, lg: true });

  const animationProps = {
    style: {
      animation: isLargerThanLG
        ? `${fadeIn} 0.7s ease-in-out backwards`
        : "none",
    },
  };

  return (
    <Box bg="neutral.800" py={20} id="comparison">
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
            Model Comparison
          </Heading>
          <Text
            color="gray.300"
            fontSize="lg"
            maxW="2xl"
            mx="auto"
            fontFamily="body"
          >
            Detailed comparison of our two AI models' architectures and
            performance
          </Text>
        </Box>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          mb={12}
          align="stretch" // Ensure equal height
        >
          <Box
            bg="neutral.700"
            p={6}
            rounded="xl"
            border="1px solid"
            borderColor="neutral.400/30"
            flex="1"
            {...animationProps}
          >
            <Flex alignItems="center" justifyContent="space-between" mb={6}>
              <Heading
                as="h3"
                size="xl"
                fontWeight="bold"
                color="white"
                fontFamily="heading"
              >
                Model A
              </Heading>
              <Box
                bg="indigo.500/10"
                color="indigo.400"
                px={3}
                py={1}
                rounded="full"
                fontSize="sm"
                fontFamily="body"
              >
                Primary Model
              </Box>
            </Flex>
            <Box p={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Architecture
                </Text>
                <Text color="white" fontFamily="body">
                  CNN + Transformer
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Dataset Size
                </Text>
                <Text color="white" fontFamily="body">
                  1.2M images
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Accuracy
                </Text>
                <Text color="white" fontFamily="body">
                  98.5%
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Inference Time
                </Text>
                <Text color="white" fontFamily="body">
                  0.3s
                </Text>
              </Flex>
            </Box>
          </Box>

          <Box
            bg="neutral.700"
            p={6}
            rounded="xl"
            border="1px solid"
            borderColor="neutral.400/30"
            flex="1"
            {...animationProps}
          >
            <Flex alignItems="center" justifyContent="space-between" mb={6}>
              <Heading
                as="h3"
                size="xl"
                fontWeight="bold"
                color="white"
                fontFamily="heading"
              >
                Model B
              </Heading>
              <Box
                bg="green.500/10"
                color="green.400"
                px={3}
                py={1}
                rounded="full"
                fontSize="sm"
                fontFamily="body"
              >
                Experimental
              </Box>
            </Flex>
            <Box p={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Architecture
                </Text>
                <Text color="white" fontFamily="body">
                  YOLO + OCR
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Dataset Size
                </Text>
                <Text color="white" fontFamily="body">
                  800K images
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Accuracy
                </Text>
                <Text color="white" fontFamily="body">
                  97.2%
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="gray.300" fontFamily="body">
                  Inference Time
                </Text>
                <Text color="white" fontFamily="body">
                  0.5s
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Box
          bg="neutral.700"
          p={6}
          rounded="xl"
          border="1px solid"
          borderColor="neutral.400/30"
          {...animationProps}
        >
          <Heading
            as="h3"
            size="xl"
            fontWeight="bold"
            color="white"
            mb={6}
            fontFamily="heading"
          >
            Performance Comparison
          </Heading>
          <Box overflowX="auto">
            <Table.Root
              size="sm"
              minW="container.sm"
              color={"neutral.700"}
              variant="outline"
            >
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader textAlign="left" p={4}>
                    <Text color="gray.300" fontFamily="body">
                      Metric
                    </Text>
                  </Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="center" p={4}>
                    <Text color="indigo.400" fontFamily="body">
                      Model A
                    </Text>
                  </Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="center" p={4}>
                    <Text color="green.400" fontFamily="body">
                      Model B
                    </Text>
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell p={4}>
                    <Text color="gray.300" fontFamily="body">
                      Character Recognition
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      99.1%
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      98.3%
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell p={4}>
                    <Text color="gray.300" fontFamily="body">
                      Plate Detection
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      98.5%
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      99.2%
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell p={4}>
                    <Text color="gray.300" fontFamily="body">
                      Low Light Performance
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      96.7%
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      94.5%
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell p={4}>
                    <Text color="gray.300" fontFamily="body">
                      Processing Speed
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      0.3s
                    </Text>
                  </Table.Cell>
                  <Table.Cell p={4} textAlign="center">
                    <Text color="white" fontFamily="body">
                      0.5s
                    </Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ComparisonSection;
