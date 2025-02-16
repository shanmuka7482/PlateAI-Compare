import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import DemoSection from "./components/Demo";
import ComparisonSection from "./components/Model_Comp";
import PerformanceSection from "./components/Performance";

function App() {
  return (
    <Box >
      <Hero />
      <DemoSection/>
      <ComparisonSection/>
      <PerformanceSection/>
    </Box>
  );
}

export default App;
