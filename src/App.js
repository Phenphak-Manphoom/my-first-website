import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import DisplayJohn from "./components/DisplayJohn";
import {JohnProfile}  from "./components/DisplayJohn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="gray" size="xs">
            Button
          </Button>
          <Button colorScheme="red" size="sm">
            Button
          </Button>
          <Button colorScheme="orange" size="md">
            Button
          </Button>
        </Stack>

        <Stack direction="row" spacing={6}>
          <Spinner color="red.500" size="md" />
          <Spinner color="blue.500" size="lg" />
          <Spinner color="gray.500" size="xl" />
        </Stack>

        <Stack spacing={3}>
          <Input variant="outline" placeholder="Outline" />
          <Input variant="filled" placeholder="Filled" />
          <Input variant="flushed" placeholder="Flushed" />
        </Stack>
      </ChakraProvider>
      <div className="display-john">
      <DisplayJohn />
      <JohnProfile />
      </div>
    </div>
  );
}

export default App;
